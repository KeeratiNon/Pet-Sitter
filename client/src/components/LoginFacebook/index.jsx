import React from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";
import { FACEBOOK_CLIENT_ID } from "../../core/config.mjs";
import { setFacebookToken } from "../../utils/localStorage.mjs";

const LoginFacebook = () => {
  const navigate = useNavigate();
  
  const onFacebookLoginSuccess = (response) => {
    const token = response.data.accessToken;
    setFacebookToken(token);
    navigate("/");
  };

  const onFacebookLoginFailure = (error) => {
    console.log("Facebook login failed:", error);
  };
  return (
    <LoginSocialFacebook
      appId={FACEBOOK_CLIENT_ID}
      onResolve={onFacebookLoginSuccess}
      onReject={onFacebookLoginFailure}
    >
      <FacebookLoginButton className="!text-[16px] !px-[24px] !py-[12px] !rounded-full !font-bold">
        Facebook
      </FacebookLoginButton>
    </LoginSocialFacebook>
  );
};

export default LoginFacebook;
