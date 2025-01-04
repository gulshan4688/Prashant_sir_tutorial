import React, { useState } from "react";
import { AiFillDelete, AiOutlineLike } from "react-icons/ai";

const Post = ({ post }) => {
  return (
    <div className="card post-card ">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="like&delete" >
          <a href="#" className="btn btn-primary">
            Like{" "}
            {
              <AiOutlineLike
                style={{ fontSize: "20px", padding: "0 0 5px 0" }}
              />
            }
          </a>
          <div className="deleteIcon-pos">{<AiFillDelete />}</div>
        </div>
        <div>
          {post.tags.map((tag, index) => (
            <span className="badge text-bg-light" key={index}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
