import React from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FormDialog from "./CustomDialog";

const Post = ({ id, title, body, onDeletePost, onEditPost }) => {
  const navigate = useNavigate();
  const handleDeletePost = () => {
    onDeletePost(id);
  };

  const handleEditPost = () => {
    onEditPost(id);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: "min-height",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{
              height: 200,
            }}
            component="img"
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>{body}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => navigate(`/post/${id}`)}>
              View
            </Button>
            <FormDialog />
            {/* <Button size="small" onClick={handleEditPost}>
              Edit
            </Button> */}
            <Button size="small" onClick={handleDeletePost}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Post;
