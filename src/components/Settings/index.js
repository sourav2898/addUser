import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import colors from "../assets/color";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import AddUser from "../AddUser";

const Settings = () => {
  const { lightGreen, white, green, dazyGray } = colors;

  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("user"));
    if (ls !== null && ls["users"] !== null) {
      const lsUser = ls["users"];

      const getUser = [];
      for (let user = 0; user < lsUser.length; user++) {
        getUser.push({ ...lsUser[user] });
      }
      setRows(getUser);
    }

    // console.log(ls["users"]);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleDelete = (row) => {
    const ls = JSON.parse(localStorage.getItem("user"));
    const lsUser = ls["users"].filter((user) => user.id !== row.id);

    localStorage.setItem("user", JSON.stringify({ users: lsUser }));
    setRows(lsUser);
  };

  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          borderRadius: 10,
          paddingLeft: 4,
          paddingRight: 4,
          backgroundColor: lightGreen,
          boxShadow: "none",
          "&.MuiButtonBase-root:hover": {
            bgcolor: lightGreen,
          },
        }}
        onClick={handleToggle}
      >
        Add User
      </Button>
      <Box>
        <Dialog onClose={handleClose} open={open}>
          <AddUser handleClose={handleClose} />
        </Dialog>
      </Box>
      <Box pt={5}>
        <TableContainer sx={{ maxHeight: 350 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead sx={{ backgroundColor: dazyGray }}>
              <TableRow>
                <TableCell
                  sx={{ borderRight: "1px solid lightgray" }}
                  align="left"
                >
                  #
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid lightgray" }}
                  align="left"
                >
                  User
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid lightgray" }}
                  align="left"
                >
                  Last Signed in
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid lightgray" }}
                  align="left"
                >
                  Role
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.index}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      borderTop: 0,
                      borderBottom: 0,
                    },
                  }}
                >
                  <TableCell
                    sx={{ borderRight: "1px solid lightgray" }}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid lightgray" }}
                    align="left"
                  >
                    {row.email}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid lightgray" }}
                    align="left"
                  >
                    {row.lsi}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid lightgray" }}
                    align="left"
                  >
                    {row.role}
                  </TableCell>
                  <TableCell
                    width={50}
                    sx={{ borderRight: "1px solid lightgray" }}
                    align="center"
                  >
                    <IconButton
                      sx={{
                        color: white,
                        backgroundColor: green,
                        "&.MuiButtonBase-root:hover": {
                          bgcolor: green,
                        },
                      }}
                      onClick={() => handleDelete(row)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Settings;
