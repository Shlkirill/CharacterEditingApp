import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
})

export const appApi = {
    apiGetInfoCharcter: async () => {
        let response = await instance.get('/characters/1')
        return response.data
    },
    apiSaveCharcter: async (id, objCharcter) => {
        console.log(id, objCharcter)
        let response = await instance.put(`/characters/${id}`, objCharcter )
    }
}

