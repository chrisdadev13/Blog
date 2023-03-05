import React from "react";
import { LinkBox, LinkOverlay, Box, Heading, Text } from "@chakra-ui/react";

export interface FullPostInformation extends PostInformation {
  createdAt: string;
}

function PostCard({
  id,
  title,
  content,
  tags,
  createdAt,
}: FullPostInformation) {
  const limitParagraph = (content: string) => {
    let contentPreview = content.substring(0, 120);
    return contentPreview;
  };
  return (
    <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <Box>{createdAt}</Box>
      <Heading size="md" my="2">
        <LinkOverlay href={`post/${id}`}>{title}</LinkOverlay>
      </Heading>
      <Text mb="3">{limitParagraph(content)}...</Text>
    </LinkBox>
  );
}

export default PostCard;
