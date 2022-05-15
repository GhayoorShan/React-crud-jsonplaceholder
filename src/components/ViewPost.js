import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CardMedia from "@mui/material/CardMedia";

const ViewPost = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  let id = window.location.toString().split("/post/")[1];

  useEffect(() => {
    fetchCurrentPost();
    fetchComments();
  }, []);

  const fetchCurrentPost = async () => [
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((data) => data.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.log(err);
      }),
  ];
  const fetchComments = async () => [
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((data) => data.json())
      .then((data) => setComments(data))
      .catch((err) => {
        console.log(err);
      }),
  ];
  return (
    <>
      <Container sx={{ py: 6 }} maxWidth="md">
        <Grid>
          <CardMedia
            sx={{
              height: 500,
            }}
            component="img"
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent>
            <Typography
              sx={{
                fontSize: 36,
              }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {post.title}
            </Typography>
            <Typography sx={{ p: 3 }}>{post.body}</Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span>Comments</span>
          </CardActions>
          <CardContent>
            {comments.map((comment) => (
              <Grid container spacing={0} sx={{ py: 1 }}>
                <Grid item xs={1}>
                  <AccountCircleOutlinedIcon fontSize="large" sx={{ py: 3 }} />
                </Grid>
                <Grid item xs={11}>
                  <Typography gutterBottom variant="h6">
                    {comment.name}
                  </Typography>
                  <Typography gutterBottom>{comment.body}</Typography>
                </Grid>
              </Grid>
            ))}
          </CardContent>
        </Grid>
      </Container>
    </>
  );
};

export default ViewPost;
