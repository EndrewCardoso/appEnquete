import api from './api';

const getPerguntaByUser = async (usuarioId: number, token: string) => {
    return await api.post('perguntasUser', { usuarioId }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
}

const getPergunta = async (codigo: number) => {
    return await api.get(`perguntas/${codigo}`);
}

const getResultadoByPergunta = async (perguntaId: number, token: string) => {
    try {
        const result = await api.post('resultadosByPergunta', {perguntaId}, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const saveNovaPergunta = async (titulo: string, descricao: string, usuarioId: number, token: string) => {
    if (!titulo || !descricao) return null;
    try {
        const result = await api.post('pergunta', {titulo, descricao, usuarioId}, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const saveResultado = async (perguntaId: number, resposta: string) => {
    if (!resposta) return null;
    try {
        const result = await api.post('resultado', {perguntaId, resposta}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const updatePergunta = async (perguntaId: number, titulo: string, descricao: string, usuarioId: number, token: string) => {
    if (!perguntaId) return null;
    try {
        const result = await api.post('perguntaUpdate', {perguntaId, titulo, descricao, usuarioId}, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const remove = async (id: number, token: string) => {
    if (!id) return null;
    try {
        const result = await api.post('perguntaRemove', {id}, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export {
    getPerguntaByUser,
    getPergunta,
    getResultadoByPergunta,
    saveNovaPergunta,
    saveResultado,
    updatePergunta,
    remove
}