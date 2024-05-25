import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Groups2Icon from "@mui/icons-material/Groups2";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmailIcon from "@mui/icons-material/Email";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";
import Header from "../components/Header";
import CoursesInProgress from "../components/CoursesInProgress";
import CoursesUpcoming from "../components/CoursesUpcoming";
import ActivityHours from "../components/ActivityHours";
import Teams from "../components/Teams";
import SkillsInDevelopment from "../components/SkillsInDevelopment";
import Contact from "../components/Contact";

const drawerWidth = 300;

const icons = [
  <SchoolIcon sx={{ color: "primary.main" }} />,
  <QueryBuilderIcon sx={{ color: "warning.main" }} />,
  <Groups2Icon sx={{ color: "secondary.main" }} />,
  <WorkspacePremiumIcon sx={{ color: "warning.main" }} />,
  <UpcomingOutlinedIcon sx={{ color: "info.main" }} />,
  <EmailIcon sx={{ color: "success.main" }} />,
];

export default function DashBoard({ data }) {
  const coursesRef = React.useRef(null);
  const activeHourseRef = React.useRef(null);
  const teamsRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const upcommingCourseRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const RefArray = [
    coursesRef,
    activeHourseRef,
    teamsRef,
    skillsRef,
    upcommingCourseRef,
    contactRef,
  ];

  const handleClick = (i) => {
    if (RefArray[i].current) {
      RefArray[i].current.scrollIntoView({ behavior: "smooth" });
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
              "Courses",
              "Activity Hours",
              "Teams",
              "Skills",
              "Upcoming Course",
              "Contact",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemIcon>{icons[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 2, p: 1.5 }}>
        <Toolbar />
        <Typography variant="h3" color="primary" display="flex">
          Welcome To Demo TrainIQ
        </Typography>
        <Box m={2} sx={{ marginY: 5 }} ref={coursesRef} />

        <Header
          totalCompletedCourses={data?.data?.total_completed_courses}
          totalEmployees={data?.data?.total_employees}
          averageEmployeeScore={data?.data?.average_employee_score}
          topEmployees={data?.data?.top_employees}
          topSkills={data?.data?.top_skills}
        />
        <Box m={2} sx={{ marginY: 5 }} ref={upcommingCourseRef} />
        <CoursesInProgress info={data?.data?.in_progress_courses} />
        <Box m={2} sx={{ marginY: 15 }} ref={skillsRef} />

        <CoursesUpcoming info={data?.data?.upcoming_courses} />
        <Box m={2} sx={{ marginY: 15 }} ref={activeHourseRef} />
        <SkillsInDevelopment info={data?.data?.skills_in_development} />
        <Box m={2} sx={{ marginY: 15 }} ref={teamsRef} />

        <ActivityHours info={data?.data?.activity_hours} />
        <Teams info={data?.data?.teams} />
        <Contact sx={{ marginY: 15 }} />
        <Box ref={contactRef} />
      </Box>
    </Box>
  );
}
