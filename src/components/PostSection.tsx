import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PostCard from "./PostCard";

function PostSection(props: { posts: Array<Post> }) {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {props.posts.map((post: Post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          tags={post.tags}
        />
      ))}
    </SimpleGrid>
  );
}

export default PostSection;
