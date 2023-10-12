import { VStack, Text, Button, IButtonProps } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import { ReactNode } from 'react';

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    
}

export default function Botao() {
    return (
        <VStack alignItems={'flex-end'}>
            <Button>
                <VStack direction={'row'} mr={1}>
                    <Text color='white' mr={1}>Login</Text>
                    <Icon name='login' size={25} color='#fff'/>
                </VStack>
            </Button>
        </VStack>
    );
  }