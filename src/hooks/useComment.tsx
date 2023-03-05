import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import commentsAPI from "../api/commentsAPI";

const useComment = () => {
  const { postId } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    ["comments"],
    () => commentsAPI.getPostComments(postId as string),
    { refetchInterval: 2000 }
  );

  return {
    isLoading,
    isError,
    data,
    error,
  };
};

export default useComment;
