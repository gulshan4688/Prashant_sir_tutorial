import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import style from "./PostList.module.css";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMess from "./WelcomeMess";
import Loading from "./Loading";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);
  // to load the data we can also use state hook like at first keep the state false and in if cond (!true) than laod the data
  // and then set it to true becoz wapas aane pe kahi wapas se repaint na ho jaye
  const handleRefresh = () => {
    console.log("hanfleRefresh");
  };
  return (
    <center className={style.PostListContainer}>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && (
        <WelcomeMess handleRefresh={handleRefresh} />
      )}
      {!fetching &&
        postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </center>
  );
};

export default PostList;
