import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import postsAPI from "../api/postsAPI";

const usePost = () => {
  const { postId } = useParams();

  const { isLoading, isError, data, error, ...getPostData } = useQuery(
    ["post"],
    () => postsAPI.getPost(postId as string),
    { refetchInterval: 1000 }
  );

  return {
    isLoading,
    isError,
    data,
    error,
    getPostData,
  };
};

export default usePost;
