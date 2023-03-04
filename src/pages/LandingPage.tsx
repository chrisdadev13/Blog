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
import emoji from "../emoji.png";
import { useQuery } from "react-query";
import postsAPI from "../api/postsAPI";
import PostCard from "../components/PostCard";

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
        <Text>
          My name is Chris and I'm a software engineering student and a full
          stack developer. I enjoy building minimalist, creative and functional
          digital services/applications. I'm a Typescript and Deno entusiast,
          also I can easliy work in every stack of the development, no matter
          the phase, from the planning and designing all the way to solving
          real-life problems with functional and scalable code.
        </Text>
      </Box>
      <Divider my="5" />
      <Box w="full" display="flex" flexDir="column" alignItems="center">
        <UnorderedList>
          <ListItem>
            {" "}
            Software Engineering {" | "}{" "}
            <Link
              href="http://chrisdadev.vercel.app"
              color="blue.500"
              textDecor="underline"
            >
              My portafolio
            </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            Full-Stack Developer - Checkout my{" "}
            <Link
              href="https://github.com/chrisdadev13"
              color="blue.500"
              textDecor="underline"
            >
              Github
            </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            Working on my real-time groupal chat app{" | "}
            <Link
              href="http://cordia.vercel.app"
              color="blue.500"
              textDecor="underline"
            >
              Cordia
            </Link>{" "}
          </ListItem>
          <ListItem>
            {" "}
            Currently learning Go {" | "} Typescript, GraphQL and Vim enthusiast{" "}
          </ListItem>
        </UnorderedList>
      </Box>
      <Divider my="5" />
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        w="full"
      >
        {data.data.map((post: Post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            tags={post.tags}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default LandingPage;
