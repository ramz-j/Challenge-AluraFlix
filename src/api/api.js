import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
}

export const crear = async (url, data) => {
    const respuesta = await api.post(url, data);
}

export const actualizar = async (url, data) => {
    const respuesta = await api.put(url, data);
}

export const borrar = async (url) => {
    const respuesta = await api.delete(url);
}