import { Box } from "@mui/material";
import React, { useState } from "react";
import MainComp from "../MainComponent";
import SideBar from "../SideBar";

const Home = () => {
  const [currentNav, setCurrentNav] = useState("Settings");

  const changeNav = (nav) => {
    setCurrentNav(nav);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <SideBar currentNav={currentNav} changeNav={changeNav} />
      <MainComp title={currentNav} />
    </Box>
  );
};

export default Home;
