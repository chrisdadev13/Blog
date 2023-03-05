import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import postsAPI from "../api/postsAPI";

const usePost = () => {
  const { postId } = useParams();

  const { isLoading, isError, data, error } = useQuery(["post"], () =>
    postsAPI.getPost(postId as string)
  );

  return {
    isLoading,
    isError,
    data,
    error,
  };
};

export default usePost;
