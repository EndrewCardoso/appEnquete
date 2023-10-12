import { VStack, Text, Button, Checkbox, Box } from 'native-base';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Pergunta({navigation}) {

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked); 
  };

    return (
      <VStack flex={1} m={4}>
          <Box 
            bg={{
              linearGradient: {
                colors: ['lightBlue.300', 'violet.800'],
                start: [0, 0],
                end: [1, 0]
              }
            }} p="12" rounded="xl" _text={{
              fontSize: 'md',
              fontWeight: 'medium',
              color: '#bbb',
              textAlign: 'justify'
            }}>
            <Text color={'#aaa'} fontSize={'lg'}>Titulo</Text>

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
        </Box>
        
        <VStack m={4}>
          <Text color={'#aaa'} fontSize={'lg'}>Selecione a opção desejada!</Text>

          <Checkbox m={2} isChecked={isChecked} onChange={toggleCheckbox}>
              <Text color={'#bbb'} fontSize={'md'}>Sim</Text>
          </Checkbox>

          <Checkbox m={2} isChecked={isChecked} onChange={toggleCheckbox}>
              <Text color={'#bbb'} fontSize={'md'}>Não</Text>
          </Checkbox>
        </VStack>

        <Button 
            mt={4}
            onPress={()=>navigation.navigate('Selecao')}>Enviar Resposta</Button>
      </VStack>
  );
}