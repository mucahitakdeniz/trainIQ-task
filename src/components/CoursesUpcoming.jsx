import { Box, Typography } from "@mui/material";
import React from "react";
import CourseCard from "./CourseCard";

const CoursesUpcoming = ({ info }) => {
  return (
    <Box>
      <Typography 
       variant="h4" color="#1de9b6" display="flex">
        Upcoming Courses
      </Typography>
      <CourseCard info={info} />
    </Box>
  );
};

export default CoursesUpcoming;
