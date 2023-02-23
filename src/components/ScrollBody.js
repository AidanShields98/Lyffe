import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Button } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyCard from './BodyCard';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Button onClick={() => scrollPrev()} className="right-arrow">
      <KeyboardDoubleArrowLeftIcon alt="left-arrow" />
    </Button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Button onClick={() => scrollNext()} className="left-arrow">
      <KeyboardDoubleArrowRightIcon alt="right-arrow" />
    </Button>
  );
};

const ScrollBody = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Box sx={{
    display: "flex",
    justifyContent: "center",
  }}> 
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 22px"
        >
          {bodyParts ? <BodyCard item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </Box>
      ))}
    </ScrollMenu>
  </Box>
);

export default ScrollBody;