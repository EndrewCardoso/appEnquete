import { useEffect, useState } from 'react';
import { VStack, Text, FormControl, Input, Button } from 'native-base';
import { saveNovaPergunta, updatePergunta } from '../servicos/pergunta';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mensagem } from '../utils/Mensagem';

export default function CadPergunta({navigation}) {

  const [tituloTela, settituloTela] = useState('');
  const [token, setToken] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [usuarioId, setUsuarioId] = useState(0);  
  const [pergunta, setPergunta] = useState<Pergunta>();

  const saveOrUpdatePergunta = async () => {
    let res: any = null;
    if (pergunta) {
      res = await updatePergunta(pergunta.id, titulo, descricao, usuarioId, token);
    } else {
      res = await saveNovaPergunta(titulo, descricao, usuarioId, token);
    }
  
    if (res) {
      if (pergunta) {
        mensagem(`A pergunta ${titulo} foi atualizada!`);
      } else {
        mensagem(`A pergunta ${titulo} foi cadastrada!`);
      }

      navigation.replace('Principal');
    } else {
      mensagem('Não foi possível realizar essa operação, tente novamente!', false)
    }
  }

  const primeiroLoad = async () => {
    console.log(pergunta)
      await AsyncStorage.getItem('ambiente').then(json => {
        let ambiente: Ambiente = JSON.parse(json);
        
        setToken(ambiente.token);
        setUsuarioId(ambiente.user.id);
      });
  
      await AsyncStorage.getItem('pergunta').then(json => {

        let perguntaAux: Pergunta = JSON.parse(json);
        if (perguntaAux) {
          setPergunta(JSON.parse(json));
          setTitulo(pergunta.titulo);
          setDescricao(pergunta.descricao);

          AsyncStorage.removeItem('pergunta');
        }
  
        if (pergunta) {
          settituloTela('Atualize a sua pergunta.');
        } 
        else {
          settituloTela('Cadastre a sua pergunta.');
        }
      });    
  }

  useEffect (() => {
    primeiroLoad();
  })

  return (
    <VStack flex={1} alignContent='center' justifyContent='center' m={8}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>{tituloTela}</Text>

        <FormControl>
            <FormControl.Label>Título</FormControl.Label>
            <Input placeholder='Digite o título da pergunta.' w='100%' mb={4} value={titulo} onChangeText={setTitulo}/>

            <FormControl.Label>Descrição</FormControl.Label>
            <Input placeholder='Digite a pergunta.' w='100%' multiline={true} mb={4} value={descricao} onChangeText={setDescricao}/>

            <Button onPress={saveOrUpdatePergunta}>Salvar</Button>
        </FormControl>
    </VStack>
  );
}