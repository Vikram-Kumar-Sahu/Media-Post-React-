import React, { createContext, useReducer } from "react";

// Default post list
const Default_post_List = [
  {
    id: "1",
    title: "going to mumbai",
    body: "hi frnds i am going to mumbai",
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "pass ho gaya",
    body: "4 saal ki mastyi",
    reaction: 15,
    userId: "user-15",
    tags: ["graduation", "unbelievable"],
  },
];

// Create the context
const PostListContext = createContext();

// Reducer function to handle actions
const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...currentPostList, action.payload];
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload);
    default:
      return currentPostList;
  }
};

// Provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  // Function to add a post
  const addPost = (post) => {
    dispatchPostList({ type: "ADD_POST", payload: post });
  };

  // Function to delete a post
  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export { PostListContext, PostListProvider };