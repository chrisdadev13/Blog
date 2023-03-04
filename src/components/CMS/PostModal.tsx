import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Input,
  Textarea,
  Button,
  Box,
  Flex,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { Remarkable } from "remarkable";
import postsAPI from "../../api/postsAPI";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function PostModal({ isOpen, onClose }: ModalProps) {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    tags: [],
  });

  const toast = useToast();

  const handleTitleChange = (e: any) => {
    const value = e.target.value;

    setPostData((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleContentChange = (e: any) => {
    const value = e.target.value;
    setPostData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleMultiline = (e: any) => {
    if (e.key === "Enter") {
      setPostData((prev) => ({
        ...prev,
        content: prev.content + " \n",
      }));
    }
  };

  const handleAddTag = (e: any) => {
    const value = e.target.value;
    if (e.key === "Enter") {
      setPostData((prev) => ({
        ...(prev as any),
        tags: [...prev.tags, value],
      }));
      e.target.value = "";
    }
  };

  const deleteTag = (e: any) => {
    const value = e.target.value;

    setPostData((prev) => ({
      ...(prev as any),
      tags: [...prev.tags.filter((tag) => tag !== value)],
    }));
  };

  const savePost = async () => {
    await postsAPI.createPost(postData);
    toast({
      title: "Post created successfully.",
      description: "We've stored your post in our database for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const md = new Remarkable();

  const getMarkupSupport = (data: string) => {
    return { __html: md.render(data) };
  };

  return (
    <Modal isOpen={isOpen} size="full" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex w="full" alignItems="center" h="100vh">
          <Box w="full">
            {" "}
            <ModalHeader>
              <Heading as="h2" fontSize="lg">
                Title
              </Heading>
              <Input
                type="text"
                name="title"
                value={postData.title}
                onChange={handleTitleChange}
                variant="outline"
              />
            </ModalHeader>
            <ModalBody>
              <Heading as="h2" fontSize="lg">
                Content
              </Heading>
              <Textarea
                h="xl"
                name="content"
                value={postData.content}
                onChange={handleContentChange}
                onKeyDown={handleMultiline}
              />
              <Heading fontSize="lg" mt={5}>
                Tags
              </Heading>
              <Input
                type="text"
                placeholder="Type the tag, ex: Programming, and press enter."
                onKeyDown={handleAddTag}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="twitter" onClick={savePost} mr={5}>
                Save Post
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </Box>
          <Box w="full" whiteSpace="pre-line">
            <Heading>{postData.title}</Heading>
            <div
              dangerouslySetInnerHTML={getMarkupSupport(postData.content)}
            ></div>
            {postData.tags.map((badge) => (
              <Badge mx="2" colorScheme="twitter" onClick={deleteTag}>
                {badge}
              </Badge>
            ))}
          </Box>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export default PostModal;
