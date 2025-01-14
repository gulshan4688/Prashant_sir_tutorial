import { createContext, useEffect, useId, useReducer, useState } from "react";
const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};
export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
    // in the above line we say that all our data is stored in payload so for now assume newPostList as the action.paylaod and add it to the currPostList using the spread operator
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  // THE MEHTODS----------------->
  // now as the data is sent by us from the createpost so now we can send a whole object like "post"
  const addPost = (post) => {
    // console.log(`${userId} ${postTitle} `);
    // just like we implemented delete post we will implement addPost
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPost = (posts) => {
    // for adding post from fetch method
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postID) => {
    // console.log(`delete post clicked with post id ${postID} `);
    // bahut hua console log , ab hum karenge real action that is real defination of deletePost
    dispatchPostList({
      // contain 2 things action type and payload
      type: "DELETE_POST",
      payload: { postID },
    });
  };


  return (
    // previously we were passing a default value initiaslised at the top
    <PostList.Provider value={{ postList, addPost, deletePost}}>
      {children}
    </PostList.Provider>
  );
};
// THE DEFAULT VALUE--------------->

export default PostListProvider;
