import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/UseAuth/useAuth";
import style from "./style.module.css";

const SignUp = () => {
  const { BuyerSignUp } = useAuth();
  const [memberId, setMemberId] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberPhoneNum, setMemberPhoneNum] = useState("");
  const [memberAddress, setMemberAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await BuyerSignUp(
        memberId,
        memberPassword,
        memberEmail,
        memberName,
        memberPhoneNum,
        memberAddress
      );
      alert("회원가입 성공하셨습니다!");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.background}>
      <div className={style.signUpContainer}>
        <h1>회원가입</h1>
        <form className={style.signUpForm} onSubmit={handleSubmit}>
          <div>
            <p>아이디</p>
            <input
              type="text"
              placeholder="아이디"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>비밀번호</p>
            <input
              type="password"
              placeholder="비밀번호"
              value={memberPassword}
              onChange={(e) => setMemberPassword(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>이메일</p>
            <input
              type="email"
              placeholder="이메일"
              value={memberEmail}
              onChange={(e) => setMemberEmail(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>이름</p>
            <input
              type="text"
              placeholder="이름"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>전화번호</p>
            <input
              type="tel"
              placeholder="전화번호 (예시: 010-1234-5678)"
              value={memberPhoneNum}
              onChange={(e) => setMemberPhoneNum(e.target.value)}
              className={style.inputField}
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              required
            />
          </div>
          <div>
            <p>배송지</p>
            <input
              type="text"
              placeholder="배송지"
              value={memberAddress}
              onChange={(e) => setMemberAddress(e.target.value)}
              className={style.inputField}
            />
          </div>
          <button type="submit" className={style.signUpBtn}>
            회원가입
          </button>
          <Link to="/login" className={style.linkSignUp}>
            이미 계정이 있으신가요? 로그인
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
