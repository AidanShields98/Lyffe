import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import Target from '../assets/icons/Target.png';
import Person from '../assets/icons/person.png';
import Equipment from '../assets/icons/equipment.png';

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
    <Stack  display={ 'flex'} alignItems="center" gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', justifyContent:'center', textAlign: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack display={ 'flex'} sx={{ gap: { lg: '12%', xs: '5%' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
