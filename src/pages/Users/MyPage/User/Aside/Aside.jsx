import style from "./style.module.css";

const Aside = ({ setActiveSection }) => {
  return (
    <aside className={style.asideContainer}>
      <div className={style.asideInner}>
        <h1>마이페이지</h1>
        <div className={style.menuContainer}>
          <div className={style.menuBox}>
            <a href="#list" onClick={() => setActiveSection("list")}>
              주문내역
            </a>
          </div>
          <br />
          <div className={style.menuBox}>
            <a href="#exchange" onClick={() => setActiveSection("exchange")}>
              반품/교환 신청
            </a>
          </div>
          <br />
          <div className={style.menuBox}>
            <a href="#bookmark" onClick={() => setActiveSection("bookmark")}>
              찜 리스트
            </a>
          </div>
          <br />
          {/* <div className={style.menuBox}>
            <a href='#info' onClick={() => setActiveSection('info')}>
              개인정보확인
            </a>
          </div> */}
        </div>
      </div>
    </aside>
  );
};
export default Aside;
