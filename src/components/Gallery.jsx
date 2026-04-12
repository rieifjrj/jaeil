import './Gallery.css'

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

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">제품소개</span>
        </h2>
        {products.map((product) => (
          <div className="gallery-product" key={product.id}>
            <div className="gallery-section-header">
              <div>
                <h3 className="gallery-product-title">{product.type}</h3>
                <p className="gallery-product-desc">{product.desc}</p>
              </div>
              <div className="gallery-price-box">
                <span className="gallery-discount-badge">{product.discount}% OFF</span>
                <span className="gallery-original-price">{product.originalPrice}원</span>
                <span className="gallery-final-price">{product.finalPrice}<small>원</small></span>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-image-grid">
                {product.images.map((img, i) => (
                  <div className="gallery-image-item" key={i}>
                    <img src={img.src} alt={img.label} />
                    <span className="gallery-image-label">{img.label}</span>
                  </div>
                ))}
              </div>

              <div className="gallery-info">
                <table className="gallery-table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>규격 (가로 x 세로 x 높이)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizes.map((item, i) => (
                      <tr key={i}>
                        <td className="gallery-td-label">{item.label}</td>
                        <td className="gallery-td-size">{item.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="gallery-ai-notice">* 이해를 돕기 위하여, 생성형 AI로 편집된 사진입니다.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
