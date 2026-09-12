import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import { ProductSection, ProductDetail } from './Products';
import { products, showProjects } from './data';
import { Projects, Guide, About } from './Pages';
const navItems = [['/products','제품소개'], ...(showProjects ? [['/projects','설치사례']] : []), ['/guide','제작 설치 안내'], ['/about','회사소개']];
function Header(){const [open,setOpen]=useState(false);return <header><Link className="brand" to="/" onClick={()=>setOpen(false)} aria-label="제일금속 홈"><span className="brand-mark" aria-hidden="true"/><span>제일금속<small>JAEIL METAL</small></span></Link><nav id="main-nav" className={open?'open':''} aria-label="주 메뉴">{navItems.map(([url,label])=><NavLink key={url} to={url} onClick={()=>setOpen(false)}>{label}</NavLink>)}</nav><a className="contact-link" href="tel:01041134564">제품 설치 문의 <span>↗</span></a><button className="mobile-menu" aria-expanded={open} aria-controls="main-nav" aria-label={open?'메뉴 닫기':'메뉴 열기'} onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button></header>}
function Layout(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0);const product=products.find(p=>pathname===`/products/${p.id}`);const title=product?.name || navItems.find(([url])=>pathname===url)?.[1] || '공간에 맞춘 세대창고';document.title=`${title} | 제일금속`;},[pathname]);return <><a className="skip-link" href="#main-content">본문 바로가기</a><Header key={pathname}/><main id="main-content"><Routes><Route path="/" element={<Home/>}/><Route path="/products" element={<ProductSection full/>}/><Route path="/products/:id" element={<ProductDetail/>}/>{showProjects && <Route path="/projects" element={<Projects/>}/>}<Route path="/guide" element={<Guide/>}/><Route path="/about" element={<About/>}/><Route path="*" element={<section className="section"><h1>페이지를 찾을 수 없습니다.</h1><Link to="/">메인으로 돌아가기</Link></section>}/></Routes></main><Footer/></>}
export default function App(){return <BrowserRouter><Layout/></BrowserRouter>}
