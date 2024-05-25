import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import CourseCard from "./CourseCard";

const CoursesInProgress = forwardRef(({ info }, ref) => {
  return (
    <Box sx={{ p: 1, marginTop: 2}}>
      <Typography ref={ref} variant="h4" color="#ba000d" display="flex">
        In Progress Courses
      </Typography>
      <CourseCard info={info} />
    </Box>
  )
})

export default CoursesInProgress;
