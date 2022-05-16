import React, { useState, useEffect } from "react";

import {
  Container,
  Grid,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const ViewPost = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts/";
  let id = window.location.toString().split("/post/")[1];

  useEffect(() => {
    fetchCurrentPost();
    fetchComments();
  }, []);

  const fetchCurrentPost = async () => [
    fetch(`${url}${id}`)
      .then((data) => data.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.log(err);
      }),
  ];
  const fetchComments = async () => [
    fetch(`${url}${id}/comments`)
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
