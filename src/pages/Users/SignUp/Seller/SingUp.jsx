import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/UseAuth/useAuth";

const SignUp = () => {
  const { SellerSignUp } = useAuth();
  const [memberId, setMemberId] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberName, setMemberName] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [sellerNum, setSellerNum] = useState("");
  const [farmName, setFarmName] = useState("");
  const [farmAdress, setFarmAdress] = useState("");
  const [account, setAccount] = useState("");
  const [num, setNum] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SellerSignUp(
        memberId,
        memberPassword,
        memberEmail,
        memberName,
        openDate,
        sellerNum,
        farmName,
        farmAdress,
        account,
        num
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
            <p>사업자등록번호</p>
            <input
              type="password"
              placeholder="사업자등록번호"
              value={sellerNum}
              onChange={(e) => setSellerNum(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>통신판매업신고번호</p>
            <input
              type="password"
              placeholder="통신판매업신고번호"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>사업자명</p>
            <input
              type="text"
              placeholder="사업자명"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>농장 주소</p>
            <input
              type="text"
              placeholder="농장 주소"
              value={farmAdress}
              onChange={(e) => setFarmAdress(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>농장명</p>
            <input
              type="text"
              placeholder="농장명"
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>정산계좌</p>
            <input
              type="text"
              placeholder="정산계좌"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className={style.inputField}
            />
          </div>
          <div>
            <p>개업일자</p>
            <input
              type="date"
              className={style.inputField}
              value={openDate}
              onChange={(e) => setOpenDate(e.target.value)}
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
