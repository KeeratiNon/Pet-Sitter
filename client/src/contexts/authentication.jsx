import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    user: null,
  });

  const navigate = useNavigate();

  const loginUser = async (data) => {
    setState({ ...state, loading: true, error: null });
    try {
      const result = await axios.post(
        "http://localhost:4000/auth/login/user",
        data
      );
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken, loading: false });
      navigate("/");
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error.response ? error.response.data.message : "Login failed",
      });
    }
  };

  const loginPetSitter = async (data) => {
    setState({ ...state, loading: true, error: null });
    try {
      const result = await axios.post(
        "http://localhost:4000/auth/login/petsitter",
        data
      );
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken, loading: false });
      navigate("/");
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error.response ? error.response.data.message : "Login failed",
      });
    }
  };

  const registerUser = async (data) => {
    setState({ ...state, loading: true, error: null });
    try {
      await axios.post("http://localhost:4000/auth/register/user", data);
      setState({ ...state, loading: false });
      navigate("/auth/login/user");
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error.response ? error.response.data.message : "Registration failed",
      });
    }
  };

  const registerPetSitter = async (data) => {
    setState({ ...state, loading: true, error: null });
    try {
      await axios.post("http://localhost:4000/auth/register/petsitter", data);
      setState({ ...state, loading: false });
      navigate("/auth/login/petsitter");
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error.response ? error.response.data.message : "Registration failed",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, loginUser, loginPetSitter, registerUser, registerPetSitter, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
