import { Box, Typography } from "@mui/material";
import React from "react";
import SkillsCard from "./SkillsCard";

const SkillsInDevelopment = ({ info }) => {
  return (
    <>
      <Typography variant="h4" color="#ba000d" display="flex" marginY={2}>
        Development Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "Wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <SkillsCard skills={info} />
      </Box>
    </>
  );
};

export default SkillsInDevelopment;
