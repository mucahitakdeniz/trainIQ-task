import { Box, Typography } from "@mui/material";
import React from "react";

const ActivityHours = ({ info }) => {
  return (
    <>
      <Typography variant="h4" color="#1de9b6" display="flex">
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
            height={180}
            width={220}
            my={4}
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap={2}
            p={1}
            sx={{
              border: "6px solid #ab47bc",
              borderRadius: 5,
              background: "#f06292",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Completed Exams: {item?.exams_completed}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Hours: {item?.hours}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              lessons learned: {item?.lessons_taken}
            </Typography>
            <Typography variant="body1" color="text.secondary">
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
};

export default ActivityHours;
