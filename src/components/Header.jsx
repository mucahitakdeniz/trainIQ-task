import { Card, CardContent, Box, Typography, Grid } from "@mui/material";
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
    <Grid container spacing={2} sx={{ marginTop: 3 }}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={"center"}
        height="8%"
        flexWrap="wrap"
        gap={2}
      >
        <Card sx={{ boxShadow: 3, minHeight: 125, width: 180 }}>
          <CardContent>
            <SchoolIcon color="success" />
            <Typography variant="body1" component="div">
              Total Completed Courses: {totalCompletedCourses}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 180, width: 180, boxShadow: 3, height: 125 }}>
          <CardContent>
            <GroupIcon color="secondary" />
            <Typography variant="body1" component="div">
              Total Employees: {totalEmployees}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200, width: 180, boxShadow: 3, minHeight: 125 }}>
          <CardContent>
            <StarIcon sx={{ color: "#ffd54f" }} />
            <Typography variant="body1" component="div">
              Average Employee Score {averageEmployeeScore}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        
        <TopSkills info={topSkills} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TopEmployees info={topEmployees} />
      </Grid>
    </Grid>
  );
};

export default Header;
