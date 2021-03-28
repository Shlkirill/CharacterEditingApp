import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
})

export const appApi = {
    apiGetInfoCharcter: async (id) => {
        let response = await instance.get(`/characters/${id}`)
        return response.data
    }, //Получение с сервера информации по определенному персонажу

    apiSaveCharcter: async (id, objCharcter) => {
        await instance.put(`/characters/${id}`, objCharcter )
    }, //Сохранение изменений характеристик персонажа

    apiGetCharcters: async () => {
        let response = await instance.get('/characters')
        return response.data
    }, //Получение с сервера списка по всем пресонажам
}

