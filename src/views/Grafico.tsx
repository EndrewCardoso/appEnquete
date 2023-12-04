import { Stack, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
// import { StyleSheet } from 'react-native';
// import Pie from 'react-native-pie';
import { Text } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';
import { getResultadoByPergunta } from '../servicos/pergunta';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Grafico() {
    
    // const [data, setData] = useState<number[]>();

    // function getResults (): any {
    //     console.log('chegou aqui!');
    //     AsyncStorage.getItem('pergunta').then(json => {
    //         let pergunta: Pergunta = JSON.parse(json);
    //         if (pergunta) {
    //             console.log('chegou aqui! pergunta -----------------------------------------------');
    //             AsyncStorage.getItem('ambiente').then(jsonAmbiente => {

    //                 let ambiente: Ambiente = JSON.parse(jsonAmbiente);
    //                 if (ambiente) {
    //                     getResultadoByPergunta(pergunta.id, ambiente.token).then(res => {
    //                         if (res) {
    //                             let lstRespostas:string[] = res.data.result;  
        
    //                             let countS: number = 0;
    //                             let countN: number = 0;
    //                             if (lstRespostas) {
    //                                 for (let resposta of lstRespostas) {
    //                                     if (resposta.toUpperCase() == 'SIM') {
    //                                         countS++;
    //                                     } else {
    //                                         countN++;
    //                                     }
    //                                 }
    //                             }
        
    //                             console.log([countS, countN]);
    //                             setData([countS, countN]);
    //                         } else {
    //                             setData([0, 0]);
    //                         }
    //                     });
    //                 }
    //             });

    //             AsyncStorage.removeItem('pergunta');
    //         }
    //     }); 
    // }

    // const data = [
    //     {
    //         value: 15,
    //         color: '#000000'
    //     },
    //     {
    //         value: 20,
    //         color: '#ff0000'
    //     }];

    let data = [15, 100];

    const pieData = data?.map((value, index) => ({
        value,
        key: `${index}-${value}`,
        svg: {
            fill: '#ff0000'
        }
    }));

    const texto = ({slices}) => {
        return (slices.map((slice, index) => {
            const { pieCentroId, data } = slice;
            return (
                    <Text
                        key={`label-${index}`}
                        x={pieCentroId[0]}
                        y={pieCentroId[1]}
                        fill='black'
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={20}
                    >
                        {data.value}
                    </Text>
                );
            }));
    }

    useEffect(() => {
        // while (!data) {
        //     getResults();
        // }
    })

    return (
        <VStack flex={1} p={2} justifyContent={'center'}>
            { data ?  <PieChart style={{height: 400}} data={pieData}/> : <></>}
        </VStack>
    );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ff0000'
//     }
}