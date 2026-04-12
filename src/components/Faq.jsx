import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import './Faq.css'

const faqs = [
  {
    q: '세대창고 설치 비용은 어떻게 되나요?',
    a: '세대 수, 규격, 자재 등에 따라 가격이 달라집니다. 정확한 견적은 현장 실측 후 안내드리며, 기본형 기준 30만원대부터 시작합니다. 세대 수가 많을수록 할인이 적용됩니다.',
  },
  {
    q: '시공 기간은 얼마나 걸리나요?',
    a: '자체 생산 라인을 통해 계약 후 약 2~4주 내 제작 및 설치가 완료됩니다. 대규모 단지의 경우 일정 협의를 통해 최적의 시공 계획을 수립합니다.',
  },
  {
    q: 'A/S는 어떻게 진행되나요?',
    a: '설치 완료 후 3년간 무상 A/S를 제공합니다. 전담 A/S팀이 운영되며, 접수 후 빠른 시일 내 방문 처리해드립니다.',
  },
  {
    q: '맞춤 규격 제작이 가능한가요?',
    a: '네, 가능합니다. 현장 상황과 고객 요구에 맞춰 규격, 색상, 도어 방식 등을 맞춤 제작합니다. 상담 시 원하시는 규격을 말씀해주세요.',
  },
  {
    q: '전국 시공이 가능한가요?',
    a: '네, 수도권은 물론 전국 어디서든 시공 가능합니다. 원거리 지역의 경우 운송비가 별도 발생할 수 있으며, 상담 시 안내드리겠습니다.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="section-title">
          자주 묻는 <span className="highlight">질문</span>
        </h2>
        <p className="section-subtitle">
          고객님들이 자주 문의하시는 내용을 정리했습니다.
        </p>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              className={`faq-item ${open === i ? 'active' : ''}`}
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-question">
                <span className="faq-q-badge">Q</span>
                <h3>{item.q}</h3>
                <HiChevronDown className="faq-arrow" />
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
