import { VStack, Text, FormControl, Input, Button } from 'native-base';

export default function CadPergunta({navigation}) {
  return (
    <VStack flex={1} alignContent='center' justifyContent='center' m={8}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Cadastre a sua pergunta.</Text>

        <FormControl>
            <FormControl.Label>Título</FormControl.Label>
            <Input placeholder='Digite o título da pergunta.' w='100%' mb={4}/>

            <FormControl.Label>Descrição</FormControl.Label>
            <Input placeholder='Digite a pergunta.' w='100%' multiline={true} mb={4}/>

            <Button>Salvar</Button>
        </FormControl>
    </VStack>
  );
}