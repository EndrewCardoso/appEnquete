import api from './api';

const efetuarLogin = async (email: string, senha: string) => {
    
    if (!email || !senha) return null;
    try {
        const result = await api.post('login', {email, senha}, {
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
    efetuarLogin
}