import { NativeBaseProvider, StatusBar } from 'native-base';
import Login from './src/views/Login';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor='#27272a'/>
      <Login/>
    </NativeBaseProvider>
  );
}