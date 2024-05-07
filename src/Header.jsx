import { Link } from "react-router-dom";
import "./css/Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <Link className="uniBotton">
          <img
            src="https://www.unicef.or.kr/static/logo_active_30th@2x-bf93e28bab61b440b4527f6bde4e407e.png"
            alt=""
          />
        </Link>
        <div className="removeMenu">
          <Link to="/" className="doingMenuButton">
            하는 일
          </Link>
          <div className="doingMenuSpread">
            <ul>
              전세계 모든 어린이를 위해
              <li>활동지역</li>
              <li>스쿨스 포 아시아</li>
              <li>#OnMyMind</li>
              <ul>소식</ul>
              <ul>자료실</ul>
            </ul>
            <ul>
              차별없는 구호
              <li>생존과 발달</li>
              <li>교육</li>
              <li>보호</li>
              <li>안전하고 지속 가능한 환경</li>
              <li>공평한 기회</li>
            </ul>
            <ul>
              어린이 삶 개선
              <li>기후위기 대응</li>
              <li>이노베이션</li>
              <li>성 평등</li>
              <li>장애 어린이</li>
              <li>조사와 연구</li>
            </ul>
            <ul>
              긴급구호
              <li>코로나19와 백신</li>
              <li>인도주의 지원</li>
              <li>난민 어린이</li>
            </ul>
            <ul>
              한국 아동권리 증진
              <li>아동권리협약 이행</li>
              <li>정책 개선 활동</li>
              <li>아동친화사회 만들기</li>
              <li>권리 교육</li>
              <ul>한국 정부 협력</ul>
            </ul>
          </div>
          <Link to="/info" className="giveMenuButton">
            후원과 참여
          </Link>
          <div className="giveMenuSpread">
            <ul>
              전세계 모든 어린이를 위해
              <li>활동지역</li>
              <li>스쿨스 포 아시아</li>
              <li>#OnMyMind</li>
              <ul>소식</ul>
              <ul>자료실</ul>
            </ul>
            <ul>
              차별없는 구호
              <li>생존과 발달</li>
              <li>교육</li>
              <li>보호</li>
              <li>안전하고 지속 가능한 환경</li>
              <li>공평한 기회</li>
            </ul>
            <ul>
              어린이 삶 개선
              <li>기후위기 대응</li>
              <li>이노베이션</li>
              <li>성 평등</li>
              <li>장애 어린이</li>
              <li>조사와 연구</li>
            </ul>
            <ul>
              긴급구호
              <li>코로나19와 백신</li>
              <li>인도주의 지원</li>
              <li>난민 어린이</li>
            </ul>
            <ul>
              한국 아동권리 증진
              <li>아동권리협약 이행</li>
              <li>정책 개선 활동</li>
              <li>아동친화사회 만들기</li>
              <li>권리 교육</li>
              <ul>한국 정부 협력</ul>
            </ul>
          </div>
          <Link to="/state" className="introduceMenuButton">
            유니세프 소개
          </Link>
          <div className="introduceMenuSpread">
            <ul>
              전세계 모든 어린이를 위해
              <li>활동지역</li>
              <li>스쿨스 포 아시아</li>
              <li>#OnMyMind</li>
              <ul>소식</ul>
              <ul>자료실</ul>
            </ul>
            <ul>
              차별없는 구호
              <li>생존과 발달</li>
              <li>교육</li>
              <li>보호</li>
              <li>안전하고 지속 가능한 환경</li>
              <li>공평한 기회</li>
            </ul>
            <ul>
              어린이 삶 개선
              <li>기후위기 대응</li>
              <li>이노베이션</li>
              <li>성 평등</li>
              <li>장애 어린이</li>
              <li>조사와 연구</li>
            </ul>
            <ul>
              긴급구호
              <li>코로나19와 백신</li>
              <li>인도주의 지원</li>
              <li>난민 어린이</li>
            </ul>
            <ul>
              한국 아동권리 증진
              <li>아동권리협약 이행</li>
              <li>정책 개선 활동</li>
              <li>아동친화사회 만들기</li>
              <li>권리 교육</li>
              <ul>한국 정부 협력</ul>
            </ul>
          </div>
        </div>
        <Link>후원하기</Link>
      </div>
    </>
  );
}

export default Header;
