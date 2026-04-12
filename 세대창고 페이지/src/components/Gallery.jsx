import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Gallery.css'

const galleryItems = [
  { title: '래미안 아파트 A동', location: '경기도 김포시', units: '120세대' },
  { title: '힐스테이트 B동', location: '서울특별시 강서구', units: '85세대' },
  { title: '자이 아파트 C동', location: '인천광역시 서구', units: '200세대' },
  { title: '푸르지오 D동', location: '경기도 파주시', units: '150세대' },
  { title: 'e편한세상 E동', location: '서울특별시 마포구', units: '95세대' },
  { title: '더샵 F동', location: '경기도 고양시', units: '180세대' },
]

const colors = ['#066aab', '#28a745', '#ff6b35', '#6f42c1', '#e83e8c', '#fd7e14']

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">설치 예시</span>
        </h2>
        <p className="gallery-notice">
          * 이해를 돕기 위하여, 생성형 AI로 편집된 사진입니다.
        </p>
      </div>
      <div className="gallery-slider">
        <button className="gallery-nav gallery-prev"><HiChevronLeft /></button>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '.gallery-prev',
            nextEl: '.gallery-next',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="gallery-swiper"
        >
          {galleryItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="gallery-card">
                <div
                  className="gallery-image"
                  style={{ background: `linear-gradient(135deg, ${colors[i]}22, ${colors[i]}44)` }}
                >
                  <div className="gallery-placeholder" style={{ color: colors[i] }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span>시공 사진</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="gallery-nav gallery-next"><HiChevronRight /></button>
      </div>
    </section>
  )
}
