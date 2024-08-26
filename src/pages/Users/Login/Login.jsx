import React from "react";
import style from "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(memberId, password);
      const userRole = response?.data?.userRole;

      // 로컬 스토리지에 사용자 정보 저장
      localStorage.setItem("userInfo", JSON.stringify(response.data));

      alert("로그인 되었습니다!");

      // 사용자 역할에 따라 리디렉션
      userRole === "buyer" ? navigate("/buyer-home") : navigate("/seller-home");
    } catch (error) {
      console.error(error);
      alert("로그인에 실패하였습니다.");
    }
  };
  return (
    <div className={style.background}>
      <div className={style.loginContainer}>
        <h1>로그인</h1> <br /> <br />
        <form className={style.loginForm} onSubmit={handleSubmit}>
          <div>
            <p>아이디</p>
            <input
              type="text"
              placeholder="아이디"
              className={style.idInput}
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
            <br /> <br />
          </div>
          <div>
            <p>비밀번호</p>
            <input
              type="password"
              placeholder="비밀번호"
              className={style.passwordInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /> <br />
          </div>
          <button type="submit" className={style.loginBtn}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
