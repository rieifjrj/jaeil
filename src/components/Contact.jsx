import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import './Contact.css'

const contactInfo = [
  { icon: <HiPhone />, label: '전화', value: '010-4113-4564' },
  { icon: <HiMail />, label: '이메일', value: 'itable@naver.com' },
  { icon: <HiLocationMarker />, label: '주소', value: '화성시 팔탄면 덕우공단2길 46-14 제일금속' },
  { icon: <HiClock />, label: '운영시간', value: '평일 09:00 - 18:00' },
]

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">연락처</span> 정보
        </h2>
        <p className="section-subtitle">
          궁금한 점이 있으시면 언제든 문의해주세요. 빠르게 답변드리겠습니다.
        </p>
        <div className="contact-info-center">
          <ul className="contact-list">
            {contactInfo.map((c, i) => (
              <li key={i}>
                <span className="contact-icon">{c.icon}</span>
                <div>
                  <strong>{c.label}</strong>
                  <p>{c.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
