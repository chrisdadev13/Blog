import axios from "axios";
import { API_URL } from "../utils/constants";

const api = axios.create({
  baseURL: `${API_URL}/api/admin`,
  withCredentials: true,
});

const login = async (loginData: LoginValues) => {
  const { data } = await api.post("/login", loginData);
  return data;
};

const adminAPI = {
  login,
};

export default adminAPI;
