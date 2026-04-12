import { HiPhone, HiMail } from 'react-icons/hi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">F</span>
              <span className="footer-logo-text">제일금속</span>
            </div>
            <p className="footer-tagline">
              세대창고 전문 제조기업<br />
              품질과 가격, 모두 만족시키는 파트너
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>회사</h4>
              <a href="#">인사말</a>
              <a href="#">연혁</a>
              <a href="#">오시는 길</a>
            </div>
            <div className="footer-col">
              <h4>제품</h4>
              <a href="#">일반형</a>
              <a href="#">확장형</a>
              <a href="#">특대형</a>
              <a href="#">투도어형</a>
            </div>
            <div className="footer-col">
              <h4>고객지원</h4>
              <a href="#">공지사항</a>
              <a href="#">FAQ</a>
              <a href="#">문의하기</a>
            </div>
          </div>
          <div className="footer-contact">
            <h4>연락처</h4>
            <a href="tel:01041134564" className="footer-contact-item">
              <HiPhone /> 010-4113-4564
            </a>
            <div className="footer-contact-item">
              <HiMail /> itable@naver.com
            </div>
            <p className="footer-address">화성시 팔탄면 덕우공단2길 46-14 제일금속</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 제일금속. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
