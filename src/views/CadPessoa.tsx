import { VStack, Text, FormControl, Input, Button, Toast } from 'native-base';
import { saveUser } from '../servicos/usuario';
import { useState } from 'react';
import { mensagem } from '../utils/Mensagem';

export default function CadPessoa({navigation}) {

  const [nome, setnome] = useState('');
  const [email, setemail] = useState('');
  const [senha, setsenha] = useState('');
  const [confSenha, setconfSenha] = useState('');

  const saveNewUser = async () => {

    if (senha == confSenha) {
      await saveUser(nome, email, senha).then(res => {
        if (res) {
          navigation.replace('Login');
          mensagem('Usuário cadastrado!');
        } else {
          mensagem('Para cadastrar um novo usuário preencha corretamente todos os campos!', false);
        }
      });
    } else {
      mensagem('As senhas não são iguais!', false);
    }
  }

  return (
    <VStack flex={1} alignContent='center' justifyContent='center' m={8}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Cadastre um usuário.</Text>

        <FormControl>
            <FormControl.Label>Nome</FormControl.Label>
            <Input placeholder='Digite o nome.' w='100%' mb={4} value={nome} onChangeText={setnome} />

            <FormControl.Label>Email</FormControl.Label>
            <Input placeholder='Digite o e-mail.' w='100%' mb={4} value={email} onChangeText={setemail} />

            <FormControl.Label>Senha</FormControl.Label>
            <Input placeholder='Digite a senha.' w='100%' mb={4} secureTextEntry value={senha} onChangeText={setsenha}/>

            <FormControl.Label>Confirmar Senha</FormControl.Label>
            <Input placeholder='Digite a senha novamente.' w='100%' mb={4} secureTextEntry  value={confSenha} onChangeText={setconfSenha}/>

            <Button onPress={saveNewUser}>Salvar</Button>
        </FormControl>
    </VStack>
  );
}