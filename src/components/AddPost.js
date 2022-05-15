import { Button, Grid, TextField } from "@mui/material";

import React from "react";
import { v4 as uuid } from "uuid";

const AddPost = ({ addNewPost }) => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 3);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if ((e.target.title.value && e.target.body.value) !== "") {
      addNewPost(small_id, e.target.title.value, e.target.body.value);
      e.target.title.value = "";
      e.target.body.value = "";
    } else alert("Please Enter Title And Description");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>Add Post</h3>
          <TextField
            sx={{
              py: 1,
            }}
            id="outlined-name"
            label="Title"
            name="title"
          />
          <TextField
            sx={{
              py: 2,
            }}
            id="outlined-name"
            label="Description"
            name="body"
          />
          <Button variant="contained" type="submit" onSubmit={handleOnSubmit}>
            Submit
          </Button>
          {/* <button onSubmit={handleOnSubmit}>Submit</button> */}
        </Grid>
      </form>
    </div>
  );
};

export default AddPost;
