import { HiCheck, HiX } from 'react-icons/hi'
import './Quality.css'

const comparisons = [
  {
    category: '가격',
    us: '공장 직접 생산으로 유통 마진 제거',
    them: '유통 과정으로 인한 추가 비용',
  },
  {
    category: '납기',
    us: '자체 생산라인으로 신속한 일정 관리',
    them: '외주 의존으로 일정 지연 빈번',
  },
  {
    category: '시공 품질',
    us: '훈련된 자사 직원이 책임 시공',
    them: '일용직/외주 시공으로 품질 편차',
  },
  {
    category: 'A/S',
    us: '3년 무상 A/S + 전담팀 운영',
    them: 'A/S 기간 짧거나 연락 두절',
  },
]

export default function Quality() {
  return (
    <section className="section quality" id="quality">
      <div className="container">
        <h2 className="section-title">
          외주 없이 <span className="highlight">100% 직접 생산</span>
        </h2>
        <p className="section-subtitle">
          자체 공장에서 생산하고, 자체 직원이 책임 시공합니다.<br />
          타사와의 차이를 확인해보세요.
        </p>

        <div className="quality-visual">
          <div className="quality-card quality-us">
            <div className="quality-badge">제일금속</div>
            <ul className="quality-list">
              {comparisons.map((c, i) => (
                <li key={i}>
                  <span className="quality-check"><HiCheck /></span>
                  <div>
                    <strong>{c.category}</strong>
                    <p>{c.us}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="quality-vs">VS</div>
          <div className="quality-card quality-them">
            <div className="quality-badge them-badge">타사</div>
            <ul className="quality-list">
              {comparisons.map((c, i) => (
                <li key={i}>
                  <span className="quality-x"><HiX /></span>
                  <div>
                    <strong>{c.category}</strong>
                    <p>{c.them}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
