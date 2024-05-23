import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Groups2Icon from "@mui/icons-material/Groups2";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BadgeIcon from "@mui/icons-material/Badge";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarsIcon from "@mui/icons-material/Stars";
import Header from "./Header";
import CoursesInProgress from "./CoursesInProgress";
import CoursesUpcoming from "./CoursesUpcoming";
import ActivityHours from "./ActivityHours";

const drawerWidth = 240;

const icons = [
  <HomeIcon />,
  <SchoolIcon />,
  <QueryBuilderIcon />,
  <Groups2Icon />,
  <WorkspacePremiumIcon />,
  <BadgeIcon />,
];
const icons2 = [<UpcomingOutlinedIcon />, <EmojiEventsIcon />, <StarsIcon />];

export default function Dashboard({ data }) {
  console.log(data);

  const coursesRef = React.useRef();
  const handleScrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Demo TrainIQ
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              "Home",
              "Courses",
              "Activity Hours",
              "Teams",
              "Skills",
              "Employee",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={handleScrollToCourses}>
                  <ListItemIcon>{icons[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Upcoming Course", "Top Skills", "Top Employees"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{icons2[index]}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 2, p: 1 }}>
        <Toolbar />
        <Typography variant="h3" color="primary" display="flex">
          Welcome To Demo TrainIQ
        </Typography>

        <Header
          totalCompletedCourses={data?.data?.total_completed_courses}
          totalEmployees={data?.data?.total_employees}
          averageEmployeeScore={data?.data?.average_employee_score}
        />

        <CoursesInProgress
          ref={coursesRef}
          info={data?.data?.in_progress_courses}
        />
        <CoursesUpcoming info={data?.data?.upcoming_courses} />

        <ActivityHours info={data?.data?.activity_hours} />
      </Box>
    </Box>
  );
}
