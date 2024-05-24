import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const EmployeeCard = ({ employees }) => {
  return (
    <>
      {employees.map((employee, index) => (
        <Card key={index} sx={{ width: 400, height: 400, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h8" color="#ba000d">
              {employee?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Current score: {employee?.current_score}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Name: {employee?.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lessons Taken: {employee?.lessons_taken}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Email: {employee?.email}
            </Typography>
            <CardContent>
              <Typography variant="h9" color="#1de950">
                Skills in Development
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {employee?.skills_being_developed?.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      border: 2,
                      borderRadius: "5%",
                      backgroundColor: "#26a69a",
                      color: "white",
                      p:"5px"
                    }}
                  >
                    {item}
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
