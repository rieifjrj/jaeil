import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './ProductsPage.css'

const sizeData = [
  {
    type: '단문형 (싱글도어)',
    desc: '한 세대가 단독으로 사용하는 기본 구조',
    items: [
      { label: '일반형', size: '800 x 800 x 2100mm' },
      { label: '확장형', size: '1000 x 1000 x 2100mm' },
      { label: '특대형', size: '1200 x 1200 x 2100mm' },
    ],
  },
  {
    type: '투도어 (복층형)',
    desc: '상하 분리하여 두 세대가 공유하는 구조',
    items: [
      { label: '일반형', size: '800 x 800 x 1050mm' },
      { label: '확장형', size: '1000 x 1000 x 1050mm' },
      { label: '특대형', size: '1200 x 1200 x 1050mm' },
    ],
  },
]

// 이미지 슬롯 — src/assets/products/ 폴더에 이미지를 넣고 import로 교체하면 됩니다
const slides = [
  { id: 1, alt: '제품 이미지 1' },
  { id: 2, alt: '제품 이미지 2' },
  { id: 3, alt: '제품 이미지 3' },
  { id: 4, alt: '제품 이미지 4' },
]

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="products-page">
      {/* 페이지 헤더 */}
      <div className="pp-hero">
        <div className="container">
          <h1>제품소개</h1>
          <p>다양한 공간과 용도에 맞춘 세대창고 솔루션</p>
        </div>
      </div>

      <div className="container">
        <div className="pp-card">
          {/* 이미지 캐러셀 */}
          <div className="pp-carousel-wrap">
            <button className="pp-nav pp-nav-prev"><HiChevronLeft /></button>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: '.pp-nav-prev',
                nextEl: '.pp-nav-next',
              }}
              pagination={{ clickable: true }}
              className="pp-carousel"
            >
              {slides.map((s) => (
                <SwiperSlide key={s.id}>
                  <div className="pp-slide">
                    <div className="pp-slide-placeholder">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <span>{s.alt}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="pp-nav pp-nav-next"><HiChevronRight /></button>
          </div>

          {/* 사이즈 테이블 */}
          <div className="pp-tables">
            {sizeData.map((group, gi) => (
              <div className="pp-table-group" key={gi}>
                <div className="pp-table-header">
                  <h3>{group.type}</h3>
                  <span>{group.desc}</span>
                </div>
                <table className="pp-table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>규격 (가로 x 세로 x 높이)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item, i) => (
                      <tr key={i}>
                        <td className="pp-td-label">{item.label}</td>
                        <td className="pp-td-size">{item.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
