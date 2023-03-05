import React, { useState } from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Input,
  Spinner,
  Badge,
  Button,
} from "@chakra-ui/react";
import usePost from "../hooks/usePost";
import { Remarkable } from "remarkable";
import useComment from "../hooks/useComment";
import { useParams } from "react-router-dom";
import commentsAPI from "../api/commentsAPI";

function PostPage() {
  const { data, isLoading, isError, error } = usePost();
  const { data: comments } = useComment();
  const { postId } = useParams();

  const [commentary, setCommentary] = useState({
    user: "",
    text: "",
    postId: postId,
  });

  const handleUserChange = (e: any) => {
    const value = e.target.value;
    setCommentary((prev) => ({
      ...prev,
      user: value,
    }));
  };

  const handleTextChange = (e: any) => {
    const value = e.target.value;
    setCommentary((prev) => ({
      ...prev,
      text: value,
    }));
  };

  const createComment = async () => {
    await commentsAPI.createComment(commentary as any);
    setCommentary((prev) => ({
      ...prev,
      text: "",
      user: "",
    }));
  };

  if (isLoading)
    return (
      <Box
        w="full"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="lg" />
      </Box>
    );

  if (isError) return <Heading>{error as any}</Heading>;

  const md = new Remarkable();

  const getMarkupSupport = (data: string) => {
    return { __html: md.render(data) };
  };

  return (
    <Box
      w="full"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      p="0"
    >
      <Box p="10" display="flex" w="50%" flexDir="column" alignItems="center">
        <Heading mb="5">{data.data.title}</Heading>
        <div
          dangerouslySetInnerHTML={getMarkupSupport(data.data.content)}
        ></div>
      </Box>
      <Box w="40%">
        {data.data.tags.map((badge: string) => (
          <Badge mx="2" colorScheme="twitter">
            {badge}
          </Badge>
        ))}
      </Box>
      <Box w="full" display="flex" flexDir="column" alignItems="center" my="5">
        {comments.data.map((comment: any) => (
          <Box w="40%" shadow="lg" p="5" borderRadius="2xl">
            <Heading fontSize="lg">{comment.user}</Heading>
            <Text>{comment.text}</Text>
          </Box>
        ))}
      </Box>
      <Box w="40%" shadow="lg" borderRadius="2xl" p="5">
        <Heading fontSize="xl">
          Leave a comment (type and press enter):{" "}
        </Heading>
        <Input
          type="text"
          placeholder="Username"
          name="user"
          onChange={handleUserChange}
        />
        <Input
          type="text"
          placeholder="Commentary"
          name="text"
          onChange={handleTextChange}
        />
        <Button colorScheme="twitter" onClick={createComment} mt="5">
          Add +
        </Button>
      </Box>
    </Box>
  );
}

export default PostPage;
