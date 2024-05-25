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
                width: 300,
                minHeight: 200,
                boxShadow: 4,
                backgroundColor:
                  item.status === "In Progress" ? "#ff9e80" : "#42a5f5",
                padding: 1,
                display: "flex",
                flexDirection: "row",
                alignItems:
                  item.status === "In Progress" ? "flex-start" : "flex-end",
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "0.3rem",
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Educator: {item.assigned_to}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Due date:{" "}
                    {`${new Date(item.due_date).getDate()}/${
                      new Date(item.due_date).getMonth() + 1
                    }/${new Date(item.due_date).getFullYear()}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CourseCard;
