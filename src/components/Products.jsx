import './Products.css'

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

const features = [
  '고급 분체도장 마감',
  '잠금장치 기본 포함',
  '현장 맞춤 사이즈 제작 가능',
  '3년 무상 A/S 보장',
  '자체 공장 직접 생산',
  '전문 시공팀 책임 설치',
]

export default function Products() {
  return (
    <section className="section products" id="products">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">제품</span> 소개
        </h2>
        <p className="section-subtitle">
          아파트 세대창고 전 규격을 자체 생산합니다.
        </p>

        <div className="products-single-card">
          {/* 사이즈 테이블 */}
          <div className="products-tables">
            {sizeData.map((group, gi) => (
              <div className="products-table-group" key={gi}>
                <div className="ptg-header">
                  <h3>{group.type}</h3>
                  <span>{group.desc}</span>
                </div>
                <table className="products-table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>규격 (가로 x 세로 x 높이)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item, i) => (
                      <tr key={i}>
                        <td className="pt-label">{item.label}</td>
                        <td className="pt-size">{item.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* 공통 특징 */}
          <div className="products-common">
            <h3>공통 사양</h3>
            <ul className="products-feature-list">
              {features.map((f) => (
                <li key={f}><span className="pf-check">&#10003;</span>{f}</li>
              ))}
            </ul>
            <p className="products-note">
              * 위 규격은 표준 사이즈이며, 현장 상황에 따라 맞춤 제작이 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
