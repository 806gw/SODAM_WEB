import React from "react";
import style from "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [memberPassword, setMemberPassword] = useState("");

  const handleSubmit = async (e) => {
    navigate("/sellerHome");
  };

  return (
    <div className={style.background}>
      <div className={style.loginContainer}>
        <h1>로그인</h1>
        <br />
        <br />
        <div className={style.loginForm}>
          <div>
            <p>아이디</p>
            <input
              type="text"
              placeholder="아이디"
              className={style.idInput}
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <p>비밀번호</p>
            <input
              type="password"
              placeholder="비밀번호"
              className={style.passwordInput}
              value={memberPassword}
              onChange={(e) => setMemberPassword(e.target.value)}
            />
            <br />
            <br />
          </div>
          <button className={style.loginBtn} onClick={handleSubmit}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
