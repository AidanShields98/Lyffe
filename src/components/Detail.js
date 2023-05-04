import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import Target from "../assets/icons/Target.png";
import Person from "../assets/icons/person.png";
import Equipment from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: Person,
      name: bodyPart,
    },
    {
      icon: Target,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ];

  return (
    <Stack className="detail-stack" sx={{ flexDirection: { lg: "row" }, marginTop: 10 }}>
      <img src={gifUrl} alt={name} className="detail-image" />
      <Stack display={"flex"} sx={{ gap: { lg: "12%", xs: "5%" } }}>
        <Typography
          className="detail-title"
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
        >
          {name}
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} className="detail-stack-inner" direction="row">
            <Button
              sx={{ borderRadius: "50%", width: "100px", height: "100px" }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
