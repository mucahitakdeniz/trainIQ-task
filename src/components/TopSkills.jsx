import { Box, Typography } from "@mui/material";
import React from "react";
import SkilsCard from "./SkillsCard";

const TopSkills = ({ info }) => {
  return (
    <>
      <Typography variant="h6" color="primary">
        Top Skils
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2.2,
          marginTop:1
        }}
      >
        <SkilsCard skills={info} />
      </Box>
    </>
  );
};

export default TopSkills;
