import { NativeBaseProvider, StatusBar } from 'native-base';
import Login from './src/views/login';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor='#27272a'/>
      <Login/>
    </NativeBaseProvider>
  );
}