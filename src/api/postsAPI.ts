import axios from "axios";
import { API_URL } from "../utils/constants";

const api = axios.create({
  baseURL: `${API_URL}/api/posts`,
  withCredentials: true,
});

const createPost = async (postData: PostValues) => {
  const { data } = await api.post("/create", postData);
  return data;
};

const getPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

const postsAPI = {
  getPosts,
  createPost,
};

export default postsAPI;
