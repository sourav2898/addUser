import { Box, Button, Typography } from "@mui/material";
import React from "react";
import colors from "../assets/color";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Formik } from "formik";
import * as Yup from "yup";

const addSchema = Yup.object().shape({
  role: Yup.string().required("Role is required"),
  email: Yup.string().required("Email is required"),
});

const AddUser = ({ handleClose }) => {
  const { crimson, white, primary, lightGray } = colors;

  const add = (values) => {
    const getUser =
      JSON.parse(localStorage.getItem("user")) !== null
        ? JSON.parse(localStorage.getItem("user"))["users"]
        : [];

    const id = getUser.length === 0 ? 1 : getUser[getUser.length - 1].id + 1;

    const users = [
      ...getUser,
      { ...values, lsi: new Date().toLocaleString(), id: id },
    ];

    localStorage.setItem("user", JSON.stringify({ users }));
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      <Box
        pt={1}
        pl={2}
        pr={2}
        pb={5}
        sx={{
          backgroundColor: crimson,
          color: white,
          width: "35%",
          textAlign: "center",
        }}
      >
        <PersonAddAltIcon sx={{ fontSize: "100px" }} />
        <Typography pt={2} fontSize="small" textAlign="left">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
          ea commodi consequat.
        </Typography>
      </Box>
      <Box p={3} sx={{ backgroundColor: white, color: primary, width: "50%" }}>
        <Typography
          mb={3}
          variant="h6"
          sx={{ fontWeight: "bold" }}
          textAlign="left"
        >
          {" "}
          User Information
        </Typography>
        <Formik
          initialValues={{
            email: "",
            role: "Admin",
          }}
          validationSchema={addSchema}
          onSubmit={add}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <label style={{ fontWeight: "600" }}> Eamil Id of User </label>
              <input
                name="email"
                id="email"
                value={values.email}
                style={{
                  outline: "none",
                  padding: 5,
                  width: "100%",
                  margin: "10px 0 0 0",
                  border: `1px solid ${lightGray}`,
                  borderRadius: 5,
                }}
                onChange={handleChange}
              />
              <p
                style={{
                  padding: 0,
                  color: "crimson",
                  margin: "0 0 20px 0",
                }}
              >
                {" "}
                {touched.email && errors.email}{" "}
              </p>

              <label style={{ fontWeight: "600" }}> Role </label>
              <select
                style={{
                  display: "block",
                  outline: "none",
                  padding: 5,
                  width: "50%",
                  margin: "10px 0",
                  border: `1px solid ${lightGray}`,
                  borderRadius: 5,
                }}
                name="role"
                id="role"
                onChange={handleChange}
              >
                <option value="Admin">Admin</option>
                <option value="Owner">Owner</option>
                <option value="Sales">Salse</option>
              </select>

              {touched.role && errors.role}

              <Box textAlign="right" width="100%" mt={3}>
                <Button
                  variant="contained"
                  sx={{
                    margin: "0 10px",
                    padding: "5px 30px",
                    backgroundColor: "#ffbf00",

                    boxShadow: "none",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#ffbf00",
                      boxShadow: "none",
                    },
                  }}
                  onClick={handleClose}
                >
                  {" "}
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    padding: "5px 30px",
                    boxShadow: "none",
                  }}
                  variant="contained"
                  color="success"
                >
                  {" "}
                  Add
                </Button>
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default AddUser;
