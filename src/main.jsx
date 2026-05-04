import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Retune } from 'retune';
import {
  AlertTriangle,
  ArrowDownCircle,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplet,
  Heart,
  Info,
  Plus,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  ThumbsUp,
  Truck,
  Upload,
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

const colourOptions = [
  { name: '735 GaN', image: '/figma-assets/product.png' },
  { name: '735 GaN II', image: '/figma-assets/product.png', selected: true },
  { name: '736 GaN II', image: '/figma-assets/product.png' },
  { name: '736 GaN III', image: '/figma-assets/product.png', disabled: true },
];

const recommendedProducts = [
  { tag: 'Best Seller', image: '/figma-assets/combo-airpods.png' },
  { image: '/figma-assets/combo-airpods.png' },
  { image: '/figma-assets/combo-airpods.png' },
];

const PRODUCT_PATH = '/product/galaxy-s25-ultra';

function App() {
  const [qty, setQty] = useState(1);

  useProductCardRouting();
  useInitialDeliveryScroll();

  return (
    <div className="prototype-stage">
      <div className="device-frame noon-device" aria-label="375 by 812 pixel Noon PDP prototype">
        <main className="noon-pdp">
          <TopNav />

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
                  <span className="coupon-icon">%</span>
                  <span className="coupon-text">
                    Extra 15%, CODE: ENDD15
                  </span>
                  <ChevronRight size={13} />
                </span>
                <span className="coupon-chip">
                  <span className="coupon-icon">%</span>
                  <span className="coupon-text">
                    Extra 10% off up to <DirhamSymbol />150
                  </span>
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

          <PdpBottomSections />
        </main>
        <BottomNav qty={qty} onQtyChange={setQty} />
      </div>
      <Retune force position="bottom-left" />
    </div>
  );
}

function DirhamSymbol() {
  return <span className="dirham-symbol" aria-label="AED">{'\uE001'}</span>;
}

function PdpBottomSections() {
  return (
    <div className="figma-bottom-sections" aria-label="Additional product sections">
      <section className="free-gifts-card" aria-label="Free gifts for you">
        <h2>Free gifts for you</h2>
        <div className="gift-carousel">
          <article className="gift-card">
            <div className="gift-image">
              <img src="/figma-assets/gift-hamper.png" alt="" />
              <span>Free</span>
            </div>
            <div className="gift-copy">
              <h3>Pepsi Gift Hamper</h3>
              <p>Pack of 6 cans &amp; Hoodie or tote bag</p>
              <a href="#">
                View eligible products
                <ChevronRight size={14} />
              </a>
            </div>
          </article>
          <article className="gift-card gift-card-small" aria-label="Another free Pepsi gift hamper">
            <div className="gift-image">
              <img src="/figma-assets/gift-hamper.png" alt="" />
              <span>Free</span>
            </div>
          </article>
        </div>
      </section>

      <section className="choice-card" aria-label="Product choices">
        <ChoiceGroup title="Versions" action="Learn more" options={['UK 3 PIN', 'US 2 PIN']} />
        <ChoiceGroup title="Charger Model" action="Size Guide" options={['UK 3 PIN', 'US 2 PIN']} />

        <div className="choice-heading">
          <h2>Colour</h2>
          <a href="#">View All</a>
        </div>
        <div className="colour-scroller" role="list">
          {colourOptions.map((option) => (
            <button className={`colour-option ${option.selected ? 'is-selected' : ''}`} key={option.name} type="button">
              <span className="colour-image">
                <img src={option.image} alt="" />
                {option.disabled && <b>OUT OF STOCK</b>}
              </span>
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="payment-offers-card" aria-label="Payment offers">
        <h2>Payment offers</h2>
        <div className="payment-offer-row">
          <article className="cashback-card">
            <span className="noon-card-art">noon</span>
            <p>
              <strong>Get extra 5% cashback</strong> using ENBD noon VISA credit card
              <a href="#">Apply Now</a>
            </p>
          </article>
          <article className="tabby-card">
            <img src="/figma-assets/tabby-badge.png" alt="tabby" />
          </article>
        </div>
      </section>

      <section className="top-products-card" aria-label="Top products in chargers">
        <h2>
          Top Products in <a href="#">chargers</a>
        </h2>
        <div className="top-products-scroller">
          {recommendedProducts.map((product, index) => (
            <article className="recommend-card" key={index}>
              <div className="recommend-image">
                {product.tag && <span className="recommend-tag">{product.tag}</span>}
                <button type="button" aria-label="Add to wishlist">
                  <Heart size={15} />
                </button>
                <img src={product.image} alt="" />
                <span className="ad-pill-static">Ad</span>
                <button className="recommend-add" type="button" aria-label="Add to cart">
                  <Plus size={20} />
                </button>
              </div>
              <div className="recommend-copy">
                <div className="recommend-rating-section">
                  <p className="recommend-product-name">Apple Airpods Pro 2 Wireless Earbuds</p>
                  <span className="recommend-rating">
                    <Star size={10} fill="currentColor" />
                    <strong>4.3</strong> <span>(128)</span>
                  </span>
                </div>
                <div className="recommend-pricing-section">
                  <div className="recommend-price">
                    <strong>
                      <DirhamSymbol />899
                    </strong>
                    <del>1399</del>
                    <span>33%</span>
                  </div>
                  <span className="recommend-nudge">
                    <Zap size={11} fill="currentColor" />
                    Lowest price in 30...
                  </span>
                </div>
                <span className="eta-pill">
                  <b>express</b>
                  Today
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits-section" aria-label="Product benefits">
        <div className="benefits-grid">
          <div className="benefit-item">
            <Star size={20} />
            <span>High Rated</span>
          </div>
          <div className="benefit-item">
            <RotateCcw size={20} />
            <span>Low &amp; Easy Returns</span>
          </div>
          <div className="benefit-item">
            <ShieldCheck size={20} />
            <span>Secure Transaction</span>
          </div>
        </div>
      </section>

      <section className="product-details-card" aria-label="Product details">
        <h2>Product Details</h2>
        <details className="detail-item" open>
          <summary>
            <span>Overview</span>
            <ChevronDown size={20} className="detail-chev" />
          </summary>
          <div className="detail-content">
            <p className="detail-overview">
              A compact, high-performance wall charger built with GaN (Gallium Nitride) technology for faster, cooler, and more efficient charging. With 65W output, it can power laptops, tablets, and smartphones at top speed.
            </p>
            <ul className="detail-bullets">
              <li>Power 3 devices at once with 2 USB-C ports and one USB-A port</li>
              <li>Connect a single device to charge at up to 65W.</li>
              <li>Charge Up to 30 Minutes Faster: Our exclusive PowerIQ 4.0 technology</li>
              <li>Greener with GaN: The amount of power saved could be up to 796.39 million kWh per year</li>
              <li>ActiveShield 2.0: Anker&apos;s proprietary technology enhances protection by intelligently monitoring temperature</li>
            </ul>
          </div>
        </details>
        <details className="detail-item">
          <summary>
            <span>Highlights</span>
            <ChevronDown size={20} className="detail-chev" />
          </summary>
          <div className="detail-content">
            <p>Key product highlights and features</p>
          </div>
        </details>
        <details className="detail-item">
          <summary>
            <span>Specifications</span>
            <ChevronDown size={20} className="detail-chev" />
          </summary>
          <div className="detail-content">
            <p>Technical specifications and details</p>
          </div>
        </details>
      </section>

      <section className="additional-info-card" aria-label="Additional information">
        <h2>Additional Information</h2>
        <div className="info-item">
          <Info size={16} />
          <span>Not eligible for return</span>
          <ChevronRight size={16} />
        </div>
        <div className="info-item">
          <Truck size={16} />
          <span>Free delivery with Lockers &amp; Pickup</span>
          <ChevronRight size={16} />
        </div>
        <div className="info-item">
          <ShieldCheck size={16} />
          <span>1 year warranty applicable</span>
          <ChevronRight size={16} />
        </div>
      </section>

      <section className="bestseller-card" aria-label="Bestseller in chargers">
        <div className="bestseller-badge" aria-hidden="true">
          <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 22L1 36L8 33L11 40L16 28" fill="#0a4f4a"/>
            <path d="M30 22L35 36L28 33L25 40L20 28" fill="#0a4f4a"/>
            <circle cx="18" cy="16" r="14" fill="#0a4f4a"/>
          </svg>
          <span className="bestseller-rank">1</span>
        </div>
        <div className="bestseller-copy">
          <p className="bestseller-title">
            <strong>Bestseller #1</strong>
            <span> in </span>
            <span className="bestseller-category">Chargers</span>
          </p>
          <p className="bestseller-explore">Explore other bestsellers</p>
        </div>
        <ChevronRight size={20} className="bestseller-chev" />
      </section>

      <section className="seller-widget-card" aria-label="Seller information">
        <div className="seller-top">
          <div className="seller-info">
            <div className="seller-logo" aria-hidden="true">A</div>
            <div className="seller-meta">
              <div className="seller-name-row">
                <span>Sold by</span>
                <strong>Anker UAE Inc.</strong>
                <ChevronRight size={16} />
              </div>
              <div className="seller-rating-row">
                <span className="seller-rating">
                  <Star size={12} fill="currentColor" />
                  <strong>4.3</strong>
                  <span className="seller-rating-count">(128)</span>
                </span>
                <span className="seller-positive">
                  <strong>74%</strong> Positive Seller Ratings
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="seller-badges">
          <span className="seller-chip">
            <RotateCcw size={14} />
            Low Return Seller
          </span>
          <span className="seller-chip">
            <Star size={14} fill="currentColor" />
            Great Recent Ratings
          </span>
          <span className="seller-chip">
            <Star size={14} fill="currentColor" />
            Partner Since 5+ Years
          </span>
          <span className="seller-chip">
            <Star size={14} fill="currentColor" />
            Item as Described <strong>100%</strong>
          </span>
        </div>
        <div className="seller-subtitle">
          This is a placeholder for brands to place subititle
        </div>
        <div className="seller-divider" />
        <div className="seller-other-offers">
          <Tag size={16} />
          <p>
            5 offers from other sellers from <strong>
              <DirhamSymbol />649
            </strong>
          </p>
          <ChevronRight size={20} />
        </div>
      </section>

      <section className="sponsored-brand-card" aria-label="Sponsored brand">
        <div className="sponsored-brand-header">
          <div className="sponsored-brand-logo">TECV</div>
          <div className="sponsored-brand-meta">
            <p className="sponsored-brand-tagline">Top quality products</p>
            <div className="sponsored-brand-cta">
              <a href="#">Shop TECV</a>
              <ChevronRight size={14} />
            </div>
          </div>
          <span className="sponsored-brand-ad">Ad</span>
        </div>
        <div className="sponsored-brand-products">
          <article className="sponsored-product">
            <div className="sponsored-product-image">
              <img src="/figma-assets/combo-airpods.png" alt="" />
            </div>
            <div className="sponsored-product-info">
              <p className="sponsored-product-name">Charging Brick For Apple Devices 25W Charger</p>
              <strong className="sponsored-product-price"><DirhamSymbol />89</strong>
              <span className="sponsored-eta">
                <b>express</b>
              </span>
            </div>
          </article>
          <article className="sponsored-product">
            <div className="sponsored-product-image">
              <img src="/figma-assets/product.png" alt="" />
            </div>
            <div className="sponsored-product-info">
              <p className="sponsored-product-name">Charging Brick For Samsung Devices 25W arger</p>
              <strong className="sponsored-product-price"><DirhamSymbol />69</strong>
              <span className="sponsored-eta">
                <b>express</b>
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="ratings-reviews-card" aria-label="Ratings and reviews">
        <h2>Ratings &amp; Reviews</h2>
        <div className="ratings-overview">
          <div className="ratings-score-row">
            <span className="ratings-score">4.8</span>
            <span className="ratings-stars">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} className="ratings-star-empty" />
            </span>
          </div>
          <p className="ratings-source">
            Avg. rating based on 64 reviews from trusted sources
            <Info size={12} />
          </p>
        </div>

        <button type="button" className="ai-summary-card">
          <header className="ai-summary-header">
            <span className="ai-summary-title">64 reviews,</span>
            <span className="ai-summary-by">summarised by <strong>noon AI</strong></span>
            <Sparkles size={13} />
          </header>
          <ul className="ai-summary-list">
            <li><span className="ai-summary-bullet ai-summary-bullet-tall" aria-hidden="true" /><span>The portrait mode includes a fantastic wide-angle</span></li>
            <li><span className="ai-summary-bullet" aria-hidden="true" /><span>Users appreciate the overall performance of phone.</span></li>
            <li><span className="ai-summary-bullet" aria-hidden="true" /><span>Enjoy the wide-angle capability while using portrait a fantastic wide-angle</span></li>
            <li><span className="ai-summary-bullet" aria-hidden="true" /><span>Users appreciate the overall performance of this phone.</span></li>
          </ul>
        </button>

        <div className="photo-reviews">
          <h3>Photo Reviews (64)</h3>
          <div className="photo-reviews-row">
            <div className="photo-review-thumb"><img src="/figma-assets/product.png" alt="" /></div>
            <div className="photo-review-thumb"><img src="/figma-assets/combo-airpods.png" alt="" /></div>
            <div className="photo-review-thumb"><img src="/figma-assets/product.png" alt="" /></div>
            <div className="photo-review-thumb"><img src="/figma-assets/combo-airpods.png" alt="" /></div>
          </div>
        </div>

        <div className="top-reviews">
          <h3>Top Reviews (64)</h3>
          <article className="review-card">
            <header className="review-header">
              <div className="review-name-block">
                <strong className="review-author">John Anderson</strong>
                <div className="review-rating-row">
                  <span className="review-stars">
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} className="ratings-star-empty" />
                  </span>
                  <span className="review-meta"><span className="review-dot">•</span> 8 days ago</span>
                </div>
              </div>
              <span className="review-verified">
                <CheckCircle2 size={11} />
                Verified Buy
              </span>
            </header>
            <div className="review-tags">
              <span className="review-tag">Mac OS</span>
              <span className="review-tag">8 GB RAM</span>
              <span className="review-tag">Internal Version</span>
              <span className="review-tag">256 GB</span>
              <span className="review-tag">Dual core memory</span>
              <span className="review-tag review-tag-link">
                View product
                <ChevronRight size={10} />
              </span>
            </div>
            <div className="review-body">
              <strong className="review-title">This is simply amazing!</strong>
              <p className="review-text">
                If the camera had the wide angle feature in the portrait mode. If the camera has more fe..
                <a href="#" className="review-more">More</a>
              </p>
              <a href="#" className="review-translate">Translate to <span>عربي</span></a>
              <div className="review-photos">
                <div className="review-photo"><img src="/figma-assets/product.png" alt="" /></div>
                <div className="review-photo"><img src="/figma-assets/combo-airpods.png" alt="" /></div>
              </div>
            </div>
            <footer className="review-footer">
              <button type="button" className="helpful-btn helpful-btn-selected">
                <ThumbsUp size={11} fill="currentColor" />
                Helpful (15)
              </button>
            </footer>
          </article>

          <article className="review-card">
            <header className="review-header">
              <div className="review-name-block">
                <strong className="review-author">John Anderson</strong>
                <div className="review-rating-row">
                  <span className="review-stars">
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                  </span>
                  <span className="review-meta"><span className="review-dot">•</span> from trusted source <span className="review-dot">•</span> 6 months ago</span>
                </div>
              </div>
            </header>
            <div className="review-tags">
              <span className="review-tag">Mac OS</span>
              <span className="review-tag">8 GB RAM</span>
              <span className="review-tag">Internal Version</span>
              <span className="review-tag">256 GB</span>
              <span className="review-tag">Dual core memory</span>
              <span className="review-tag review-tag-link">
                View product
                <ChevronRight size={10} />
              </span>
            </div>
            <div className="review-body">
              <strong className="review-title">This is simply amazing!</strong>
              <p className="review-text">
                If the camera had the wide angle feature in the portrait mode. If the camera has more fewer features than than the last one it will be worse better than others.
                <a href="#" className="review-more">Less</a>
              </p>
              <a href="#" className="review-translate">Translate to <span>عربي</span></a>
            </div>
            <footer className="review-footer">
              <button type="button" className="helpful-btn">
                <ThumbsUp size={11} />
                Helpful (14)
              </button>
            </footer>
          </article>

          <a href="#" className="all-reviews-link">
            All customer reviews
            <ChevronRight size={12} />
          </a>
        </div>
      </section>

      <section className="similar-products-card" aria-label="Similar products">
        <h2>Similar Products</h2>
        <div className="similar-products-row">
          {[1, 2, 3].map((i) => (
            <article className="similar-product" key={i}>
              <div className="similar-image">
                {i === 1 && <span className="similar-tag">Best Seller</span>}
                <button type="button" className="similar-wishlist" aria-label="Add to wishlist"><Heart size={14} /></button>
                <img src="/figma-assets/combo-airpods.png" alt="" />
                <span className="similar-ad">Ad</span>
                <button type="button" className="similar-add" aria-label="Add to cart"><Plus size={18} /></button>
              </div>
              <div className="similar-info">
                <p className="similar-name">Apple Airpods Pro 2 Wireless Earbuds</p>
                <span className="similar-rating">
                  <Star size={11} fill="currentColor" />
                  <strong>4.3</strong>
                  <span>(128)</span>
                </span>
                <div className="similar-pricing">
                  <strong className="similar-price"><DirhamSymbol />899</strong>
                  <del>1399</del>
                  <span className="similar-discount">33%</span>
                </div>
                <span className="similar-nudge">
                  <ArrowDownCircle size={12} fill="#d92d20" color="#ffffff" />
                  Lowest price in 30 days
                </span>
                <span className="similar-eta">
                  <b>express</b>
                  Today
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="warranty-section" aria-label="Extended warranty">
        <div className="warranty-header">
          <h2>Extended warranty</h2>
          <span className="warranty-by">by <strong>PROTECT 4 LESS</strong></span>
        </div>
        <div className="warranty-options">
          <article className="warranty-option">
            <span className="warranty-period">1 YEAR</span>
            <div className="warranty-card-inner">
              <div className="warranty-name-row">
                <div className="warranty-creative warranty-creative-shield">
                  <ShieldCheck size={20} />
                </div>
                <div className="warranty-name">
                  <p>Accidental Damage</p>
                  <p className="warranty-name-row-2">
                    <span>Protection</span>
                    <ChevronRight size={14} />
                  </p>
                </div>
              </div>
              <ul className="warranty-usps">
                <li><Calendar size={14} /><span>Active from date of purchase</span></li>
                <li><Droplet size={14} /><span>Covers liquid damages</span></li>
                <li><Truck size={14} /><span>Free pickup &amp; delivery</span></li>
              </ul>
              <div className="warranty-footer">
                <span className="warranty-price"><DirhamSymbol />449</span>
                <button className="select-warranty" type="button">Select</button>
              </div>
            </div>
          </article>
          <article className="warranty-option">
            <span className="warranty-period">1 YEAR ACCIDENTAL + 1 YEAR EXTENDED</span>
            <div className="warranty-card-inner">
              <div className="warranty-name-row">
                <div className="warranty-creative warranty-creative-extended">
                  <ShieldCheck size={20} />
                </div>
                <div className="warranty-name">
                  <p>Accidental Damage &amp;</p>
                  <p className="warranty-name-row-2">
                    <span>Extended Warranty</span>
                    <ChevronRight size={14} />
                  </p>
                </div>
              </div>
              <ul className="warranty-usps">
                <li><Calendar size={14} /><span>Active from date of purchase</span></li>
                <li><AlertTriangle size={14} /><span>Covers all accidental damages</span></li>
                <li><Truck size={14} /><span>Free pickup &amp; delivery</span></li>
              </ul>
              <div className="warranty-footer">
                <span className="warranty-price"><DirhamSymbol />649</span>
                <button className="select-warranty" type="button">Select</button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

function ChoiceGroup({ title, action, options }) {
  return (
    <div className="choice-group">
      <div className="choice-heading">
        <h2>{title}</h2>
        <a href="#">
          {action === 'Learn more' && <Info size={13} />}
          {action}
          {action !== 'Learn more' && <ChevronRight size={14} />}
        </a>
      </div>
      <div className="choice-options">
        {options.map((option, index) => (
          <button className={index === 0 ? 'is-selected' : ''} key={option} type="button">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
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

function TopNav() {
  return (
    <header className="top-nav" aria-label="Product header">
      <button type="button" className="top-nav-btn" aria-label="Back">
        <ChevronLeft size={20} />
      </button>
      <div className="top-nav-actions">
        <button type="button" className="top-nav-btn" aria-label="Search">
          <Search size={18} />
        </button>
        <button type="button" className="top-nav-btn" aria-label="Wishlist">
          <Heart size={20} />
        </button>
        <button type="button" className="top-nav-btn" aria-label="Share">
          <Upload size={18} />
        </button>
      </div>
    </header>
  );
}

function BottomNav({ qty, onQtyChange }) {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-actions">
        <div className="qty-input">
          <span className="qty-label">QTY</span>
          <span className="qty-value">{qty}</span>
        </div>
        <button className="buy-button">Buy now</button>
        <button className="add-to-cart-button" onClick={() => onQtyChange(qty + 1)}>
          <Plus size={20} />
          Add to cart
        </button>
      </div>
      <div className="home-bar" aria-hidden="true" />
    </div>
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
