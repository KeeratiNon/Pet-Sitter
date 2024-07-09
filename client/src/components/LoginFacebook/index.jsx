import React from "react";
import { useNavigate } from "react-router-dom";
import { setFacebookToken } from "../../utils/localStorage.mjs";
import { FacebookAuth } from "../../utils/firebase";
import {FacebookLoginButton} from "react-social-login-buttons"


const LoginFacebook = () => {
  const navigate = useNavigate();

  const onFacebookLoginSuccess = async() => {
    const user = await FacebookAuth()
    const token = user.user.accessToken;
    setFacebookToken(token);
    navigate("/");
  };

  return (
    <FacebookLoginButton onClick={onFacebookLoginSuccess} className="!text-[16px] !px-[24px] !py-[2px] !rounded-full !font-bold !w-[160px]">
      Facebook
    </FacebookLoginButton>
  );
};

export default LoginFacebook;
