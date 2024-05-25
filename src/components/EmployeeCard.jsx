import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const EmployeeCard = ({ employees }) => {
  return (
    <> 
      {employees.map((employee, index) => (
        <Card
          key={index}
          sx={{
            width: 310,
            height: 240,
            p:"0.2rem",
            backgroundColor: "#323233",
            color: "white",
            boxShadow: "0px 2px 4px 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <Typography variant="h7" color="#ba000d">
            {employee?.title}
          </Typography>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="body2">
              Current score: {employee?.current_score}
            </Typography>
            <Typography variant="body2">Name: {employee?.name}</Typography>
            <Typography variant="body2">
              Lessons Taken: {employee?.lessons_taken}
            </Typography>
            <Typography variant="body2">Email: {employee?.email}</Typography>
            <CardContent>
              <Typography variant="h8" color="success.main">
                Skills in Development
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap:"wrap"
                }}
              >
                {employee?.skills_being_developed?.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      backgroundColor: "success.main",
                      color: "white",
                      p: "0.3rem",
                      margin: "0.2rem",
                      minWidth:100
                    }}
                  >
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default EmployeeCard;
