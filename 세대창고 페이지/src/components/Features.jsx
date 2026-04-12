import { HiCurrencyDollar, HiShieldCheck, HiTruck, HiClock } from 'react-icons/hi'
import './Features.css'

const features = [
  {
    icon: <HiCurrencyDollar />,
    title: '유통 과정을 줄인\n저렴한 구매',
    desc: '중간 유통 마진 없이 공장에서 직접 생산하여 합리적인 가격으로 공급합니다.',
    color: '#066aab',
  },
  {
    icon: <HiShieldCheck />,
    title: '직접 생산으로\n높은 품질',
    desc: '자체 공장에서 숙련된 기술자가 직접 제작하여 품질을 보장합니다.',
    color: '#28a745',
  },
  {
    icon: <HiTruck />,
    title: '신속한\n납품 시스템',
    desc: '자체 생산 라인으로 빠른 제작과 정시 납품이 가능합니다.',
    color: '#ff6b35',
  },
  {
    icon: <HiClock />,
    title: '3년 무상\nA/S 보장',
    desc: '설치 후 3년간 무상 A/S를 제공하며 전담팀이 빠르게 대응합니다.',
    color: '#6f42c1',
  },
]

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <h2 className="section-title">
          왜 <span className="highlight">제일금속</span>인가요?
        </h2>
        <p className="section-subtitle">
          아파트 지하 주차장 세대창고, 이제 품질과 가격 모두 만족하세요.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card fade-in" key={i}>
              <div className="feature-icon" style={{ background: `${f.color}15`, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
