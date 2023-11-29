import { VStack, Button, Input, Image, Text, Toast } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import Logo from '../assets/Logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Selecao({navigation}) {

  const [codPergunta, setCodPergunta] = useState('');

  async function getPergunta() {
    try {
      AsyncStorage.setItem('codigoPergunta', codPergunta);
      navigation.navigate('Pergunta');
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
          <Button onPress={()=>getPergunta()}>
            <Icon name='forward' size={25} color='#fff'/>
          </Button>
      </VStack>
    </VStack>
  );
}