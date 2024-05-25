import { Box, Card, CardContent, Typography, Link } from "@mui/material";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Contact = () => {
  return (
    <Box>
      <Typography variant="h4" color="#ba000d" display="flex" marginTop={2}>
        Contact
      </Typography>
      <Card sx={{ width: "95%", boxShadow: 4, margin: "auto", p: 1 }}>
        <Typography variant="h6" display="flex" p={2}>
          Demo TrainIQ
        </Typography>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Link target="_blank" href="https://tr-tr.facebook.com/">
            <FacebookTwoToneIcon
              sx={{ color: "info.main", fontSize: "2rem" }}
            />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/?hl=tr">
            <InstagramIcon sx={{ color: "error.main", fontSize: "2rem" }} />
          </Link>
          <Link target="_blank" href="https://x.com/">
            <XIcon sx={{ color: "text.primary", fontSize: "1.8rem" }} />
          </Link>
          <Link target="_blank" href="https://www.youtube.com/?ysclid=lwmggevncx319823064">
            <YouTubeIcon sx={{ color: "error.main", fontSize: "2.3rem" }} />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/">
            <LinkedInIcon sx={{ color: "primary.main", fontSize: "2rem" }} />
          </Link>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: "success.main",
              fontSize: "1.3rem",
            }}
          >
            <EmailOutlinedIcon
              sx={{ color: "success.main", fontSize: "2rem" }}
            />
            contact@trainiq.ai
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
