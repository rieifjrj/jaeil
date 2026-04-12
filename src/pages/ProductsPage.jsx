import { useEffect } from 'react'
import './ProductsPage.css'

const products = [
  {
    id: 'single',
    type: '싱글도어',
    desc: '한 세대가 단독으로 사용하는 기본 구조',
    originalPrice: '500,000',
    discount: 50,
    finalPrice: '250,000',
    images: [
      { src: '/img/single/2100_철판_갈색.png', label: '철판 갈색' },
      { src: '/img/single/2100_철판_주황.png', label: '철판 주황' },
      { src: '/img/single/2100_타공_그레이.png', label: '타공 그레이' },
      { src: '/img/single/2100_타공_주황.png', label: '타공 주황' },
      { src: '/img/single/2100_타공_초록.png', label: '타공 초록' },
      { src: '/img/single/2100_타공_테두리주황.png', label: '타공 테두리주황' },
      { src: '/img/single/2100_타공_파랑.png', label: '타공 파랑' },
    ],
    sizes: [
      { label: '일반형', size: '800 x 800 x 2100mm' },
      { label: '확장형', size: '1000 x 1000 x 2100mm' },
      { label: '특대형', size: '1200 x 1200 x 2100mm' },
    ],
  },
  {
    id: 'two',
    type: '투도어',
    desc: '상하 분리하여 두 세대가 공유하는 구조',
    originalPrice: '600,000',
    discount: 50,
    finalPrice: '300,000',
    images: [
      { src: '/img/two/2100_2단_철판_노랑.png', label: '철판 노랑' },
      { src: '/img/two/2100_2단_철판_연두.png', label: '철판 연두' },
      { src: '/img/two/2100_2단_철판_주황.png', label: '철판 주황' },
      { src: '/img/two/2100_2단_철판_초록.png', label: '철판 초록' },
      { src: '/img/two/2100_2단_철판_회색.png', label: '철판 회색' },
    ],
    sizes: [
      { label: '일반형', size: '800 x 800 x 1050mm' },
      { label: '확장형', size: '1000 x 1000 x 1050mm' },
      { label: '특대형', size: '1200 x 1200 x 1050mm' },
    ],
  },
]

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="products-page">
      <div className="pp-hero">
        <div className="container">
          <h1>제품소개</h1>
          <p>다양한 공간과 용도에 맞춘 세대창고 솔루션</p>
        </div>
      </div>

      <div className="container">
        {products.map((product) => (
          <section className="pp-section" key={product.id}>
            {/* 섹션 헤더 */}
            <div className="pp-section-header">
              <div>
                <h2 className="pp-product-title">{product.type}</h2>
                <p className="pp-product-desc">{product.desc}</p>
              </div>
              <div className="pp-price-box">
                <span className="pp-discount-badge">{product.discount}% OFF</span>
                <span className="pp-original-price">{product.originalPrice}원</span>
                <span className="pp-final-price">{product.finalPrice}<small>원</small></span>
              </div>
            </div>

            <div className="pp-card">
              {/* 이미지 그리드 */}
              <div className="pp-image-grid">
                {product.images.map((img, i) => (
                  <div className="pp-image-item" key={i}>
                    <img src={img.src} alt={img.label} />
                    <span className="pp-image-label">{img.label}</span>
                  </div>
                ))}
              </div>

              {/* 사이즈 테이블 */}
              <div className="pp-info">
                <table className="pp-table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>규격 (가로 x 세로 x 높이)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizes.map((item, i) => (
                      <tr key={i}>
                        <td className="pp-td-label">{item.label}</td>
                        <td className="pp-td-size">{item.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="pp-ai-notice">* 이해를 돕기 위하여, 생성형 AI로 편집된 사진입니다.</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
