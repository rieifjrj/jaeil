import { HiCheck, HiArrowRight } from 'react-icons/hi'
import './Pricing.css'

const plans = [
  {
    name: '일반형',
    size: '800 x 800 x 2100mm',
    price: '별도',
    unit: '문의',
    desc: '소규모 아파트 단지에 적합',
    features: [
      '표준 규격 사이즈',
      '고급 분체도장 마감',
      '잠금장치 기본 포함',
      '3년 무상 A/S',
    ],
    featured: false,
  },
  {
    name: '확장형',
    size: '1000 x 1000 x 2100mm',
    price: '별도',
    unit: '문의',
    desc: '넓은 수납 공간이 필요한 단지',
    features: [
      '확장 규격 사이즈',
      '고급 분체도장 마감',
      '잠금장치 기본 포함',
      '3년 무상 A/S',
      '맞춤 사이즈 제작 가능',
    ],
    featured: true,
  },
  {
    name: '특대형',
    size: '1200 x 1200 x 2100mm',
    price: '별도',
    unit: '문의',
    desc: '대형 단지, 최대 수납 필요 시',
    features: [
      '최대 규격 사이즈',
      '고급 분체도장 마감',
      '잠금장치 기본 포함',
      '3년 무상 A/S',
      '프리미엄 맞춤 제작',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">
          합리적인 <span className="highlight">가격</span> 안내
        </h2>
        <p className="section-subtitle">
          유통 마진을 줄여 최고의 품질을 합리적인 가격에 제공합니다.<br />
          세대 수에 따라 추가 할인이 적용됩니다.
        </p>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={i}>
              {plan.featured && <div className="pricing-recommend">추천</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p className="pricing-size">{plan.size}</p>
              </div>
              <div className="pricing-price">
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-unit">{plan.unit}</span>
              </div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <HiCheck className="pricing-check" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`pricing-btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}>
                견적 문의하기 <HiArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
