import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import CourseCard from "./CourseCard";

const CoursesInProgress = forwardRef(({ info }, ref) => {
  return (
    <Box>
      <Typography ref={ref} variant="h4" color="#1de9b6" display="flex">
        In Progress Courses
      </Typography>
      <CourseCard info={info} />
    </Box>
  )
})

export default CoursesInProgress;
