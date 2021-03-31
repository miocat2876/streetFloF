import React, { useState, useEffect } from "react";
import KakaoImg from "./../../images/kakao_login_medium_narrow.png";
const { Kakao } = window;

const KakaoLogin = () => {
  const onClick = () => {
    Kakao.Auth.login({
      scope: "profile, account_email, gender",
      success: (auth) => {
        console.log(auth);
        Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
          },
        });
        setLogin(true);
      },
      fail: (err) => {
        console.error("err");
      },
    });
  };
  return (
    <div>
      <img src={KakaoImg} onClick={onClick}></img>
    </div>
  );
};

export default KakaoLogin;
