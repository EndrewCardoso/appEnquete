import { VStack, Button, Input, Image, Text, Toast } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import Logo from '../assets/Logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { getPergunta } from '../servicos/pergunta';

export default function Selecao({navigation}) {

  const [codPergunta, setCodPergunta] = useState('');

  async function verifyPergunta() {
    try {
      getPergunta(parseInt(codPergunta)).then(res => {
          if (res && res.data.result[0]) {
            AsyncStorage.setItem('codigoPergunta', codPergunta);
            navigation.navigate('Pergunta');
          } else {
            Toast.show({
              title: 'Erro',
              description: 'O código da pergunta é inexistente!',
              backgroundColor: 'red.500'
            });
          }
      })
    } catch (error) {
      Toast.show({
        title: 'Erro',
        description: 'Não foi possível buscar a pergunta.',
        backgroundColor: 'red.500'
      });
    }
  }

  return (
    <VStack flex={1} p={2}>
      <VStack alignItems={'flex-end'}>

        <Button 
          onPress={()=>navigation.navigate('Login')}
          endIcon={<Icon as={Icon} name='login' size={25} color='#fff'/>}>Login</Button>
      </VStack>

      <Image alignSelf={'center'} source={Logo} size={200} mt={50} alt='Logo do app'/>

      <VStack direction={'row'} mt={50}>
          <Input placeholder='Insira o código da Pergunta.' w='83%' mr={2} value={codPergunta} onChangeText={setCodPergunta}/>
          <Button onPress={verifyPergunta}>
            <Icon name='forward' size={25} color='#fff'/>
          </Button>
      </VStack>
    </VStack>
  );
}