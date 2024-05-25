import { Box, Card, Typography } from "@mui/material";
import React from "react";
import SkilsCard from "./SkillsCard";

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
      <SkilsCard skills={info} />
    </Box>
  );
};

export default TopSkills;
