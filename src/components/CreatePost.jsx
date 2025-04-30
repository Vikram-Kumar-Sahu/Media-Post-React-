import React, { useState, useContext } from 'react';
import { PostListContext } from '../store/post-list-store';

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState(''); // Add state for tags

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = tags.split(' ').filter((tag) => tag.trim() !== ''); // Split tags by space and remove empty strings
    addPost({
      id: Date.now(),
      title,
      body: content,
      reaction: 0,
      userId: 'user-1',
      tags: tagsArray, // Pass the tags array
    });
    setTitle('');
    setContent('');
    setTags(''); // Reset tags
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">Body</label>
        <textarea
          className="form-control"
          id="postBody"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="postTags" className="form-label">Enter tags using space</label>
        <textarea
          className="form-control"
          id="postTags"
          rows="2"
          value={tags} // Use tags state
          onChange={(e) => setTags(e.target.value)} // Update tags state
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;