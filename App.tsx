import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import Rotas from './src/rotas/RotasPilha';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor='#000'/>
      <Rotas/>
    </NativeBaseProvider>
  );
}