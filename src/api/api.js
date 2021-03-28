import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
})

export const appApi = {
    apiGetInfoCharcter: async (id) => {
        let response = await instance.get(`/characters/${id}`)
        return response.data
    },
    apiSaveCharcter: async (id, objCharcter) => {
        await instance.put(`/characters/${id}`, objCharcter )
    },
    apiGetCharcters: async () => {
        let response = await instance.get('/characters')
        return response.data
    },
}

