import React, { useState, useEffect } from "react";
const { naver } = window;

const NaverLogin = () => {
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "eiGJkYgWYU1uXGywL13R", // 본인 네이버 클라 아디
      callbackUrl: "http://localhost:3000/login", // 본인이 설정한 콜백 주소
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 60, width: 20 },
    });
    naverLogin.init();
  };
  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div id="naverIdLogin" />;
};
export default NaverLogin;
