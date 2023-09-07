import { VStack, Image, Text, Center, FormControl, Input } from 'native-base';

export default function Login() {
  return (
    <VStack flex={2} alignContent='center'>
      <Text>Olá, faça o seu login!</Text>

      <FormControl>
        <FormControl.Label>Usuário</FormControl.Label>
        <Input placeholder='Digite o usuário.' w='100%'/>

        <FormControl.Label>Senha</FormControl.Label>
        <Input placeholder='Digite a senha.' w='100%'/>
      </FormControl>
    </VStack>
  );
}