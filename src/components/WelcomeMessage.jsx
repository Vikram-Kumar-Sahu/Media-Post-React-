import React from 'react';

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <div>
      <p>No posts available. Click below to fetch posts:</p>
      <button onClick={onGetPostsClick} className="btn btn-primary">
        Fetch Posts
      </button>
    </div>
  );
};

export default WelcomeMessage;