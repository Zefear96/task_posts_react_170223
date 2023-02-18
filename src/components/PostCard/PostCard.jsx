import React, { useContext } from "react";
import {
  Button,
  Card,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { postsContext } from "../../PostsContextProvider";
import AddLikeOnPost from "../AddLikeOnPost/AddLikeOnPost";

const PostCard = ({ item }) => {
  const navigate = useNavigate();
  const { deletePost } = useContext(postsContext);

  return (
    <Card
      bg="dark"
      variant="dark"
      style={{ width: "18rem", color: "white" }}
      className="my-3 card"
    >
      <DropdownButton
        as={ButtonGroup}
        size="sm"
        key="down-centered"
        id={`dropdown-button-drop-down-centered`}
        drop="down-centered"
        variant="dark"
      >
        <Dropdown.Item onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate(`/details/${item.id}`)}>
          Details
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => deletePost(item.id)}>
          Delete
        </Dropdown.Item>
      </DropdownButton>
      <Card.Img variant="top" src={item.image} style={{ borderRadius: 0 }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          {item.author}
        </Card.Title>
        <Card.Text>{item.desc.slice(0, 80) + "..."}</Card.Text>

        <div>
          <AddLikeOnPost id={item.id} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
