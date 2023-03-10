import React from "react";
import BottomNavigation from "./components/BottomNavigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Routes, Route } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import "./App.css";
import { Home } from "./pages/Home";
import Exercises from "./pages/Exercises";
import { Workout } from "./pages/Workout";
import { User } from "./pages/User";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "4vh",
              flex: 1,
            }}
          >
            Lyffe
          </Typography>

          <div>
            <IconButton aria-label="delete" sx={{ color: "#fff" }} >
              <LogoutIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <BottomNavigation />
    </div>
  );
}

export default App;
