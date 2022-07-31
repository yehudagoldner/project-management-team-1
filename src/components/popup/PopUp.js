import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import env from "react-dotenv";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "./PopUp.css";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("");
  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [yellow, setYellow] = useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const blog = { task, description, comments, red, green, yellow };
    console.log(blog);
    fetch(env.END_POINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New task added");
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <Box className="main_container">
          <Box className="first_container">
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Task Name"
                type="email"
                fullWidth
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Description"
                type="email"
                fullWidth
                variant="outlined"
                multiline
                rows={7}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Comments"
                type="email"
                fullWidth
                variant="outlined"
                multiline
                rows={5}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </DialogContent>
            <DialogActions></DialogActions>
          </Box>

          <Box
            className="second_container"
            sx={{
              ml: "30px",
            }}
          >
            <DialogTitle color="#262626" fontSize="32px">
              Task Urgency
            </DialogTitle>
            <Box className="btn_colors">
              <Button
                className="btn_one"
                value={red}
                onClick={(e) => setRed(e.target.value)}
                sx={{
                  bgcolor: "#FF2625",
                  width: { lg: "175px", xs: "80px" },
                  fontSize: { lg: "20px", xs: "14px" },
                  height: "24px",
                  mb: "4px",
                  position: "relative",
                }}
              />
              <Button
                className="btn_two"
                value={green}
                onClick={(e) => setGreen(e.target.value)}
                sx={{
                  bgcolor: "#228B22",
                  color: "#228B22",
                  textTransform: "none",
                  width: { lg: "175px", xs: "80px" },
                  fontSize: { lg: "20px", xs: "14px" },
                  height: "24px",
                  mb: "4px",
                  position: "relative",
                }}
              />
              <Button
                className="btn_three"
                value={yellow}
                onClick={(e) => setYellow(e.target.value)}
                sx={{
                  bgcolor: "#FFBF00",
                  color: "#fff",
                  textTransform: "none",
                  width: { lg: "175px", xs: "80px" },
                  fontSize: { lg: "20px", xs: "14px" },
                  height: "24px",
                  mb: "40px",
                  position: "relative",
                }}
              />
            </Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Task Date"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
              <Button />
            </LocalizationProvider>
            <span className="active">Active</span>
            <span className="complete">Complete</span>
            <DialogActions />
            <Button
              className="btn"
              onClick={handleSubmit}
              sx={{
                bgcolor: "#FF2625",
                color: "#fff",
                textTransform: "none",
                width: { lg: "175px", xs: "80px" },
                fontSize: { lg: "20px", xs: "14px" },
                height: "56px",
                position: "absolute",
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
