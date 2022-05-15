import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(id, title, body, updatePost) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOnEdit = (e) => {
    e.preventDefault();
    if ((e.target.title.value && e.target.body.value) !== "") {
      updatePost(id, e.target.title.value, e.target.body.value);
      e.target.title.value = "";
      e.target.body.value = "";
    } else {
      alert("Please Enter Title And Description");
    }
    console.log("im here");
    setOpen(false);
  };
  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
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
                defaultValue={id.title}
                id="outlined-name"
                label="Title"
                name="title"
              />
              <TextField
                sx={{
                  py: 2,
                }}
                defaultValue={id.body}
                id="outlined-name"
                label="Description"
                name="body"
              />
              <Button variant="contained" type="submit" onClick={handleOnEdit}>
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
  );
}
