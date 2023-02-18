import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postsContext } from "../../PostsContextProvider";
import { Button, Card } from "react-bootstrap";

const Details = () => {
  const { onePost, getOnePost } = useContext(postsContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOnePost(id);
  }, []);

  return (
    <Card
      bg="dark"
      variant="dark"
      style={{ width: "18rem", color: "white" }}
      className="my-3 card w-25 m-auto"
    >
      <Card.Img variant="top" src={onePost.image} />
      <Card.Body className="mx-3">
        <Card.Title>
          <b>Author:</b> {onePost.author}
        </Card.Title>
        <hr />
        <Card.Text>
          <b>Description:</b> {onePost.desc}
        </Card.Text>
        <hr />
        <Card.Text>
          <b>ID post:</b> {onePost.id}
        </Card.Text>

        <div>
          <Button variant="primary" onClick={() => navigate(`/`)}>
            Back
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Details;
