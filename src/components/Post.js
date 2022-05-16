import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const Post = ({ id, title, body, onDeletePost, onEditPost }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletePost = () => {
    onDeletePost(id);
  };

  const handleOnEdit = (e) => {
    e.preventDefault();
    if ((e.target.title.value && e.target.body.value) !== "") {
      onEditPost(id, e.target.title.value, e.target.body.value);
      e.target.title.value = "";
      e.target.body.value = "";
      setOpen(false);
    } else alert("Please Enter Title And Description");
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
            <Button size="small" onClick={handleClickOpen}>
              Edit
            </Button>

            <Button size="small" onClick={handleDeletePost}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <div>
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
          <DialogTitle>Edit Post</DialogTitle>
          <DialogContent>
            <form onSubmit={handleOnEdit}>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  sx={{
                    my: 2,
                  }}
                  defaultValue={title}
                  id="title"
                  label="Title"
                  name="title"
                />
                <TextField
                  sx={{
                    py: 2,
                  }}
                  defaultValue={body}
                  id="body"
                  label="Description"
                  name="body"
                />
                <Button variant="contained" type="submit">
                  Update
                </Button>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Post;
