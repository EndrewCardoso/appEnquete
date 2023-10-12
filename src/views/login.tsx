import { VStack, Text, FormControl, Input, Button } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import IconCadPessoa from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {
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
          <Input placeholder='Digite o usuário.' w='100%' mb={4}/>

          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder='Digite a senha.' w='100%' mb={4}/>

          <Button 
            onPress={()=>navigation.navigate('Principal')}
            endIcon={<Icon as={Icon} name='forward' size={25} color='#fff'/>}>Entrar</Button>
        </FormControl>
      </VStack>
    </VStack>
  );
}