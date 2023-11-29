import { VStack, Text, Button, Box, Radio, FormControl, Toast } from 'native-base';
import { useEffect, useState } from 'react';
import { getPergunta, saveResultado } from '../servicos/pergunta';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Pergunta({navigation}) {

 const [radioValue, SetRadioValue] = useState('');
 const [pergunta, setPergunta] = useState<Pergunta>();

 useEffect(()=>{
  AsyncStorage.getItem('codigoPergunta').then(codigo => {
    getPergunta(parseInt(codigo)).then(p => {
      
      //TODO: Ver como é possível fazer essa parte.
      // let perguntaAux = JSON.parse(p.data);
      
      //setPergunta(p.data.result);
      // console.log(p.data);
      // console.log(perguntaAux);
      //pergunta = JSON.parse(p.data.result);
    })
  })
 },[]);

const responder = async () => {
  const res = await saveResultado(pergunta.id, radioValue);

  if (res) {
    navigation.navigate('Selecao')
  }
}

    return (
      <VStack flex={1} m={2}>

        <Box
            mb={4}
            bg={'primary.400:alpha.30'}
            p="6" 
            rounded="xl" 
            _text={{
              fontSize: 'xl',
              fontWeight: 'medium',
              color: '#aaa',
              textAlign: 'justify'
            }}>
            {pergunta?.titulo}
            <Text color={'#aaa'} fontSize={'lg'}>{pergunta?.descricao}</Text>
        </Box>
        <Box p="6">
            <Text color={'#aaa'} fontSize={'lg'}>Selecione a opção desejada!</Text>
            <Radio.Group name='radioResposta' value={radioValue} onChange={(nextValue)=>{
              SetRadioValue(nextValue);
            }}>
              <Radio value='Sim' my={1}>Sim</Radio>  
              <Radio value='Nao'>Não</Radio>  
            </Radio.Group>  
        </Box>

        <Button onPress={()=>responder}>Enviar Resposta</Button>
      </VStack>
  );
}