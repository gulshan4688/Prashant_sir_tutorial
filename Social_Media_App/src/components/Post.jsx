import React, { useContext, useState } from "react";
import { AiFillDelete, AiOutlineLike } from "react-icons/ai";
import { PostList } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card wrap_class ">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions.likes}
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="like&delete">
          <a href="#" className="btn btn-primary">
            Like
            {
              <AiOutlineLike
                style={{ fontSize: "20px", padding: "0 0 5px 0" }}
              />
            }
          </a>
          <div className="deleteIcon-pos" onClick={() => deletePost(post.id)}>
            {<AiFillDelete />}
          </div>
        </div>
        <div>
          {Array.isArray(post.tags) &&
            post.tags.map((tag, index) => (
              <span className="badge text-bg-light" key={tag}>
                #{tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
