interface Post {
  id: string;
  title: string;
  content: string;
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
}

interface PostValues {
  title: string;
  content: string;
  tags: string[];
}
