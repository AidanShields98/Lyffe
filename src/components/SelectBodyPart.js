import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import ExerciseCard from "./ExerciseCard";
import { MenuItem, Select, Typography } from "@mui/material";

export default function SelectBodyPaty({
  data,
  bodyParts,
  setBodyPart,
  bodyPart,
}) {
  const handleChange = (event) => {
    setBodyPart(event.target.value);
  };

  return (
    <Box sx={{ width: "300px", textAlign: "center" }}>
      <FormControl id="form" fullWidth>
        <InputLabel id="input" variant="standard" htmlFor="uncontrolled-native">
          Select Bodypart
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          {data.map(({ idx, name }) => (
            <MenuItem key={idx} value={idx}>
              {name}
            </MenuItem>
          ))}
        </NativeSelect>
        {data.map((item) => (
        <Box key={item.id || item} m="0 40px">
          {item.bodyPart === bodyPart ? (
            <ExerciseCard exercise={item} />
          ) : (
            <Typography variant="body1">{item.name}</Typography>
          )}
        </Box>
      ))}
      </FormControl>
    </Box>
  );
}

// {data.map((item) => (
//   <Box
//     key={item.id || item}
//     itemId={item.id || item}
//     title={item.id || item}
//     m="0 22px"
//   >
//     {bodyParts ? (
//       <BodyCard
//         item={item}
//         setBodyPart={setBodyPart}
//         bodyPart={bodyPart}
//       />
//     ) : (}
//   </Box>
