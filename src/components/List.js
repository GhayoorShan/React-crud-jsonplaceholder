import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Post from "./Post";
import AddPost from "./AddPost";

const List = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchPostData();
  }, []);

  let postId = 0;

  const fetchPostData = async () => [
    await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5`)
      .then((data) => data.json())
      .then((data) => setPostData(data))
      .catch((err) => {
        console.log(err);
      }),
  ];

  const addNewPost = async (small_id, title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        id: small_id,
        gId: small_id,
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setPostData((postData) => [...postData, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDeletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPostData(
            postData.filter((post) => {
              return post.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEditPost = async (id) => {
    console.log(id);
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((data) => setPostData(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container sx={{ py: 3 }} maxWidth="md">
        <AddPost addNewPost={addNewPost} />
        <Grid
          container
          spacing={4}
          sx={{
            py: 4,
          }}
        >
          {postData.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              onDeletePost={onDeletePost}
              onEditPost={onEditPost}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default List;