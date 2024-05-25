import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const CourseCard = ({ info }) => {
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        margin="0.4rem"
      >
        {info?.map((item, i) => (
          <Grid key={i} item>
            <Card
              sx={{
                width: 280,
                height: 200,
                boxShadow: "0px 2px 4px 1px rgba(255, 255, 255, 0.5)",
                backgroundColor: "#323233",
                color: "white",
                padding: 1,
                display: "flex",
                flexDirection: "row",
                alignItems:
                  item.status === "In Progress" ? "flex-start" : "flex-end",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.1rem",
                }}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
                <Typography variant="body2">
                  Educator: {item.assigned_to}
                </Typography>
                <Typography variant="body2">
                  Due date:{" "}
                  {`${new Date(item.due_date).getDate()}/${
                    new Date(item.due_date).getMonth() + 1
                  }/${new Date(item.due_date).getFullYear()}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CourseCard;
