import { VStack, Image, Text, FormControl, Input, Button } from 'native-base';

export default function CadPergunta() {
  return (
    <VStack flex={1} alignContent='center' justifyContent='center' m={8}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Cadastre uma pergunta.</Text>

        <FormControl>
            <FormControl.Label>Titulo</FormControl.Label>
            <Input placeholder='Digite o título da pergunta.' w='100%' mb={4}/>

            <FormControl.Label>Descricao</FormControl.Label>
            <Input placeholder='Digite a pergunta.' w='100%' mb={4}/>
        </FormControl>
    </VStack>
  );
}