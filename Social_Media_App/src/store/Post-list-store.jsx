import { createContext, useReducer } from "react";
const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};
export const PostList = createContext(DEFAULT_CONTEXT);
const postListReducer = (currPostList, action) => {
  return currPostList;
};
// THE MEHTODS----------------->
const addPost = () => {};
const deletePost = () => {};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  return (
    // previously we were passing a default value initiaslised at the top
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
// THE DEFAULT VALUE--------------->
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Exploring JavaScript",
    body: "JavaScript is a versatile programming language used for web development.",
    reactions: 150,
    userID: "user123",
    tags: ["JavaScript", "Web Development", "Programming"],
  },
  {
    id: "2",
    title: "Understanding React",
    body: "React is a popular library for building user interfaces in JavaScript.",
    reactions: 200,
    userID: "user456",
    tags: ["React", "Frontend", "UI Development"],
  },
  {
    id: "3",
    title: "CSS Grid Guide",
    body: "CSS Grid simplifies the process of creating complex web layouts.",
    reactions: 120,
    userID: "user789",
    tags: ["CSS", "Web Design", "Layouts"],
  },
];

export default PostListProvider;
