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
    <Grid container spacing={2} sx={{marginTop:3}}>
      <Grid item xs={12} display="flex" height="8%" flexWrap="wrap" gap={2}>
        <Card sx={{ boxShadow: 3, minHeight: 125, width: "11rem" }}>
          <CardContent>
            <SchoolIcon color="success" />
            <Typography gutterBottom variant="h7" component="div">
              Total Completed Courses: {totalCompletedCourses}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 200, width: "11rem", boxShadow: 3, minHeight: 125 }}
        >
          <CardContent>
            <GroupIcon color="secondary" />
            <Typography gutterBottom variant="h7" component="div">
              Total Employees: {totalEmployees}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 200, width: "11rem", boxShadow: 3, minHeight: 125 }}
        >
          <CardContent>
            <StarIcon sx={{ color: "#ffd54f" }} />
            <Typography gutterBottom variant="h7" component="div">
              Average Employee Score {averageEmployeeScore}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={8} lg={8}>
        <TopEmployees info={topEmployees} />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Typography variant="h6" color="primary">
          Top Skils
        </Typography>
        <TopSkills info={topSkills} />
      </Grid>
    </Grid>
  );
};

export default Header;
