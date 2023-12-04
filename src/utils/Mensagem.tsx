import { Toast } from 'native-base'

const mensagem = (descricao: string, sucesso: boolean = true) => {
    Toast.show({
        title: sucesso ? 'Sucesso' : 'Erro',
        description: descricao ?? '',
        backgroundColor: sucesso ? 'green.500' : 'red.500'
    })
}

export {
    mensagem
}