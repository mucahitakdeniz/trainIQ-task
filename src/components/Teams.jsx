import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";

const Teams = ({ info }) => {

  const [showDetails, setShowDetails] = useState([]);

  const handleDetailClick = (title) => {
    if (showDetails.includes(title)) {
      setShowDetails(showDetails.filter((detail) => detail !== title));
    } else {
      setShowDetails([...showDetails, title]);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginY: 2,
          marginTop: 4,
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" color="#ba000d">
          Teams
        </Typography>
        <Button
          sx={{
            backgroundColor: "success.main",
            color: "white",
            "&:hover": {
              backgroundColor: "success.light",
              color: "#323233",
            },
          }}
        >
          Create New Team
        </Button>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        {info?.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              boxShadow: 4,
            }}
          >
            <CardContent sx={{ with: "50%" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                marginBottom={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <StarIcon sx={{ color: "#ffd54f" }} />
                Overall score: {item.overall_score}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "justify", mb: 1 }}
              >
                {item.description}
              </Typography>
            </CardContent>
            <CardContent>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <GroupIcon color="secondary" />
                  Total Number Of Employees: {item.total_employee_count}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "success.main",
                    border: 0,
                    color: "white",
                    "&:hover": {
                      backgroundColor: "success.light",
                      color: "#323233",
                    },
                  }}
                  onClick={() => handleDetailClick(item.title)}
                >
                  {showDetails.includes(item.title) ? (
                    <KeyboardDoubleArrowUpIcon />
                  ) : (
                    <KeyboardDoubleArrowDownIcon />
                  )}
                  Show Employees
                </Button>
                <Button
                  sx={{
                    backgroundColor: "success.main",
                    border: 0,
                    color: "white",
                    "&:hover": {
                      backgroundColor: "success.light",
                      color: "#323233",
                    },
                  }}
                >
                  {" "}
                  <GroupAddIcon sx={{ marginRight: 1 }} />
                  Add New Employee to a Team
                </Button>
              </CardContent>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {showDetails.includes(item.title) && (
                  <EmployeeCard employees={item?.employees} />
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Teams;
