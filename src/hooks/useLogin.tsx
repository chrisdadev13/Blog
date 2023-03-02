import React from "react";
import adminAPI from "../api/adminAPI";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const [admin, setAdmin] = React.useState("");
  const navigate = useNavigate();

  const login = (loginData: LoginValues) => {
    adminAPI.login(loginData).then((data) => {
      if (data.code === undefined) {
        setAdmin(data);
        console.log(data);
        navigate("/control");
      }
    });
  };

  return {
    admin,
    login,
  };
}

export default useLogin;
