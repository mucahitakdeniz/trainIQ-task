import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";

import React from "react";

const Header = ({
  totalCompletedCourses,
  totalEmployees,
  averageEmployeeScore,
}) => {
  return (
      
      <Grid
        container
        spacing={2}
        marginBottom={7}
        marginTop={3}
        gap={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid key={1} xs={10} sm={4} lg={3}>
          <Card sx={{ maxWidth: 200, boxShadow: 3, minHeight: 125 }}>
            <CardContent>
              <SchoolIcon color="success" />
              <Typography gutterBottom variant="h7" component="div">
                Total Completed Courses: {totalCompletedCourses}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid key={1} xs={10} sm={5} lg={3}>
          <Card sx={{ maxWidth: 200, boxShadow: 3, minHeight: 125 }}>
            <CardContent>
              <GroupIcon color="secondary" />
              <Typography gutterBottom variant="h7" component="div">
                Total Employees: {totalEmployees}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid key={1} xs={10} sm={4} lg={3}>
          <Card sx={{ maxWidth: 200, boxShadow: 3, minHeight: 125 }}>
            <CardContent>
              <StarIcon sx={{ color: "#ffd54f" }} />
              <Typography gutterBottom variant="h7" component="div">
                Average Employee Score {averageEmployeeScore}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
};

export default Header;
