import api from './api';

const getPergunta = async (codigo: number) => {
    return await api.get(`perguntas/${codigo}`);
}

const saveNovaPergunta = async (titulo: string, descricao: string) => {
    if (!titulo || !descricao) return null;
    try {
        const result = await api.post('pergunta', {titulo, descricao}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    
        console.log(result.data);
        return result.data;
    } catch(error) {
        console.log(error);
        return null;
    }
}

const saveResultado = async (perguntaId: number, resposta: string) => {
    if (!perguntaId) return null;
    try {
        const result = await api.post('resultado', {perguntaId, resposta}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    
        console.log(result.data);
        return result.data;
    } catch(error) {
        console.log(error);
        return null;
    }
}

export {
    getPergunta,
    saveNovaPergunta,
    saveResultado
}