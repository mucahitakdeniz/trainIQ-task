import { Box, Typography } from "@mui/material";
import React from "react";
import CourseCard from "./CourseCard";

const CoursesInProgress = ({ info }) => {
  return (
    <Box sx={{ p: 1, marginTop: 2 }}>
      <Typography variant="h4" color="#ba000d" display="flex">
        In Progress Courses
      </Typography>
      <CourseCard info={info} />
    </Box>
  );
};

export default CoursesInProgress;
