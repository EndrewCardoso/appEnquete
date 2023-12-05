import { VStack, Text, Button, ScrollView } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import Caixa from '../components/Caixa';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPerguntaByUser } from '../servicos/pergunta';

export default function Principal({navigation}) { 

  const [ambiente, setAmbiente] = useState<Ambiente>();
  const [perguntas, setPerguntas] = useState<Pergunta[]>();

  let popularPerguntas = async () => {
    
    console.log('buscando perguntas...')
    if (!perguntas) {
      await AsyncStorage.getItem('ambiente').then(json => {
        setAmbiente(JSON.parse(json));
  
        getPerguntaByUser(ambiente.user.id, ambiente.token).then(res => {
          if (res) {
            setPerguntas(res.data.result);  
          } else {
            return null;
          }
        });
      });
    }
  }

  const InserirPergunta = async () => {
     await AsyncStorage.removeItem('pergunta').then(res => {
       navigation.navigate('CadPergunta');
     });
  }

  useEffect(() => {
    popularPerguntas();
  })

  return (
    <VStack flex={1} p={2}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Bem-Vindo(a), {ambiente?.user.nome}!</Text>

        <VStack alignItems={'flex-end'}>
          {/* <Button 
            size={10}
            onPress={popularPerguntas}>Popular Perguntas</Button> */}

          <Button 
            size={20}
            onPress={InserirPergunta}
            endIcon={<Icon as={Icon} name='new-message' size={25} color='#fff'/>}></Button>
      </VStack>

      <ScrollView>
        { perguntas?.map((perguntaMap) => ( <Caixa navigation={navigation} pergunta={perguntaMap} token={ambiente.token} /> )) }
      </ScrollView>
    </VStack>
  );
}