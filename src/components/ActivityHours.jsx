import { Box, Typography } from "@mui/material";
import React  from "react";

const ActivityHours = ({ info }) => {
  return (
    <>
      <Typography variant="h4" color="#ba000d" display="flex" marginY={2}>
        Activity Hours
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={2} 
      >
        {info?.map((item, i) => (
          <Box
            key={i}
            height={120}
            width={210}
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap={1}
            p={1}
            sx={{
              backgroundColor: "#323233",
              color: "white",
              boxShadow: "0px 2px 4px 1px rgba(255, 255, 255, 0.5)",
            }}
          >
            <Typography variant="body2">
              Completed Exams: {item?.exams_completed}
            </Typography>
            <Typography variant="body2">Hours: {item?.hours}</Typography>
            <Typography variant="body2">
              lessons learned: {item?.lessons_taken}
            </Typography>
            <Typography variant="body2">
              Due date:{" "}
              {`${new Date(item.date).getDate()}/${
                new Date(item.date).getMonth() + 1
              }/${new Date(item.date).getFullYear()}`}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default ActivityHours;
