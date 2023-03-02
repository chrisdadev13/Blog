import React from "react";
import {
  Box,
  Heading,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login } = useLogin();
  const navigate = useNavigate();

  const formik = useFormik<LoginValues>({
    initialValues: {
      name: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnMount: false,
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      login(values);
    },
  });
  return (
    <Box
      w="full"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <Input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <Input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </FormControl>
        <Button mt="2" type="submit">
          Enter
        </Button>
      </form>
    </Box>
  );
}

export default LoginPage;
