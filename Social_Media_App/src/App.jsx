import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/Post-list-store";

const App = () => {
  // we'll create a state the store the positon in the sidebar
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    // hume post list store mei ye provider initiate kiya aur yaha pe aake sabko iske andar wrap kr diya ab iske component mei jake isme as a prop children ko destructure krke {children} ko render kr denge
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;