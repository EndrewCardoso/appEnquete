import api from './api';

const saveUser = async (nome: string, email: string, senha: string) => {
    if (!nome || !email || !senha) return null;
    try {
        const result = await api.post('usuario', {nome, email, senha}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    
        return result.data;
    } catch (error) {
        return null;
    }
}

export {
    saveUser
}