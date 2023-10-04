import { VStack, Text, Button, Checkbox } from 'native-base';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Pergunta({navigation}) {

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked); 
  };

    return (
      <VStack flex={1} m={4}>
        <Text>A pergunta será escrita aqui!</Text>

        <Text mt={4}>Selecione a opção desejada!</Text>

        <Checkbox m={2} isChecked={isChecked} onChange={toggleCheckbox}>
            <Text>Sim</Text>
        </Checkbox>

        <Checkbox m={2} isChecked={isChecked} onChange={toggleCheckbox}>
            <Text>Não</Text>
        </Checkbox>

        <Button 
            mt={4}
            onPress={()=>navigation.navigate('Selecao')}>Enviar Resposta</Button>
      </VStack>
  );
}