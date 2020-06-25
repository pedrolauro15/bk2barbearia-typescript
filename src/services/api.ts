import axios from "axios";

const token = sessionStorage.getItem('@bk2barbearia_token');

const api = axios.create({
  baseURL: "https://backendbk2barbearia.herokuapp.com/",
  headers: {
    Authorization: token ?? token
  }
});

interface UserAuthData {
  usuario: string;
  senha: string;
}

export const auth = async ({ usuario, senha }: UserAuthData) => {
  try {
    const response = await api.post("auth", { usuario, senha });
    sessionStorage.setItem("@bk2barbearia_token", response.data.dados.token);
    return response;
  } catch (error) {
    throw error;
  }
};

export default api;
