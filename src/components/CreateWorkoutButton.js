import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "relative",
  },
  button: {
    position: "absolute",
    top: "100px",
  },
}));

function CreateWorkoutButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState(3);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectChange = (event) => {
    setSelectedDays(event.target.value);
  };

  const handleOkClick = () => {
    handleClose();
    document.getElementById("create-workout-btn").style.display = "none";
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleOpen}
        id="create-workout-btn"
      >
        Create Workout
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select how many days you want to work out</DialogTitle>
        <DialogContent>
          <Select value={selectedDays} onChange={handleSelectChange}>
            <MenuItem value={3}>3 : Fullbody</MenuItem>
            <MenuItem value={4}>4 : Upper Lower</MenuItem>
            <MenuItem value={5}>5 : Upper Lower Push Pull Legs</MenuItem>
            <MenuItem value={6}>6 : Push Pull Legs X2</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOkClick} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateWorkoutButton;
