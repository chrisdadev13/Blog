import axios from "axios";
import { API_URL } from "../utils/constants";

interface CommentaryValues {
  user: string;
  text: string;
  postId: string;
}

const api = axios.create({
  baseURL: `${API_URL}/api/comments`,
  withCredentials: true,
});

const getPostComments = async (postId: string) => {
  const { data } = await api.get(`/get/${postId}`);
  return data;
};

const createComment = async (commentaryData: CommentaryValues) => {
  const { data } = await api.post("/create", commentaryData);
  return data;
};

const commentsAPI = {
  getPostComments,
  createComment,
};

export default commentsAPI;
