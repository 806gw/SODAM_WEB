import React, { useState } from "react";
import style from "./style.module.css";
import Header from "../../../../components/Header/UserHeader/Header";
import Footer from "../../../../components/Footer/Footer";
import Aside from "../User/Aside/Aside";
import Garlico from "../../../../assets/garlic2.png";
import Garlic from "../../../../assets/garlic.png";
// import Button from '../../../../components/button/Button';

const MyPage = () => {
  const [activeSection, setActiveSection] = useState("list");
  const [checked, setChecked] = useState(false);

  const handleSelectAll = () => {
    setChecked(!checked);
  };
  const renderContent = () => {
    switch (activeSection) {
      case "list":
        return (
          <div className={style.menu}>
            <h1>주문내역</h1>
            <div className={style.userContainer}>
              <div className={style.userList}>
                <div className={style.buylist}>
                  <h2>배송 중</h2>
                  <img src={Garlic} alt="" style={{ width: "100px" }} />
                </div>
                <div>
                  <span style={{ lineHeight: "30px" }}>의성마늘 1kg</span>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "end",
                      fontSize: "1.25rem",
                    }}
                  >
                    <h3>6,500원</h3> 1개
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <input
                  type="button"
                  value={"배송조회"}
                  className={(style.BtnCompo, style.BtnTwo)}
                />
                <input
                  type="button"
                  value={"교환/반품 신청"}
                  className={(style.BtnCompo, style.BtnThree)}
                />
                <input
                  type="button"
                  value={"장바구니 담기"}
                  className={(style.BtnCompo, style.BtnThree)}
                />
              </div>
            </div>
          </div>
        );
      case "exchange":
        return (
          <div className={style.menu}>
            <h1>반품/교환 목록</h1>
          </div>
        );
      case "bookmark":
        return (
          <div className={style.menu}>
            <h1>찜 리스트</h1>
            <div>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleSelectAll}
              />{" "}
              전체선택
            </div>
            <div className={style.bookContainer}>
              <div className={style.userList}>
                <input type="checkbox" checked={checked} />
                <div className={style.buylist}>
                  <img src={Garlic} alt="" style={{ width: "100px" }} />
                </div>
                <div>
                  <span style={{ lineHeight: "30px" }}>의성마늘 1kg</span>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "end",
                      fontSize: "1.25rem",
                    }}
                  >
                    <h3>6,500원</h3> 1개
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <input
                  type="button"
                  value={"삭제"}
                  className={(style.BtnCompo, style.BtnThree)}
                />
                <input
                  type="button"
                  value={"장바구니 담기"}
                  className={(style.BtnCompo, style.BtnThree)}
                />
              </div>
            </div>
            <div className={style.bookContainer}>
              <div className={style.userList}>
                <input type="checkbox" checked={checked} />
                <div className={style.buylist}>
                  <img src={Garlico} alt="" style={{ width: "100px" }} />
                </div>
                <div>
                  <span style={{ lineHeight: "30px" }}>의성마늘 1kg</span>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "end",
                      fontSize: "1.25rem",
                    }}
                  >
                    <h3>13,000원</h3> 2개
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <input
                  type="button"
                  value={"삭제"}
                  className={(style.BtnCompo, style.BtnThree)}
                />
                <input
                  type="button"
                  value={"장바구니 담기"}
                  className={(style.BtnCompo, style.BtnThree)}
                />
              </div>
            </div>
          </div>
        );
      case "info":
        return (
          <div className={style.menu}>
            <h1>개인정보확인</h1>
          </div>
        );
      default:
        return <h1>404</h1>;
    }
  };
  return (
    <>
      <Header />
      <main className={style.myPageContainer}>
        <Aside setActiveSection={setActiveSection} />
        <div className={style.mainContent}>{renderContent()}</div>
      </main>
      <Footer />
    </>
  );
};

export default MyPage;
