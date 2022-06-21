import { Box } from "@mui/material";
import React from "react";
import MainComp from "../MainComponent";
import SideBar from "../SideBar";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <SideBar />
      <MainComp />
    </Box>
  );
};

export default Home;
