import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost/AddPost";
import Details from "./components/Details/Details";
import EditPost from "./components/EditPost/EditPost";
import PostList from "./components/PostList/PostList";
import PostsContextProvider from "./PostsContextProvider";

const MainRoutes = () => {
  return (
    <PostsContextProvider>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </PostsContextProvider>
  );
};

export default MainRoutes;
