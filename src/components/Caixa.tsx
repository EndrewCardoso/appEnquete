import { VStack, Text, Button, Box, IBoxProps } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { remove } from '../servicos/pergunta';
import { mensagem } from '../utils/Mensagem';
import AsyncStorage from '@react-native-async-storage/async-storage';
    
interface CaixaProps extends IBoxProps {
    navigation: any;
    pergunta: Pergunta;
    token: string;
}

export default function Caixa({navigation, pergunta, token} : CaixaProps) : JSX.Element {
    
    const updatePergunta = async () => {
        await AsyncStorage.setItem('pergunta', JSON.stringify(pergunta)).then(res => {
            navigation.navigate('CadPergunta');
        });
    }

    const viewResultados = async () => {
        await AsyncStorage.setItem('pergunta', JSON.stringify(pergunta)).then(res => {
            navigation.navigate('Resultados');
        });
    }

    const removePergunta = () => {
        remove(pergunta.id, token).then(res => {
            if (res) {
              mensagem(`A Pergunta ${pergunta.titulo} foi removida!`);
            } else {
              mensagem(`Não foi possível remover a pergunta ${pergunta.titulo}, tente novamente!`, false);
            }

            navigation.replace('Principal')
        });
    }
    
    return (
        <Button 
            background={'#transparent'}
            onPress={()=>mensagem(`O código da pergunta é: ${pergunta.codigo}`)}>
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
                <Text w='50%' color={'#aaa'} fontSize={'lg'}>{pergunta.titulo}</Text>

                <Button 
                    background={'transparent'}
                    onPress={viewResultados}
                    endIcon={<FontAwesome as={FontAwesome} name='bar-chart' size={20} color='#aaa'/>}></Button>
                <Button 
                    background={'transparent'}
                    onPress={updatePergunta}
                    endIcon={<AntDesign as={AntDesign} name='form' size={20} color='#aaa'/>}></Button>
                <Button 
                    background={'transparent'}
                    onPress={removePergunta}
                    endIcon={<AntDesign as={AntDesign} name='delete' size={20} color='#aaa'/>}></Button>
                </VStack>

                {pergunta.descricao}
            </Box>
        </Button>
    );
}