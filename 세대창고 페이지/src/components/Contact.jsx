import { useState } from 'react'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import './Contact.css'

const contactInfo = [
  { icon: <HiPhone />, label: '전화', value: '010-4113-4564' },
  { icon: <HiMail />, label: '이메일', value: 'jeilmetal@gmail.com' },
  { icon: <HiLocationMarker />, label: '주소', value: '경기도 김포시 대곶면' },
  { icon: <HiClock />, label: '운영시간', value: '평일 09:00 - 18:00' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', type: '일반형', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('문의가 접수되었습니다. 빠른 시일 내 연락드리겠습니다.')
    setForm({ name: '', phone: '', type: '일반형', message: '' })
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">3초만에</span> 문의하기
        </h2>
        <p className="section-subtitle">
          궁금한 점이 있으시면 언제든 문의해주세요. 빠르게 답변드리겠습니다.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>연락처 정보</h3>
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
            <div className="contact-map">
              <div className="map-placeholder">
                <HiLocationMarker size={32} />
                <span>경기도 김포시 대곶면</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>이름 / 업체명</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="이름을 입력해주세요"
                  required
                />
              </div>
              <div className="form-group">
                <label>연락처</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="010-0000-0000"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>제품 유형</label>
              <select name="type" value={form.type} onChange={handleChange}>
                <option>일반형</option>
                <option>확장형</option>
                <option>투도어형</option>
                <option>기타 (직접 입력)</option>
              </select>
            </div>
            <div className="form-group">
              <label>문의 내용</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="문의 내용을 입력해주세요"
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn-primary contact-submit">
              문의 보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
