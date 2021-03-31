import React, { useState, useEffect } from "react";
import NaverLogin from "./NaverLogin";
import KakaoLogin from "./KakaoLogin";
const LoginPage = ({ history }) => {
  return (
    <div>
      <div>
        <KakaoLogin />
      </div>
      <div>
        <NaverLogin />
      </div>
    </div>
  );
};

export default LoginPage;
