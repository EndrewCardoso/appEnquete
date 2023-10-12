import { VStack, Button, Input, Image, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import Logo from '../assets/Logo.png';

export default function Selecao({navigation}) {
  return (
    <VStack flex={1} p={2}>
      <VStack alignItems={'flex-end'}>
            {/* <Button alignContent={'center'} onPress={()=>navigation.navigate('Login')}>
              <VStack direction={'row'} mr={1}>
                <Text color='white' mr={1}>Login</Text>
                <Icon name='login' size={25} color='#fff'/>
              </VStack>
            </Button> */}

        <Button 
          onPress={()=>navigation.navigate('Login')}
          endIcon={<Icon as={Icon} name='login' size={25} color='#fff'/>}>Login</Button>
      </VStack>

      <Image alignSelf={'center'} source={Logo} size={200} mt={50} alt='Logo do app'/>

      <VStack direction={'row'} mt={50}>
          <Input placeholder='Insira o código da Pergunta.' w='83%' mr={2}/>
          <Button onPress={()=>navigation.navigate('Pergunta')}>
            <Icon name='forward' size={25} color='#fff'/>
          </Button>
      </VStack>
    </VStack>
  );
}