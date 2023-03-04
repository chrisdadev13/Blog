import React from "react";
import PostCard from "./PostCard";
import { SimpleGrid } from "@chakra-ui/react";
import { FullPostInformation } from "./PostCard";

function PostsSection(props: { posts: Array<Post> }) {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {props.posts.map((post: Post) => (
        <PostCard
          title={post.title}
          id={post.id}
          content={post.content}
          tags={post.tags}
          createdAt={post.createdAt as any}
        />
      ))}
    </SimpleGrid>
  );
}

export default PostsSection;
