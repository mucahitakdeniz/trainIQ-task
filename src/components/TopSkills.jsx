import { Box, Card, Typography } from "@mui/material";
import React from "react";
import SkilsCard from "./SkilsCard";

const TopSkills = ({ info }) => {
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
      {info?.map((skills, i) => (
        <SkilsCard skills={skills} i={i} />
      ))}
    </Box>
  );
};

export default TopSkills;
