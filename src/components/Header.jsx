import { Card, CardContent, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";

import React from "react";
import TopEmployees from "./TopEmployees";
import TopSkills from "./TopSkills";

const Header = ({
  totalCompletedCourses,
  totalEmployees,
  averageEmployeeScore,
  topEmployees,
  topSkills,
}) => {
  return (
    <Box sx={{ display: "grid", marginTop: 5 }}>
      <Box
        sx={{
          gridColumn: "2/4",
          gridRow: "1 / 3",
          height: 100,
          display: "flex",
          gap: 5,
        }}
      >
        <Card sx={{ boxShadow: 3, minHeight: 125, width: "15rem" }}>
          <CardContent>
            <SchoolIcon color="success" />
            <Typography gutterBottom variant="h7" component="div">
              Total Completed Courses: {totalCompletedCourses}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 200, width: "15rem", boxShadow: 3, minHeight: 125 }}
        >
          <CardContent>
            <GroupIcon color="secondary" />
            <Typography gutterBottom variant="h7" component="div">
              Total Employees: {totalEmployees}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 200, width: "15rem", boxShadow: 3, minHeight: 125 }}
        >
          <CardContent>
            <StarIcon sx={{ color: "#ffd54f" }} />
            <Typography gutterBottom variant="h7" component="div">
              Average Employee Score {averageEmployeeScore}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          gridColumn: "4/4",
          gridRow: "1 / 8",
          minWidth: 200,
          height: 300,
        }}
      >
        <Typography variant="h6" color="primary">
          Top Skils
        </Typography>
        <TopSkills info={topSkills}/>
      </Box>
      <Box
        sx={{
          gridColumn: "2/4",
          gridRow: "7 / 8",
          height: 145,
        }}
      >
        <Typography variant="h6" color="primary" marginBottom={1}>
          Top Employees
        </Typography>
        <TopEmployees info={topEmployees} />
      </Box>
    </Box>
  );
};

export default Header;
