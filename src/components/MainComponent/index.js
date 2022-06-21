import { Box, Typography } from "@mui/material";
import React from "react";
import { sideBarNavs } from "../assets/utils";
import colors from "../assets/color";

const MainComp = ({ title }) => {
  const { primary } = colors;

  const getComp = () => {
    const res = sideBarNavs.filter((comp) => comp.name === title);
    return res[0]?.render;
  };

  return (
    <Box p={3} sx={{ color: primary }}>
      <Typography variant="h4"> {title} </Typography>
      <Box pt={2} pb={2}>
        {getComp()}
      </Box>
    </Box>
  );
};

export default MainComp;
