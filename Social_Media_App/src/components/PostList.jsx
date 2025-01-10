import React, { useContext } from "react";
import Post from "./Post";
import style from "./PostList.module.css";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMess from "./WelcomeMess";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const handleRefresh = () => {
    // for adding data to the pafe via this json we need to initialise a different method
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };
  return (
    <div className={style.PostListContainer}>
      {postList.length === 0 && <WelcomeMess handleRefresh={handleRefresh} />}
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
