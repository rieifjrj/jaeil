import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryPhotos } from './data';

// 슬라이드 한 칸의 이동 거리 — 슬라이드 폭에 간격을 더한 값이다.
function slideStep(track) {
  const first = track.firstElementChild;
  if (!first) return track.clientWidth;
  return first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
}

// 스크롤 스냅으로 넘긴다. 손가락 스와이프는 브라우저 기본 동작을 그대로 쓰고,
// 좌우 버튼은 한 칸씩 스크롤한다.
export default function Carousel() {
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = track.current;
    const onScroll = () => {
      setIndex(Math.min(galleryPhotos.length - 1, Math.round(el.scrollLeft / slideStep(el))));
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { el.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  const move = dir => { const el = track.current; el.scrollBy({ left: dir * slideStep(el), behavior: 'smooth' }); };

  return <div className="carousel">
    <div className="carousel-track" ref={track} tabIndex={0} role="group" aria-label="제품 사진 둘러보기">
      {galleryPhotos.map((photo, i) => <Link className="slide" to={`/products/${photo.productId}?color=${photo.colorIndex}`} key={photo.src}>
        <img src={photo.thumb} alt={`${photo.productName} ${photo.label}`} loading={i < 3 ? 'eager' : 'lazy'} />
        <div className="slide-caption"><strong>{photo.productName}</strong><span>{photo.label}</span></div>
      </Link>)}
    </div>
    <div className="carousel-bar">
      <span className="carousel-count">{String(index + 1).padStart(2, '0')}<i>/</i>{String(galleryPhotos.length).padStart(2, '0')}</span>
      <div className="carousel-buttons">
        <button onClick={() => move(-1)} disabled={index === 0} aria-label="이전 사진">←</button>
        <button onClick={() => move(1)} disabled={atEnd} aria-label="다음 사진">→</button>
      </div>
    </div>
  </div>;
}
