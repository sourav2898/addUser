import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";
import pic from ".././assets/images/logo.jpg";
import colors from "../assets/color";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TopNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: colors.white,
          color: colors.primary,
          boxShadow: "none",
          borderBottom: `1px solid ${colors.lightGray}`,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <img alt="logo" src={pic} width="40" height="40" />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Typography
              pl={1}
              pr={1}
              variant="h6"
              component="div"
              sx={{
                borderLeft: `1px solid ${colors.lightGray}`,
              }}
            >
              MY APPLICATION
            </Typography>
            <ArrowDropDownIcon
              sx={{
                paddingRight: 10,
                borderRight: `1px solid ${colors.lightGray}`,
              }}
            />
          </Box>

          <Box
            pl={1}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              borderLeft: `1px solid ${colors.lightGray}`,
            }}
          >
            <Avatar alt="Sourav" />
            <Typography pl={1} pr={1} variant="h6" component="div">
              Sourav kumar
            </Typography>
            <ArrowDropDownIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavBar;
