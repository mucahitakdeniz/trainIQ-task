import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const TopEmployees = ({ info }) => {
  const [show, setShow] = useState(null);

  const handleClick = (name) => {
    setShow(name);
  };
  return (
    <>
      <div>TopEmployees</div>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {info?.map((value) => (
          <>
            <ListItem
              key={value}
              disablePadding
              onClick={() => handleClick(value.name)}
            >
              {value.name}
            </ListItem>
            {value.name === show && (
              <ListItem>
                <Typography variant="body1" color="text.secondary">
                  {value.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Current Score: {value.current_score}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  email: {value.email}
                </Typography>
                
              </ListItem>
            )}
          </>
        ))}
      </List>
    </>
  );
};

export default TopEmployees;
