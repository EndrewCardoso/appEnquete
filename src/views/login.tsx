import { VStack, Text, FormControl, Input, Button } from 'native-base';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import IconCadPessoa from 'react-native-vector-icons/FontAwesome';
import { efetuarLogin } from '../servicos/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mensagem } from '../utils/Mensagem';

export default function Login({navigation}) {
    
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = async () => {
    await efetuarLogin(email, senha).then(res => {
      if (res) {
        if(res.result[0].id > 0) {
          let ambiente: Ambiente = {
            user: res.result[0],
            token: res.token,
          }
    
          if (ambiente.user && ambiente.token) {
            AsyncStorage.setItem('ambiente', JSON.stringify(ambiente));
            navigation.replace('Principal', res);
          }
        } else {
          mensagem('Usuário inexistente, tente novamente, ou cadastre-se!', false);
        }
      } else {
        mensagem('Informe o email e senha corretamente!', false);
      }
    }).catch(error => {
      console.log(error);
      mensagem('Não foi possivel realizar login!', false);
    });
  }

  return (
    <VStack flex={1} p={2}>
      <VStack alignItems={'flex-end'}>
        <Button 
          onPress={()=>navigation.navigate('CadPessoa')}
          endIcon={<IconCadPessoa as={IconCadPessoa} name='user-plus' size={25} color='#fff'/>}>Cadastre-se</Button>
      </VStack>

      <VStack flex={1} justifyContent='center'>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Olá, faça o seu login!</Text>

        <FormControl>
          <FormControl.Label>Usuário</FormControl.Label>
          <Input placeholder='Digite o e-mail.' w='100%' mb={4} value={email} onChangeText={setEmail}/>

          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder='Digite a senha.' w='100%' mb={4} value={senha} onChangeText={setSenha} secureTextEntry/>

          <Button 
            onPress={logar}
            endIcon={<Icon as={Icon} name='forward' size={25} color='#fff'/>}>Entrar</Button>
        </FormControl>
      </VStack>
    </VStack>
  );
}