import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { postsContext } from "../../PostsContextProvider";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const { createPost } = useContext(postsContext);
  const navigate = useNavigate();

  const INIT_STATE = {
    author: "",
    desc: "",
    image: "",
    isLike: false,
  };

  const [post, setPost] = useState(INIT_STATE);

  function handleSubmit(e) {
    e.preventDefault();

    let newPost = {
      ...post,
      [e.target.name]: e.target.value,
    };

    setPost(newPost);
  }

  function savePost() {
    createPost(post);
    setPost({
      author: "",
      desc: "",
      image: "",
      isLike: false,
    });

    navigate("/");
  }

  return (
    <Form className="w-50 mx-auto mt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Author"
          name="author"
          onChange={handleSubmit}
          value={post.author}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="text"
          placeholder="Descr"
          name="desc"
          onChange={handleSubmit}
          value={post.desc}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="text"
          placeholder="Image"
          name="image"
          onChange={handleSubmit}
          value={post.image}
        />
      </Form.Group>

      <Button variant="primary" onClick={savePost}>
        Add
      </Button>
    </Form>
  );
};

export default AddPost;
