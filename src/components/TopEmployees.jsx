import { Box, Card, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const TopEmployees = ({ info }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        justifyContent: "flex-start",
      }}
    >
      {info?.map((value, index) => (
        <Card
          key={index}
          sx={{ p: 2.5, height: 140, width: 250, boxShadow: 4 }}
        >
          <Typography gutterBottom variant="body1" color="success.main">
            {value.title}
          </Typography>
          <Typography gutterBottom variant="body1">
            <StarIcon sx={{ color: "#e7b81b" }} /> Current Score:
            {value.current_score}
          </Typography>
          <Typography gutterBottom variant="body1">
            {value.email}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default TopEmployees;
