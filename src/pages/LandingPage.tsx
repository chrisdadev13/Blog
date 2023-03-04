import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Divider,
  List,
  ListItem,
  UnorderedList,
  Link,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import emoji from "../assets/emoji.png";
import { useQuery } from "react-query";
import postsAPI from "../api/postsAPI";
import PostsSection from "../components/Client/PostSection";

function LandingPage() {
  const { isLoading, isError, data, error } = useQuery(["posts"], () =>
    postsAPI.getPosts()
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
    <Box p="14" display="flex" flexDir="column" alignItems="center">
      <Box w="50%">
        <Heading display="flex" fontSize="4xl">
          Hi there <Image src={emoji} w="10" h="10" ml="2" />{" "}
        </Heading>
        <Text bg="gray.100" borderRadius="lg" p={3}>
          My name is Chris and I'm a software engineering student and a full
          stack developer. I enjoy building minimalist, creative and functional
          digital services/applications. I'm a Typescript and Deno entusiast,
          also I can easliy work in every stack of the development, no matter
          the phase, from the planning and designing all the way to solving
          real-life problems with functional and scalable code.
        </Text>
      </Box>
      <Divider my="5" />
      <PostsSection posts={data.data} />
    </Box>
  );
}

export default LandingPage;
