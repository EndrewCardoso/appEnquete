import { VStack, Text, FormControl, Input, Button } from 'native-base';
import React from 'react';

export default function Login({navigation}) {
  return (
    <VStack flex={1} justifyContent='center' m={4}>
      <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Olá, faça o seu login!</Text>

      <FormControl>
        <FormControl.Label>Usuário</FormControl.Label>
        <Input placeholder='Digite o usuário.' w='100%' mb={4}/>

        <FormControl.Label>Senha</FormControl.Label>
        <Input placeholder='Digite a senha.' w='100%' mb={4}/>

        <Button onPress={()=>navigation.navigate('Principal')}>Logar</Button>
        
        <Button
          background={'#00000000'}
          onPress={()=>navigation.navigate('CadPessoa')}>
            <Text color={'#000'}>Cadastrar um Usuário!</Text>
        </Button>

        {/* <Box w='100%' flexDirection={'row'} justifyContent={'center'}>
          <TouchableOpacity>
            <Text color={'#000'}>Cadastrar um Usuário</Text>
          </TouchableOpacity>
        </Box> */}
      </FormControl>
    </VStack>
  );
}