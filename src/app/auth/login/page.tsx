"use client";

import React from "react";
import {
  GoogleOAuthProvider,
  useGoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";

const LoginButton = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google login success:", tokenResponse);
      // 这里你可以将 token 发送至后端或储存在前端
    },
    onError: (err) => {
      console.log("Login Failed", err);
    },
  });

  return (
    <button className="btn" onClick={() => googleLogin()}>
      Sign in with Google 🚀
    </button>
  );
};

const App = () => {
  return (
    <GoogleOAuthProvider
      //clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
      clientId="235383192274-l8sfqqj4c82q5is7hfn3dt0sdjpb55bs.apps.googleusercontent.com"
    >
      <LoginButton />
    </GoogleOAuthProvider>
  );
};

export default App;
