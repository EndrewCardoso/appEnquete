import { VStack, Text, FormControl, Input, Button } from 'native-base';

export default function CadPessoa({navigation}) {
  return (
    <VStack flex={1} alignContent='center' justifyContent='center' m={8}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Cadastre uma pessoa.</Text>

        <FormControl>
            <FormControl.Label>Nome</FormControl.Label>
            <Input placeholder='Digite o nome.' w='100%' mb={4}/>

            <FormControl.Label>Email</FormControl.Label>
            <Input placeholder='Digite o e-mail.' w='100%' mb={4}/>

            <FormControl.Label>Usuário</FormControl.Label>
            <Input placeholder='Digite o usuário.' w='100%' mb={4}/>

            <FormControl.Label>Senha</FormControl.Label>
            <Input placeholder='Digite a senha.' w='100%' mb={4}/>

            <Button>Salvar</Button>
        </FormControl>
    </VStack>
  );
}