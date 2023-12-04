import { Text } from 'react-native-svg';
    
interface TextoChartProps {
    slices: any;
}

export default function TextoChart({slices} : TextoChartProps) : JSX.Element {

    return ( slices.map((slice, index) => {
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