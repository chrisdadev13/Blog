import axios from "axios";
import { API_URL } from "../utils/constants";

interface PostBasic {
  postId: string;
}

const api = axios.create({
  baseURL: `${API_URL}/api/posts`,
  withCredentials: true,
});

const createPost = async (postData: PostValues) => {
  const { data } = await api.post("/create", postData);
  return data;
};

const deletePost = async (postId: string) => {
  const { data } = await api.delete(`/delete/${postId}`);
  return data;
};

const getPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

const getPost = async (postId: string) => {
  const { data } = await api.get(`/get/${postId}`);
  return data;
};

const postsAPI = {
  getPosts,
  getPost,
  deletePost,
  createPost,
};

export default postsAPI;
