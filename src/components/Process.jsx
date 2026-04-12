import './Process.css'

const steps = [
  { num: '01', title: '미팅 상담', desc: '고객 요구사항 파악 및 현장 방문 상담', icon: '💬' },
  { num: '02', title: '도면 작성', desc: '현장 실측 후 맞춤 설계 도면 작성', icon: '📐' },
  { num: '03', title: '견적서 발송', desc: '합리적인 가격의 견적서 제공', icon: '📋' },
  { num: '04', title: '계약 체결', desc: '상호 합의 후 정식 계약 진행', icon: '📝' },
  { num: '05', title: '제품 제작', desc: '자체 공장에서 고품질 제품 생산', icon: '🏭' },
  { num: '06', title: '납품 및 설치', desc: '전문 시공팀의 책임 설치 완료', icon: '🔧' },
]

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">진행 프로세스</span>
        </h2>
        <p className="section-subtitle">
          상담부터 설치까지, 체계적인 6단계 프로세스로 진행됩니다.
        </p>
        <div className="process-grid">
          {steps.map((step, i) => (
            <div className="process-step fade-in" key={i}>
              <div className="process-num">{step.num}</div>
              <div className="process-icon">{step.icon}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="process-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
