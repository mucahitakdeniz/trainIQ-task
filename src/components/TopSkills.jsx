import { Box, Card, Typography } from "@mui/material";
import React from "react";

const TopSkills = ({ info }) => {
  console.log("skils", info);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      {info?.map((item, i) => (
        <Card
          key={i}
          sx={{
            width: 200,
          }}
        >
          <Typography variant="h8">{item.skill}</Typography>
          <Typography variant="body1">Employees {item.employees}</Typography>
        </Card>
      ))}
    </Box>
  );
};

export default TopSkills;
