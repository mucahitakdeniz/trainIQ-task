import { Box, Card, Typography } from "@mui/material";
import React from "react";

const TopSkills = ({ info }) => {
  console.log("skils", info);
  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:2 }}>
      {info?.map((item, i) => (
        <Card key={i} sx={{}}>
          <Typography variant="h8">{item.skill}</Typography>
          <Typography variant="body1">Employees {item.employees}</Typography>
        </Card>
      ))}
    </Box>
  );
};

export default TopSkills;
