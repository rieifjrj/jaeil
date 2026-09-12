// 제품 자료는 화면과 분리해 둔다. 사진을 추가하면 colors 배열만 늘리면 된다.
// 각 배열의 첫 번째 항목이 목록과 상세의 대표 이미지가 된다.
// file 은 확장자를 뺀 파일명이다. 실제 경로는 withPaths 가 만든다 —
// src 는 1200px 원본(히어로, 상세), thumb 은 600px 축소본(목록, 캐러셀, 색상칩)이다.
const withPaths = (dir, colors) => colors.map(c => ({
  ...c,
  src: `/img/${dir}/${c.file}.webp`,
  thumb: `/img/${dir}/${c.file}-sm.webp`,
}));

const singleColors = withPaths('single', [
  { label: '타공 그레이', finish: '타공 패널', file: '2100_타공_그레이' },
  { label: '타공 파랑', finish: '타공 패널', file: '2100_타공_파랑' },
  { label: '타공 초록', finish: '타공 패널', file: '2100_타공_초록' },
  { label: '타공 주황', finish: '타공 패널', file: '2100_타공_주황' },
  { label: '타공 테두리주황', finish: '타공 패널', file: '2100_타공_테두리주황' },
  { label: '철판 갈색', finish: '철판 패널', file: '2100_철판_갈색' },
  { label: '철판 주황', finish: '철판 패널', file: '2100_철판_주황' },
]);
const doubleColors = withPaths('two', [
  { label: '철판 회색', finish: '철판 패널', file: '2100_2단_철판_회색' },
  { label: '철판 노랑', finish: '철판 패널', file: '2100_2단_철판_노랑' },
  { label: '철판 연두', finish: '철판 패널', file: '2100_2단_철판_연두' },
  { label: '철판 초록', finish: '철판 패널', file: '2100_2단_철판_초록' },
  { label: '철판 주황', finish: '철판 패널', file: '2100_2단_철판_주황' },
]);

export const products = [
  { id: 'single', name: '싱글도어', description: '한 세대가 사용하는 독립형 수납 공간', type: '단문형', spec: '표준 높이 2,100mm', original: 500000, price: 250000, height: 2100, colors: singleColors },
  { id: 'double', name: '투도어', description: '상하로 나누어 사용하는 분리형 수납 공간', type: '상하 분리형', spec: '표준 높이 1,050mm', original: 600000, price: 300000, height: 1050, colors: doubleColors },
];

// 공통 사양은 제품 구분 없이 같으므로 한곳에 둔다.
export const commonFeatures = ['고급 분체도장 마감', '잠금장치 기본 포함', '현장 맞춤 사이즈 제작', '3년 무상 A/S', '자체 공장 직접 생산', '전문 시공팀 책임 설치'];

export function sizeRows(product) { return [800, 1000, 1200].map((s, i) => ({ label: ['일반형', '확장형', '특대형'][i], size: `${s} × ${s} × ${product.height} mm` })); }

// 메인 캐러셀은 제품 구분 없이 사진 전체를 한 줄로 이어 보여준다.
export const galleryPhotos = products.flatMap(p => p.colors.map((c, i) => ({ ...c, productId: p.id, productName: p.name, colorIndex: i })));

// 설치사례는 현장 사진과 도면이 준비될 때까지 감춘다.
// true 로 바꾸면 메뉴, 페이지, 본문 링크가 함께 되살아난다.
export const showProjects = false;
