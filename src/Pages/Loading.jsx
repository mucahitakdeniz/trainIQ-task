import { Box, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h3" sx={{ backgroundColor: "white" }}>
        Loading ...
      </Typography>
    </Box>
  );
};

export default Loading;
