import React, { useState } from "react";
import axios from "axios";

export const postsContext = React.createContext();

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const API = "http://localhost:8000/posts";

  async function getPosts() {
    let res = await axios(API);
    setPosts(res.data);
  }

  async function createPost(newPost) {
    await axios.post(API, newPost);
    getPosts();
  }

  const [onePost, setOnePost] = useState(null);

  async function getOnePost(id) {
    let res = await axios(`${API}/${id}`);
    setOnePost(res.data);
  }

  async function updatePost(id, editedPost) {
    await axios.put(`${API}/${id}`, editedPost);
    getPosts();
  }

  async function deletePost(id) {
    await axios.delete(`${API}/${id}`);
    getPosts();
  }

  async function likeDislikePost(id, isLike) {
    await axios.patch(`${API}/${id}`, { isLike });
    getPosts();
  }

  let values = {
    posts,
    onePost,

    createPost,
    getPosts,
    getOnePost,
    updatePost,
    deletePost,
    likeDislikePost,
  };

  return (
    <postsContext.Provider value={values}>{children}</postsContext.Provider>
  );
};

export default PostsContextProvider;
