import { useEffect, useState } from "react";
import "./App.css";
import { Typography } from "@mui/material";
import axios from "axios";
import DashBoard from "./components/DashBoard";
import LoadingComp from "./components/LoadingComp";

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

  return <>{Loading ? <LoadingComp /> : <DashBoard data={dashboardData} />}</>;
}

export default App;
