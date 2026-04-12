import { HiArrowRight } from 'react-icons/hi'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content container">
        <div className="hero-badge">세대창고 전문 제조기업</div>
        <h1 className="hero-title">
          세대창고!<br />
          <span className="hero-highlight">품질 좋은 제품</span>, 합리적인 가격으로<br />
          생산하는 기업을 찾고 계신가요?
        </h1>
        <p className="hero-desc">
          제일금속은 유통 과정을 줄이고 직접 생산하여<br />
          최고의 품질과 합리적인 가격을 동시에 제공합니다.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary hero-btn">
            무료 상담 신청 <HiArrowRight />
          </a>
          <a href="#products" className="btn-outline hero-btn-outline">
            제품 둘러보기
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>500+</strong>
            <span>시공 완료</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>3년</strong>
            <span>무상 A/S</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>100%</strong>
            <span>직접 생산</span>
          </div>
        </div>
      </div>
    </section>
  )
}
