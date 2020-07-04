import axios from "axios";

const api = axios.create({
  baseURL: "https://backendbk2barbearia.herokuapp.com/",
});

interface UserAuthData {
  usuario: string;
  senha: string;
}

export const auth = async ({ usuario, senha }: UserAuthData) => {
  try {
    const response = await api.post("auth", { usuario, senha });
    return response;
  } catch (error) {
    throw error;
  }
};

export default api;
