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

        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          accusantium omnis tenetur dolores numquam voluptatem inventore
          pariatur ipsa hic perspiciatis. Quaerat praesentium delectus dolore,
          iusto incidunt harum nisi veniam illum dignissimos voluptates, quod
          accusantium ea dolorem dolorum ab beatae alias nemo facilis quisquam
          cumque veritatis repellat? Omnis iste voluptas quibusdam dicta impedit
          dolores nobis eum dolorum, esse ipsa excepturi, aliquam ipsam id
          debitis veniam, ex dolor placeat laborum. Labore quibusdam natus
          cupiditate necessitatibus laboriosam fugit quas, commodi eius autem
          temporibus voluptatum quam? Explicabo magnam ratione nam? Dolorum,
          saepe quo provident quam minima quod dignissimos ipsam inventore quas
          esse laborum voluptatibus maxime fugiat delectus fugit ipsa nihil ex
          beatae, aut laboriosam aspernatur sit deserunt? Explicabo non eaque
          sed quos praesentium pariatur, nam nemo impedit quod! Amet dolorem
          illum nisi debitis a optio similique consequuntur non voluptatum quam
          laboriosam dolores tempora aliquid placeat eius eaque obcaecati
          officiis sed hic, repellat tempore doloribus voluptatibus ipsa! Fuga
          consequatur natus laboriosam excepturi rem, animi, omnis sint ut
          tempora optio doloribus at suscipit obcaecati quam molestias
          voluptatum modi incidunt mollitia sapiente commodi nobis facilis eum
          in enim. Unde odit ipsum nobis iusto minima dolores perferendis
          excepturi dolorem nulla hic optio quis veritatis cum delectus
          repellendus, ratione aliquam, sed natus ducimus repudiandae ad alias.
          Enim dolore nulla consectetur ullam itaque? Quia nam accusantium saepe
          cum, libero exercitationem ullam magnam vitae enim modi assumenda sint
          incidunt reprehenderit, beatae possimus eum quibusdam pariatur
          accusamus? Ipsa beatae non, saepe temporibus quidem consequatur vitae
          quaerat aspernatur aliquid impedit consequuntur commodi labore.
        </Typography>
        <CoursesInProgress
          ref={coursesRef}
          info={data?.data?.in_progress_courses}
        />
        <CoursesUpcoming info={data?.data?.upcoming_courses} />
      </Box>
    </Box>
  );
}
