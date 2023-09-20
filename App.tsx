import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import Principal from './src/views/Principal';
import Login from './src/views/Login';
import CadPergunta from './src/views/CadPergunta';
import CadPessoa from './src/views/CadPessoa';

const Pilha = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor='#EAE8ED'/>

      <NavigationContainer>
        <Pilha.Navigator initialRouteName='Login'>
        <Pilha.Screen
            name='Login'
            component={Login}
          />
          <Pilha.Screen
            name='Principal'
            component={Principal}
          />
          <Pilha.Screen
            name='CadPergunta'
            component={CadPergunta}
            options={{title:'Cadastro de Perguntas'}}
          />
          <Pilha.Screen
            name='CadPessoa'
            component={CadPessoa}
            options={{title:'Cadastro de Pessoas'}}
          />
        </Pilha.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}