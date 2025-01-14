import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import style from "./PostList.module.css";
import WelcomeMess from "./WelcomeMess";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  // we have defined the postLoader below and now it returns data so the store the data in a variable we need useLoader HOOK 
  const handleRefresh = () => {
    console.log("hanfleRefresh");
  };
  return (
    <center className={style.PostListContainer}>
      {postList.length === 0 && <WelcomeMess handleRefresh={handleRefresh} />}
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </center>
  );
};

export const postLoader = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts; // Ensure this is returned
};

export default PostList;
