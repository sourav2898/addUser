import { Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import colors from "../assets/color";
import { sideBarNavs } from "../assets/utils";

const SideBar = () => {
  const { lightGray, green, lightGreen, primary } = colors;

  return (
    <Box
      sx={{
        width: "20%",
        height: "100vh",
        borderRight: `1px solid ${lightGray}`,
        borderTop: `1px solid ${lightGray}`,
        padding: 0,
      }}
    >
      <List>
        {sideBarNavs.map((value, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                cursor: "pointer",
                marginBottom: 1,
                marginTop: 1,
                padding: 2,
                // backgroundColor: `${green}`,
                color: `${primary}`,
              }}
            >
              <ListItemText primary={value?.name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default SideBar;
