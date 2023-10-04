import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import Principal from '../views/Principal';
import Selecao from '../views/Selecao';
import Login from '../views/Login';
import CadPergunta from '../views/CadPergunta';
import CadPessoa from '../views/CadPessoa';
import Pergunta from '../views/Pergunta';

const Pilha = createStackNavigator();

export default function Rotas() {
  return (
      <NavigationContainer>
        <Pilha.Navigator initialRouteName='Selecao'>
        <Pilha.Screen
            name='Selecao'
            component={Selecao}
            options={{headerShown:false}}
          />
          <Pilha.Screen
              name='Login'
              component={Login}
              options={{headerShown:false}}
            />
          <Pilha.Screen
            name='Principal'
            component={Principal}
            options={{headerShown:false}}
          />
          <Pilha.Screen
            name='CadPergunta'
            component={CadPergunta}
            options={{headerShown:false}}
          />
          <Pilha.Screen
            name='CadPessoa'
            component={CadPessoa}
            options={{headerShown:false}}
          />
          <Pilha.Screen
            name='Pergunta'
            component={Pergunta}
            options={{headerShown:false}}
          />
        </Pilha.Navigator>
      </NavigationContainer>
  );
}