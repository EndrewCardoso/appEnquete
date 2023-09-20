import { VStack, Text, FormControl, Input, Button } from 'native-base';
import React from 'react';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignContent='center' justifyContent='center' m={8}>
      <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Olá, faça o seu login!</Text>

      <FormControl>
        <FormControl.Label>Usuário</FormControl.Label>
        <Input placeholder='Digite o usuário.' w='100%' mb={4}/>

        <FormControl.Label>Senha</FormControl.Label>
        <Input placeholder='Digite a senha.' w='100%' mb={4}/>

        {/* <Button onPress={() => this.props.navigation.navigate("Principal")}>Logar</Button> */}
        <Button onPress={()=>navigation.navigate('Principal')}>Logar</Button>
      </FormControl>
    </VStack>
  );
}