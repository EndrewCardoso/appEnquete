import { VStack, Text, Button } from 'native-base';

export default function Principal({navigation}) {

  
  return (
    <VStack flex={1} m={4}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Bem Vindo!</Text>

        <Button mb={4} onPress={()=>navigation.navigate('CadPessoa')}>Cadastrar Pessoa</Button>
        <Button onPress={()=>navigation.navigate('CadPergunta')}>Cadastrar Pergunta</Button>
    </VStack>
  );
}