import React from "react";
import BottomNavigation from "./components/BottomNavigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Exercises from "./pages/Exercises";
import ExerciseDetail from './pages/ExerciseDetail';
import { Workout } from "./pages/Workout";
import { User } from "./pages/User";
import { LandingPage } from "./pages/Landing";
import SignUp from "./pages/SignUp";
// import  Login  from "./pages/Login";
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
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
                <LogoutButton />
              </div>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/user" element={<User />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>

          <BottomNavigation />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
