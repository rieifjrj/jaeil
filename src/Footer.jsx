// 구분자는 문단 안에서 줄바꿈될 수 있으므로 텍스트가 아니라 요소로 둔다.
const Sep = () => <span className="sep" aria-hidden="true">|</span>;

export default function Footer(){return <footer>
  <a className="brand" href="/"><span className="brand-mark" aria-hidden="true"></span><span>제일금속<small>JAEIL METAL</small></span></a>
  <div className="footer-info">
    <p>회사명 : 삼성식탁<Sep />사업자등록번호 : 133-09-74635 <strong>[사업자정보확인]</strong><Sep />주소 : 경기도 화성시 만세구 팔탄면 덕우공단2길 46-14 삼성식탁</p>
    <p>통신판매업 신고 : 2009-용인기흥-00171<Sep />연락처 : 031-286-1145<Sep />FAX : 031-286-1146<Sep />개인정보보호 책임자 : 박태희<Sep />대표자 : 박태희</p>
    <p className="footer-contact">contact : <a href="mailto:e-table@hanmail.net">e-table@hanmail.net</a> for more information</p>
  </div>
</footer>}
