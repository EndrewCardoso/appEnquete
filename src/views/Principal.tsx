import { VStack, Image, Text, FormControl, Input, Button } from 'native-base';

export default function Principal() {
  return (
    <VStack flex={1} m={4}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Bem Vindo!</Text>

        <Button mb={4}>Cadastrar Pessoa</Button>
        <Button>Cadastrar Pergunta</Button>
    </VStack>
  );
}