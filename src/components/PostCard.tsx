import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Badge,
} from "@chakra-ui/react";

interface PostInformation {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

function PostCard({ id, title, content, tags }: PostInformation) {
  const limitParagraph = (content: string) => {
    let contentPreview = content.substring(0, 60);
    return contentPreview;
  };
  return (
    <Card key={id}>
      <CardHeader>
        <Heading fontSize="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="md" fontWeight="thin">
          {limitParagraph(content)}...
        </Text>
      </CardBody>
      <CardFooter>
        <Button color="twitter.800">Edit</Button>
        <Button color="red.600" mx="3">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PostCard;
