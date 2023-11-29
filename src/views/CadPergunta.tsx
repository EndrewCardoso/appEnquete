import { VStack, Text, FormControl, Input, Button } from 'native-base';
import { useState } from 'react';
import { saveNovaPergunta } from '../servicos/pergunta';

export default function CadPergunta({navigation}) {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const saveNewQuest = async () => {

    console.log(titulo);
    const res = await saveNovaPergunta(titulo, descricao);
  
    if (res) {
      navigation.replace('Principal')
    }
  }

  return (
    <VStack flex={1} alignContent='center' justifyContent='center' m={8}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Cadastre a sua pergunta.</Text>

        <FormControl>
            <FormControl.Label>Título</FormControl.Label>
            <Input placeholder='Digite o título da pergunta.' w='100%' mb={4} value={titulo} onChangeText={setTitulo}/>

            <FormControl.Label>Descrição</FormControl.Label>
            <Input placeholder='Digite a pergunta.' w='100%' multiline={true} mb={4} value={descricao} onChangeText={setDescricao}/>

            <Button onPress={saveNewQuest}>Salvar</Button>
        </FormControl>
    </VStack>
  );
}