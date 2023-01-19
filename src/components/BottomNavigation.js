import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';


export default function BottomNav() {
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  

  return (
    <Box sx={{width: '99%' ,bottom: 0, top: 'auto', position: 'absolute',   }}>
      <BottomNavigation
        value={value}
        sx={{
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={()=> navigate("/")} />
        <BottomNavigationAction label="Exercises" icon={<SportsGymnasticsIcon />} onClick={()=> navigate("/exercises")}/>
        <BottomNavigationAction label="Workout" icon={<FitnessCenterIcon />} onClick={()=> navigate("/workout")} />
        <BottomNavigationAction label="User" icon={<PersonIcon />}  onClick={()=> navigate("/user")} />
      </BottomNavigation>
    </Box>
  );
}