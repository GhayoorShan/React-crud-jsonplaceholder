import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOnSubmit = (e) => {
    console.log("Submitted");
  };
  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <form onSubmit={handleOnSubmit}>
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
              <Button
                variant="contained"
                type="submit"
                onSubmit={handleOnSubmit}
              >
                Update
              </Button>
              {/* <button onSubmit={handleOnSubmit}>Submit</button> */}
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
