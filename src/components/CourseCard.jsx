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
        spacing={4}
        margin="2rem"
      >
        {info?.map((item, i) => (
          <Grid item>
            <Card
              sx={{
                maxWidth: 420,
                height: 300,
                boxShadow: 4,
                borderRadius: 4,
                backgroundColor:
                  item.status === "In Progress" ? "#ff9e80" : "#42a5f5",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Educator: {item.assigned_to}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Due date:{" "}
                    {`${new Date(item.due_date).getDate()}/${
                      new Date(item.due_date).getMonth() + 1
                    }/${new Date(item.due_date).getFullYear()}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {item.status == "Upcoming" && (
                <CardActions>
                  <Button size="small" color="primary">
                    Register
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CourseCard;
