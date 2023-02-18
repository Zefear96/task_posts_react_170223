import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { postsContext } from "../../PostsContextProvider";
import { useParams } from "react-router-dom";

const AddLikeOnPost = ({ item }) => {
  const { likeDislikePost } = useContext(postsContext);

  function addLike(e) {
    e.preventDefault();
    likeDislikePost(item.id, !item.isLike);
  }

  return (
    <>
      <Button onClick={addLike} className="mx-1" variant="dark">
        Like {!item.isLike ? "🤍" : "❤️"}
      </Button>
    </>
  );
};

export default AddLikeOnPost;
