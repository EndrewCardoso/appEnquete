import { VStack, Text, Button, Box, NativeBaseProvider } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';

export default function Principal({navigation}) { 
  return (
    <VStack flex={1} p={2}>
        <Text w='100%' textAlign='center' fontSize={20} fontWeight='bold' mb={8}>Bem Vindo!</Text>

        <VStack alignItems={'flex-end'}>
          <Button 
            size={20}
            onPress={()=>navigation.navigate('CadPergunta')}
            endIcon={<Icon as={Icon} name='new-message' size={25} color='#fff'/>}></Button>
      </VStack>

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
          <VStack direction={'row'} mb={2}>
          <Text w='50%' color={'#aaa'} fontSize={'lg'}>Pergunta 1</Text>

          <Button 
            background={'transparent'}
            onPress={()=>navigation.navigate('')}
            endIcon={<FontAwesome as={FontAwesome} name='bar-chart' size={20} color='#aaa'/>}></Button>
          <Button 
            background={'transparent'}
            onPress={()=>navigation.navigate('')}
            endIcon={<AntDesign as={AntDesign} name='form' size={20} color='#aaa'/>}></Button>
          <Button 
            background={'transparent'}
            onPress={()=>navigation.navigate('')}
            endIcon={<AntDesign as={AntDesign} name='delete' size={20} color='#aaa'/>}></Button>
          </VStack>

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
      </Box>

      <Box 
        bg={{
          linearGradient: {
            colors: ['#000', '#fff'],
            start: [0, 0],
            end: [1, 0]
          }
        }} p="12" rounded="xl" _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: '#bbb',
          textAlign: 'justify'
        }}>
          <VStack direction={'row'} mb={2}>
            <Text w='50%' color={'#aaa'} fontSize={'lg'}>Pergunta 2</Text>

            <Button 
              background={'transparent'}
              onPress={()=>navigation.navigate('')}
              endIcon={<FontAwesome as={FontAwesome} name='bar-chart' size={20} color='#aaa'/>}></Button>
            <Button 
              background={'transparent'}
              onPress={()=>navigation.navigate('')}
              endIcon={<AntDesign as={AntDesign} name='form' size={20} color='#aaa'/>}></Button>
            <Button 
              background={'transparent'}
              onPress={()=>navigation.navigate('')}
              endIcon={<AntDesign as={AntDesign} name='delete' size={20} color='#aaa'/>}></Button>
          </VStack>

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
      </Box>
    </VStack>
  );
}