import { Card, Typography } from "@mui/material";
import React from "react";

const SkillsCard = ({ skills }) => {
  return (
    <>
      {skills?.map((skill, i) => (
        <Card
          key={i}
          sx={{
            width: 250,
          }}
        >
          <Typography variant="h8">{skill.skill}</Typography>
          <Typography variant="body1">Employees: {skill.employees}</Typography>
        </Card>
      ))}
    </>
  );
};

export default SkillsCard;
