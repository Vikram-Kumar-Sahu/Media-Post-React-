import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags?.map((tag) => (
          <span key={tag} className="badge bg-primary me-1">
            {tag}
          </span>
        ))}
        <div className="alert alert-success mt-2" role="alert">
          {/* Check if reaction is an object */}
          {typeof post.reaction === 'object' ? (
            <>
              Likes: {post.reaction.likes || 0}, Dislikes: {post.reaction.dislikes || 0}
            </>
          ) : (
            <>Reactions: {post.reaction || 0}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;