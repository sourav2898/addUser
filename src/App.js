import { Box } from "@mui/material";
import "./App.css";
import Home from "./components/Home";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
    <Box
      sx={{
        paddingLeft: 1,
        paddingRight: 1,
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <TopNavBar />
      <Home />
    </Box>
  );
}

export default App;
