import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postsContext } from "../../PostsContextProvider";
import { Button, Form } from "react-bootstrap";

const EditPost = () => {
  const { onePost, getOnePost, updatePost } = useContext(postsContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOnePost(id);
  }, []);

  useEffect(() => {
    if (onePost) {
      setAuthor(onePost.author);
      setDesc(onePost.desc);
      setImage(onePost.image);
    }
  }, [onePost]);

  function saveChanges() {
    let editedPost = {
      author,
      desc,
      image,
    };

    updatePost(id, editedPost);
    navigate("/");
  }

  return onePost ? (
    <Form className="w-50 mx-auto mt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="text"
          placeholder="Descr"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="text"
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </Form.Group>

      <Button variant="primary" onClick={saveChanges}>
        Save
      </Button>
    </Form>
  ) : (
    <h2>Loading...</h2>
  );
};

export default EditPost;
