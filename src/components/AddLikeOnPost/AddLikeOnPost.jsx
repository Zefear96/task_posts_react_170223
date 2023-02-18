import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { postsContext } from "../../PostsContextProvider";
import { useParams } from "react-router-dom";

const AddLikeOnPost = ({ id }) => {
  const { onePost, getOnePost, updatePost, posts } = useContext(postsContext);
  // const { id } = useParams();

  const [like, setLike] = useState(false);
  // console.log(onePost);

  useEffect(() => {
    getOnePost(id);
  }, []);

  useEffect(() => {
    if (onePost) {
      setLike(onePost.isLike);
    }
  }, [onePost]);

  function addLike() {
    let editedPost = {
      ...onePost,
      isLike: true,
    };

    // console.log(editedPost);

    updatePost(id, editedPost);
  }

  return (
    <>
      <Button onClick={addLike} className="mx-1" variant="dark">
        Like{!posts.isLike ? "🤍" : "❤️"}
      </Button>
    </>
  );
};

export default AddLikeOnPost;
