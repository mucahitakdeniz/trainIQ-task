import { Box, Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";

import React from "react";
import EmployeeCard from "./EmployeeCard";

const Teams = ({ info }) => {
  return (
    <>
      <Typography variant="h4" color="#1de9b6" display="flex">
        Teams
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        {info?.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "95vh",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <CardContent sx={{ with: "50%" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                marginBottom={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <StarIcon sx={{ color: "#ffd54f" }} />
                Overall score: {item.overall_score}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "justify", mb: 1 }}
              >
                {item.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
              >
                <GroupIcon color="secondary" />
                Total Number Of Employees: {item.total_employee_count}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {" "}
                <EmployeeCard employees={item?.employees} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Teams;
