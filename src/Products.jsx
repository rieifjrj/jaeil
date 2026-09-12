import { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { products, commonFeatures, sizeRows, showProjects } from './data';

export function Price({ product }) { return <div className="price-row"><span className="discount">50% OFF</span><del><span className="sr-only">할인 전 가격 </span>{product.original.toLocaleString('ko-KR')}원</del><strong><span className="sr-only">판매가 </span>{product.price.toLocaleString('ko-KR')}<small>원</small></strong></div>; }

// 메인에서는 대표 제품 두 가지만, 제품소개에서는 색상 전체를 펼친다.
export function ProductSection({ full = false }) {
  if (!full) return <section className="section products" id="products"><div className="section-heading"><div><p className="eyebrow">01 / PRODUCTS</p><h2>필요한 수납에 맞는 선택</h2></div><Link className="text-link" to="/products">전체 제품 보기 ↗</Link></div><div className="product-grid">{products.map((p, i) => <Link className="product" to={`/products/${p.id}`} key={p.id}><div className="product-image"><span className="image-index">TYPE 0{i + 1}</span><img src={p.colors[0].src} alt={`${p.name} ${p.colors[0].label} 제품 예시`} loading="lazy" /><span className="image-note">AI 편집 이미지</span></div><div className="product-title"><div><h3>{p.name}</h3><p>{p.description}</p></div><span className="round-arrow">↗</span></div><Price product={p} /><div className="spec"><span>{p.type}</span><span>색상 {p.colors.length}종</span><span>규격 보기 +</span></div></Link>)}</div></section>;

  return <section className="section products" id="products">
    <div className="section-heading"><div><p className="eyebrow">01 / PRODUCTS</p><h2>제품소개</h2></div><span className="text-link">전 규격 자체 생산</span></div>
    {products.map(p => <article className="product-block" key={p.id}>
      <div className="block-head"><div><h3>{p.name}</h3><p>{p.description}</p></div><Price product={p} /></div>
      <div className="color-grid">{p.colors.map((c, i) => <Link className="color-item" to={`/products/${p.id}?color=${i}`} key={c.src}><img src={c.src} alt={`${p.name} ${c.label}`} loading="lazy" /><span>{c.label}</span></Link>)}</div>
      <div className="block-foot"><span>{p.type}</span><span>{p.spec}</span><span>색상 {p.colors.length}종</span><Link className="text-link" to={`/products/${p.id}`}>규격과 상세 보기 ↗</Link></div>
    </article>)}
    <div className="common-spec"><h3>공통 사양</h3><ul>{commonFeatures.map(f => <li key={f}>{f}</li>)}</ul><p className="caption">표준 규격 기준이며, 현장 상황에 따라 맞춤 제작이 가능합니다. 제품 사진은 이해를 돕기 위해 생성형 AI로 편집했습니다.</p></div>
  </section>;
}

export function ProductDetail() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const p = products.find(item => item.id === id);
  // 제품소개에서 특정 색상을 눌러 들어온 경우 그 색상을 펼친 상태로 시작한다.
  const requested = Number(params.get('color'));
  const [active, setActive] = useState(p && requested >= 0 && requested < p.colors.length ? requested : 0);
  if (!p) return <section className="section"><h1>제품을 찾을 수 없습니다.</h1><Link to="/products">제품소개로 돌아가기</Link></section>;
  const color = p.colors[active];
  return <section className="section detail-page">
    <Link className="breadcrumb" to="/products">← 제품소개</Link>
    <div className="detail-grid">
      <div>
        <img className="detail-image" src={color.src} alt={`${p.name} ${color.label} 제품 외관`} />
        <div className="swatch-row">{p.colors.map((c, i) => <button className={i === active ? 'swatch active' : 'swatch'} key={c.src} onClick={() => setActive(i)} aria-pressed={i === active}><img src={c.src} alt="" loading="lazy" /><span>{c.label}</span></button>)}</div>
        <p className="caption">{color.finish} / {color.label} — 생성형 AI로 편집된 제품 예시입니다.</p>
      </div>
      <div>
        <p className="eyebrow">PRODUCT DETAILS</p>
        <h1>{p.name}</h1>
        <p className="description">{p.description}</p>
        <Price product={p} />
        <table><thead><tr><th>구분</th><th>가로 × 깊이 × 높이</th></tr></thead><tbody>{sizeRows(p).map(r => <tr key={r.label}><td>{r.label}</td><td>{r.size}</td></tr>)}</tbody></table>
        <p className="caption">{p.id === 'double' ? '높이 1,050mm는 기존 제공 자료 기준입니다. 한 칸 높이와 전체 외형 높이의 구분은 확인이 필요합니다.' : '표준 규격이며 상세 사양은 상담 시 확인해주세요.'}</p>
        <ul className="feature-list">{commonFeatures.map(f => <li key={f}>{f}</li>)}</ul>
        <a className="solid" href="tel:01041134564">제품 문의하기 ↗</a>
      </div>
    </div>
    {showProjects && <Link className="text-link" to="/projects">설치 배치 예시 보기 ↗</Link>}
  </section>;
}
