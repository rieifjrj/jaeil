import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
import './Header.css'

const menuItems = [
  {
    label: '회사소개',
    submenu: ['인사말', '연혁', '오시는 길'],
  },
  {
    label: '사업분야',
    submenu: ['금속제품 제조', '판금/절곡/프레스 가공'],
  },
  {
    label: '제품소개',
    to: '/products',
  },
  {
    label: '설치사례',
    href: '#gallery',
  },
  {
    label: '고객지원',
    submenu: ['공지사항', 'FAQ', '문의하기'],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner container">
        <Link to="/" className="logo">
          <span className="logo-icon">F</span>
          <span className="logo-text">제일금속</span>
        </Link>

        <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.label} className="nav-item">
                {item.to ? (
                  <Link to={item.to} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href || '#'} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>
                )}
                {item.submenu && (
                  <ul className="submenu">
                    {item.submenu.map((sub) => (
                      <li key={sub}>
                        <a href="#">{sub}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <span className="header-cta header-cta-desktop btn-primary">
          <HiPhone />
          010-4113-4564
        </span>
        <a href="tel:01041134564" className="header-cta header-cta-mobile btn-primary">
          <HiPhone />
          전화 걸기
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
    </header>
  )
}
