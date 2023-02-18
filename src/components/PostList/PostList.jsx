import React, { useEffect, useContext } from "react";
import PostCard from "../PostCard/PostCard";
import { postsContext } from "../../PostsContextProvider";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const { posts, getPosts } = useContext(postsContext);

  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="mx-auto mt-5 w-50 d-flex justify-content-between flex-wrap">
      {posts.map((item) => (
        <PostCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PostList;
