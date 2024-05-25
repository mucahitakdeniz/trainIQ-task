import { useEffect, useState } from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import LoadingPage from "./Pages/LoadingPage";
import Dashboard from "./Pages/DashBoard";

function App() {
  const URL = import.meta.env.VITE_BASE_URL;
  const [dashboardData, setDashboardData] = useState({});
  const [Loading, setLoading] = useState(false);

  const getDashboard = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${URL}`);
      setDashboardData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDashboard();
  }, []);

  return (
    <Box>{Loading ? <LoadingPage /> : <Dashboard data={dashboardData} />}</Box>
  );
}

export default App;
