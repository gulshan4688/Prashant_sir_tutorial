import React, { useContext } from "react";
import Post from "./Post";
import style from "./PostList.module.css";
import { PostList as PostListData } from "../store/Post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div className={style.PostListContainer}>
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
