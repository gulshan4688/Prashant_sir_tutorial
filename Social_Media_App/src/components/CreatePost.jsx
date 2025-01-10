import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = () => {
  const {addPost}=useContext(PostList);
  const userIdElem = useRef();
  const postTitleElem = useRef();
  const postBodyElem = useRef();
  const reactionsElem = useRef();
  const tagsElem = useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElem.current.value;
    const postTitle=postTitleElem.current.value;
    const postBody=postBodyElem.current.value;
    const reactions=reactionsElem.current.value;
    const tags=tagsElem.current.value.split(/(\s+)/);
    userIdElem.current.value="";
    postTitleElem.current.value="";
    postBodyElem.current.value="";
    reactionsElem.current.value="";
    tagsElem.current.value="";
    addPost(userId, postTitle, postBody, reactions, tags);
  }
  return (
    <div className="createPost-container">
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your user Id
          </label>
          <input
            type="text"
            ref={userIdElem}
            className="form-control"
            id="userId"
            placeholder="Your User Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElem}
            className="form-control"
            id="title"
            placeholder="How are you feeling today..!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            rows={4}
            ref={postBodyElem}
            type="text"
            className="form-control"
            id="title"
            placeholder="The description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            ref={reactionsElem}
            className="form-control"
            id="reactions"
            placeholder="How many people have reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="tags"
            ref={tagsElem} 
            className="form-control"
            id="tags"
            placeholder="Enter Your tags with spaces"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
