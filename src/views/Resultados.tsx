import { VStack, Text, Button, ScrollView } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getResultadoByPergunta } from '../servicos/pergunta';

export default function Principal({navigation}) { 

  const [ambiente, setAmbiente] = useState<Ambiente>();
  const [tituloPergunta, setTituloPergunta] = useState('');
  const [respostas, setRespostas] = useState([]);

  const getResultados = async () => {
    console.log('buscando a lista de respostas!')
    await AsyncStorage.getItem('ambiente').then(json => {
        let ambienteAux: Ambiente = JSON.parse(json);
        setAmbiente(ambienteAux);
    });
  
    await AsyncStorage.getItem('pergunta').then(json => {

        console.log(json)
        let perguntaAux: Pergunta = JSON.parse(json);
        if (perguntaAux) {
            setTituloPergunta(perguntaAux.titulo);
            getResultadoByPergunta(perguntaAux.id, ambiente.token).then(res => {
                console.log(res)

                if (res.result) {
                    setRespostas(res.result);
                    AsyncStorage.removeItem('pergunta');
                }
            });
        }
    });    
  }

  useEffect(() => {
    if (respostas && respostas.length == 0) {
        getResultados();
    }
  })

  return (
    <VStack flex={1} p={2}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>{tituloPergunta}</Text>

        <VStack alignItems={'flex-end'}>
            <Button 
                size={20}
                onPress={()=>navigation.navigate('Grafico')}
                endIcon={<FontAwesome as={FontAwesome} name='bar-chart' size={25} color='#aaa'/>}></Button>
        </VStack>

        <Text w='100%' textAlign='center' fontSize={16} fontWeight='bold' mb={8}>Listagem de respostas.</Text>

        <ScrollView>
            { respostas ? respostas.map((res, index) => ( <Text>{`Usuário ${index + 1}: ${res.resposta}`}</Text> )) : <Text>Nenhuma resposta encontrada!</Text> }
        </ScrollView>
    </VStack>
  );
}