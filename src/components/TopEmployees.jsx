import { Box, Card, Typography } from "@mui/material";
import React from "react";

const TopEmployees = ({ info }) => {
  return (
    <>
      <Typography variant="h6" color="primary" marginBottom={1}>
        Top Employees
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {info?.map((value, index) => (
          <Card
            key={index}
            sx={{
              p: 2,
              height: 100,
              width: 250,
              minWidth: 180,
              boxShadow: 4,
            }}
          >
            <Typography gutterBottom variant="body2" color="success.main">
              {value.title}
            </Typography>
            <Typography gutterBottom variant="body2">
              Current Score:
              {value.current_score}
            </Typography>
            <Typography gutterBottom variant="body2">
              {value.email}
            </Typography>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default TopEmployees;
