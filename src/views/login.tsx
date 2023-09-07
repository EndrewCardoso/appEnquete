import { VStack, Image, Text, FormControl, Input, Button } from 'native-base';

export default function Login() {
  return (
    <VStack flex={1} alignContent='center' justifyContent='center' m={8}>
      <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Olá, faça o seu login!</Text>

      <FormControl>
        <FormControl.Label>Usuário</FormControl.Label>
        <Input placeholder='Digite o usuário.' w='100%' mb={4}/>

        <FormControl.Label>Senha</FormControl.Label>
        <Input placeholder='Digite a senha.' w='100%' mb={4}/>

        <Button>Logar</Button>
      </FormControl>
    </VStack>
  );
}