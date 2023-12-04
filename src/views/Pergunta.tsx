import { VStack, Text, Button, Box, Radio } from 'native-base';
import { useEffect, useState } from 'react';
import { getPergunta, saveResultado } from '../servicos/pergunta';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mensagem } from '../utils/Mensagem';

export default function Pergunta({navigation}) {

 const [radioValue, SetRadioValue] = useState('');
 const [pergunta, setPergunta] = useState<Pergunta>();

 useEffect(()=>{
  AsyncStorage.getItem('codigoPergunta').then(codigo => {
    getPergunta(parseInt(codigo)).then(res => {
      setPergunta(res.data.result[0]);
    })
  })
 },[]);

const responder = async () => {
  saveResultado(pergunta.id, radioValue).then(res => {
    if (res) {
      navigation.navigate('Selecao');
      mensagem('Resposta confirmada!');
    } else {
      mensagem('Não foi possível responder, tente novamente!', false);
    }
  });
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

      <Button onPress={responder}>Enviar Resposta</Button>
    </VStack>
  );
}