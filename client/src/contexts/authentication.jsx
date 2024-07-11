import React, { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import {  getToken, removeAllTokens, setUserToken } from "../utils/localStorage.mjs";
import { SERVER_API_URL } from "../core/config.mjs";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    user: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = getToken()
      if (token) {
        try {
          const tokenData = jwtDecode(token);
          const expiredIn = tokenData?.exp || tokenData?.expiredIn
          if (expiredIn * 1000 < Date.now()) {
            // Token expired
            removeAllTokens()
            setState({ ...state, user: null });
            navigate("/auth/login/user");
          } else {
            // Token valid
            const userDataFromToken = jwtDecode(token);
            setState({ ...state, user: userDataFromToken });
          }
        } catch (error) {
          // Invalid token format
          removeAllTokens()
          setState({ ...state, user: null });
          navigate("/auth/login/user");
        }
      } else {
        // No token found
        setState({ ...state, user: null });
      }
    };

    checkToken(); // Check token validity on mount

    const interval = setInterval(checkToken, 60000); // Check token validity every 1 min

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []); // Empty dependency array ensures this effect runs only once

  const loginUser = async (data) => {
    setState({ ...state, loading: true });
    try {
      const result = await axios.post(
        `${SERVER_API_URL}/auth/login/user`,
        data
      );
      const token = result.data.token;
      setUserToken(token)
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
    setState({ ...state, loading: true });
    try {
      const result = await axios.post(
        `${SERVER_API_URL}/auth/login/petsitter`,
        data
      );
      const token = result.data.token;
      setUserToken(token)
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
    setState({ ...state, loading: true });
    try {
      await axios.post(`${SERVER_API_URL}/auth/register/user`, data);
      setState({ ...state, loading: false });
      navigate("/auth/login/user");
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error.response
          ? error.response.data.message
          : "Registration failed",
      });
    }
  };

  const registerPetSitter = async (data) => {
    setState({ ...state, loading: true });
    try {
      await axios.post(`${SERVER_API_URL}/auth/register/petsitter`, data);
      setState({ ...state, loading: false });
      navigate("/auth/login/petsitter");
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error.response
          ? error.response.data.message
          : "Registration failed",
      });
    }
  };

  const logout = () => {
    removeAllTokens()
    setState({ ...state, user: null });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        loginUser,
        loginPetSitter,
        registerUser,
        registerPetSitter,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
