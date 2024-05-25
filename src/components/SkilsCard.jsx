import { Card, Typography } from "@mui/material";
import React from "react";

const SkilsCard = ({ skills, i }) => {
  return (
    <Card
      key={i}
      sx={{
        width: 200,
      }}
    >
      <Typography variant="h8">{skills.skill}</Typography>
      <Typography variant="body1">Employees: {skills.employees}</Typography>
    </Card>
  );
};

export default SkilsCard;
