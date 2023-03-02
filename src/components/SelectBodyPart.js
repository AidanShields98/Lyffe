import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import MenuItem from "@mui/material/MenuItem";
import MenuList from '@mui/material/MenuList';

export default function SelectBodyPart({ data, setBodyPart }) {
  const handleChange = (event) => {
    setBodyPart(event.target.value);
  };

  console.log(JSON.stringify(data))
  return (
    <Box sx={{ width: "300px", textAlign: "center" }}>
      <FormControl id="form" fullWidth>
        <InputLabel id="input" variant="standard" htmlFor="uncontrolled-native" >
          Filter by Bodypart
        </InputLabel>
        <MenuList
          defaultValue={30}
          inputProps={{
            name: "bodypart",
            id: "uncontrolled-native",
          }}
          onChange={handleChange}
        >
        {data.map((idx, name) => (
          <MenuItem key={idx} value={idx}>
          Item: {name} {idx}
          </MenuItem>
        ))}
        </MenuList>
      </FormControl>
    </Box>
  );
}

