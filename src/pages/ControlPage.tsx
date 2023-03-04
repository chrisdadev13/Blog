import React, { useRef, useState } from "react";
import {
  SimpleGrid,
  Box,
  Container,
  Divider,
  Heading,
  Spinner,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import postsAPI from "../api/postsAPI";
import PostSection from "../components/CMS/PostSection";
import PostModal from "../components/CMS/PostModal";
import { useDisclosure } from "@chakra-ui/react";

function ControlPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, isError, data, error } = useQuery(
    ["posts"],
    () => postsAPI.getPosts(),
    { refetchInterval: 2000 }
  );

  if (isLoading)
    return (
      <Box
        w="full"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="lg" />
      </Box>
    );

  if (isError) return <Heading>Error</Heading>;

  return (
    <Box
      w="full"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      whiteSpace="pre-line"
    >
      <Container w="full">
        <Heading as="h1">Content Management System</Heading>
      </Container>
      <Divider my="5" w="50%" />
      <Container>
        <Heading as="h2" fontSize="xl">
          Posts:
        </Heading>
        <PostSection posts={data.data} />
      </Container>
      <Button mt="5" colorScheme="twitter" onClick={onOpen}>
        Create a new post +{" "}
      </Button>
      <PostModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default ControlPage;
