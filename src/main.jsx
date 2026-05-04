import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Retune } from 'retune';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Info,
  RotateCcw,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Star,
  Tag,
  Truck,
  Zap,
} from 'lucide-react';
import './styles.css';

installRetuneMobilePreviewPatch();

const comboItems = [
  {
    title: 'Apple Airpods Pro 2 Wireless Earbuds',
    price: '899',
    oldPrice: '1399',
    discount: '33%',
    image: '/figma-assets/combo-airpods.png',
  },
  {
    title: 'Apple Airpods Pro 2 Wireless Earbuds',
    price: '899',
    oldPrice: '1399',
    discount: '33%',
    image: '/figma-assets/combo-airpods.png',
  },
];

const PRODUCT_PATH = '/product/galaxy-s25-ultra';

function App() {
  const [saved, setSaved] = useState(false);

  useProductCardRouting();
  useInitialDeliveryScroll();

  return (
    <div className="prototype-stage">
      <div className="device-frame noon-device" aria-label="375 by 812 pixel Noon PDP prototype">
        <main className="noon-pdp">
          <FloatingHeader saved={saved} onSave={() => setSaved((value) => !value)} />

          <section className="noon-hero" aria-label="Product media">
            <img className="noon-product" src="/figma-assets/product.png" alt="Anker USB C charger" />
            <div className="hero-bottom">
              <span className="exclusive-pill">noon's exclusive</span>
              <div className="carousel-dots" aria-hidden="true">
                <span className="is-active" />
                <span />
                <span />
                <span />
              </div>
              <button className="round-action" aria-label="Rotate product view">
                <RotateCcw size={18} />
              </button>
            </div>
          </section>

          <section className="main-info" aria-label="Product information">
            <div className="store-row">
              <span className="store-name">
                <ShieldCheck size={16} />
                Anker
              </span>
              <a href="#" className="store-link">
                Visit Store
                <ChevronRight size={15} />
              </a>
            </div>

            <article className="info-card">
              <div className="product-title-row">
                <h1>
                  USB C Plug, 735 Charger (Nano II 65W), PPS 3-Port Fast Compact USB C Charger...
                </h1>
                <button className="tiny-icon" aria-label="Expand product title">
                  <ChevronDown size={16} />
                </button>
              </div>

              <div className="mini-badges">
                <span className="rating-badge">
                  <Star size={12} fill="currentColor" />
                  <strong>4.3</strong>
                  <span>(126 reviews)</span>
                </span>
                <span className="prepaid-badge">
                  <ShoppingBag size={14} />
                  Prepaid Only
                </span>
              </div>

              <div className="price-line">
                <strong>
                  <DirhamSymbol />
                  109
                </strong>
                <del>
                  <DirhamSymbol />
                  209
                </del>
                <span className="discount">47% OFF</span>
                <span className="vat">(incl. of VAT)</span>
                <Info size={14} />
              </div>

              <div className="saving-strip">
                <span className="saving-icon">▱</span>
                <span>
                  Saving <DirhamSymbol />45 with Combo
                </span>
                <Info size={13} />
              </div>

              <div className="meta-row">
                <span>500ml</span>
                <span>
                  <DirhamSymbol />2.35/ml
                </span>
              </div>

              <div className="deal-row">
                <span className="mega-deal">Mega Deal</span>
                <span className="lowest-price">
                  <Tag size={13} />
                  Lowest Price in 30 days
                </span>
              </div>

              <div className="coupon-row" aria-label="Available promotions">
                <span className="coupon-chip">
                  <Zap size={14} />
                  Extra 15%, CODE: ENDD15
                  <ChevronRight size={13} />
                </span>
                <span className="coupon-chip">
                  <Truck size={14} />
                  Extra 10% off up to <DirhamSymbol />150
                </span>
              </div>

              <div className="bestseller-row">
                <ShieldCheck size={15} />
                <span>
                  Bestseller #1 in <a href="#">Chargers</a>
                </span>
                <ChevronRight size={15} />
              </div>
            </article>
          </section>

          <section className="combo-section" aria-label="Combo offers">
            <h2>In this combo</h2>
            <div className="combo-grid">
              {comboItems.map((item, index) => (
                <article className="combo-card" key={`${item.title}-${index}`}>
                  <div className="combo-thumb">
                    <img src={item.image} alt="" />
                    <small>x2</small>
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <strong>
                      <DirhamSymbol />
                      {item.price}
                    </strong>
                    <del>{item.oldPrice}</del>
                    <span>{item.discount}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="delivery-card" aria-label="Delivery information">
            <div className="delivery-title">
              <h2>Delivery Information</h2>
              <span>
                <b>one</b>
                member
              </span>
            </div>

            <article className="express-card">
              <div className="express-top">
                <span className="express-mark">express</span>
                <p>
                  Get by <strong>7th Sep</strong>
                </p>
                <span className="order-clock">Order in 21 hrs</span>
              </div>

              <div className="delivery-options">
                <button>
                  Faster Delivery Options
                  <ChevronDown size={16} />
                </button>
                <span className="delivery-divider" aria-hidden="true" />
                <div className="option-row">
                  <span>Get it Today</span>
                  <strong>
                    + <DirhamSymbol /> 14.00
                  </strong>
                </div>
                <div className="option-row">
                  <span>Get it Tomorrow <small>[before 12pm]</small></span>
                  <strong>
                    + <DirhamSymbol /> 12.00
                  </strong>
                </div>
                <p className="checkout-note">
                  <Info size={14} />
                  Select these options on checkout
                </p>
              </div>
            </article>

            <button className="one-cta">
              Get it today for free with <b>one</b>
              <ChevronRight size={18} />
            </button>
          </section>
        </main>
      </div>
      <Retune force position="bottom-left" />
    </div>
  );
}

function DirhamSymbol() {
  return <span className="dirham-symbol" aria-label="AED">{'\uE001'}</span>;
}

function useInitialDeliveryScroll() {
  useEffect(() => {
    const scrollToDelivery = () => {
      const pdpScroller = document.querySelector('.noon-pdp');
      const deliveryCard = document.querySelector('.delivery-card');

      if (!pdpScroller || !deliveryCard) return;

      pdpScroller.scrollTop = Math.min(
        deliveryCard.offsetTop + 360,
        pdpScroller.scrollHeight - pdpScroller.clientHeight,
      );
    };

    requestAnimationFrame(scrollToDelivery);
    const timer = window.setTimeout(scrollToDelivery, 180);

    return () => window.clearTimeout(timer);
  }, []);
}

function useProductCardRouting() {
  useEffect(() => {
    const handleProductCardClick = (event) => {
      const card = event.target.closest(
        '.plp [data-product-card], .plp .product-card, .plp .product-tile, .plp article, .plp a',
      );

      if (!card) return;

      event.preventDefault();
      window.history.pushState({}, '', PRODUCT_PATH);
      window.dispatchEvent(new PopStateEvent('popstate'));
    };

    document.addEventListener('click', handleProductCardClick);
    return () => document.removeEventListener('click', handleProductCardClick);
  }, []);
}

function FloatingHeader({ saved, onSave }) {
  return (
    <header className="floating-header" aria-label="Product controls">
      <button className="round-action" aria-label="Back">
        <ChevronLeft size={20} />
      </button>
      <div className="header-actions">
        <button className="round-action" aria-label="Search">
          <Search size={18} />
        </button>
        <button className={`round-action ${saved ? 'is-saved' : ''}`} onClick={onSave} aria-label="Wishlist">
          <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <button className="round-action" aria-label="Share">
          <Share2 size={18} />
        </button>
      </div>
    </header>
  );
}

function installRetuneMobilePreviewPatch() {
  if (typeof window === 'undefined' || window.__retuneMobilePreviewPatch) return;

  const originalMatchMedia = window.matchMedia.bind(window);
  window.matchMedia = (query) => {
    if (query === '(min-width: 768px)') {
      const listeners = new Set();

      return {
        matches: true,
        media: query,
        onchange: null,
        addEventListener: (_event, listener) => listeners.add(listener),
        removeEventListener: (_event, listener) => listeners.delete(listener),
        addListener: (listener) => listeners.add(listener),
        removeListener: (listener) => listeners.delete(listener),
        dispatchEvent: (event) => {
          listeners.forEach((listener) => listener(event));
          return true;
        },
      };
    }

    return originalMatchMedia(query);
  };

  window.__retuneMobilePreviewPatch = true;
}

const rootElement = document.getElementById('root');
const root = window.__pdpPrototypeRoot ?? createRoot(rootElement);
window.__pdpPrototypeRoot = root;
root.render(<App />);
