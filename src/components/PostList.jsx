import { PostListContext } from '../store/post-list-store';
import Post from './Post';
import { useContext } from 'react';
import WelcomeMessage from './WelcomeMessage';

const PostList = () => {
  const { postList, addPost } = useContext(PostListContext); // Destructure addPost from context

  const handleGetPostsClick = async () => {
    try {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      data.posts.forEach((post) => {
        addPost({
          id: post.id.toString(),
          title: post.title,
          body: post.body,
          reaction: post.reactions || 0,
          userId: post.userId || 'unknown',
          tags: post.tags || [],
        });
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;