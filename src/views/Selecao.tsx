import { VStack, Button, Input } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Selecao({navigation}) {
  return (
      <VStack flex={1} m={4}>
        <Button 
            w='50%'
            onPress={()=>navigation.navigate('Login')}>Conectar-se</Button>

            <VStack alignItems={'center'} direction={'row'} mt={4}>
                <Input placeholder='Insira o código da Pergunta.' w='80%' mr={2}/>
                <Button onPress={()=>navigation.navigate('Pergunta')}>Inserir</Button>
            </VStack>
    </VStack>
  );
}