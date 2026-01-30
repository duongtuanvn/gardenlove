# Green Haven - React to WordPress Conversion

## 📖 Complete Documentation Index

This document provides a comprehensive overview of the project's architecture and conversion strategy from React/Tailwind to WordPress/WooCommerce.

---

## 📚 Documentation Files

| Document | Purpose |
|----------|---------|
| [SKILL.md](./SKILL.md) | Conversion methodology & technical skills |
| [THEME_ARCHITECTURE.md](./THEME_ARCHITECTURE.md) | Complete WordPress theme structure |
| [WORDPRESS_CONVERSION_GUIDE.md](./WORDPRESS_CONVERSION_GUIDE.md) | Detailed conversion reference |
| [HEADLESS_WOOCOMMERCE_SETUP.md](./HEADLESS_WOOCOMMERCE_SETUP.md) | GraphQL headless architecture |

---

## 🏗️ Project Overview

### Source: React Application

```
src/
├── components/
│   ├── home/           # Homepage sections
│   ├── layout/         # Header, Footer
│   └── ui/             # shadcn/ui components
├── pages/              # Route pages
├── hooks/              # Custom React hooks
├── context/            # State management
└── lib/                # Utilities & GraphQL
```

### Target: WordPress Theme

```
wordpress-theme/greenhaven/
├── Template Files      # PHP page templates
├── template-parts/     # Reusable sections
├── woocommerce/        # WooCommerce overrides
├── inc/                # PHP includes
└── assets/             # CSS, JS, images
```

---

## 🔄 Page → Template Mapping

### Core Pages

| React Page | WordPress Template | Status |
|------------|-------------------|--------|
| `Index.tsx` | `front-page.php` | ✅ Created |
| `NotFound.tsx` | `404.php` | ✅ Created |
| `Search.tsx` | `search.php` | ✅ Created |

### Static Pages

| React Page | WordPress Template | Status |
|------------|-------------------|--------|
| `AboutUs.tsx` | `page-about.php` | 🔲 Pending |
| `Contact.tsx` | `page-contact.php` | 🔲 Pending |
| `FAQ.tsx` | `page-faq.php` | 🔲 Pending |
| `Accessibility.tsx` | `page-accessibility.php` | 🔲 Pending |
| `PrivacyPolicy.tsx` | `page-privacy-policy.php` | 🔲 Pending |
| `TermsOfService.tsx` | `page-terms-of-service.php` | 🔲 Pending |
| `ReturnsRefunds.tsx` | `page-returns-refunds.php` | 🔲 Pending |
| `ShippingInfo.tsx` | `page-shipping-info.php` | 🔲 Pending |
| `LiveArrivalGuarantee.tsx` | `page-live-arrival-guarantee.php` | 🔲 Pending |

### WooCommerce Templates

| React Page | WordPress Template | Status |
|------------|-------------------|--------|
| `Collections.tsx` | `woocommerce/archive-product.php` | 🔲 Pending |
| `ProductDetail.tsx` | `woocommerce/single-product.php` | 🔲 Pending |
| `Cart.tsx` | `woocommerce/cart/cart.php` | 🔲 Pending |

### Custom Post Types

| React Page | WordPress Template | CPT |
|------------|-------------------|-----|
| `LearningCenter.tsx` | `archive-guide.php` | `guide` |
| `GuideDetail.tsx` | `single-guide.php` | `guide` |
| `PlantCare.tsx` | `archive-plant-care.php` | `plant-care` |
| `PlantCareDetail.tsx` | `single-plant-care.php` | `plant-care` |

---

## 🧩 Component → Template Part Mapping

| React Component | Template Part | Location |
|-----------------|---------------|----------|
| `HeroSection.tsx` | `section-hero.php` | ✅ Created |
| `CategoriesSection.tsx` | `section-categories.php` | ✅ Created |
| `FeaturedProducts.tsx` | `section-products.php` | ✅ Created |
| `HowWeShipSection.tsx` | `section-shipping.php` | ✅ Created |
| `HomeFAQSection.tsx` | `section-faq.php` | ✅ Created |
| `TrustSection.tsx` | `section-trust.php` | 🔲 Pending |
| `Header.tsx` | `header.php` | ✅ Created |
| `Footer.tsx` | `footer.php` | ✅ Created |

---

## 🎨 Design System

### CSS Variable Mapping

| React (Tailwind) | WordPress (CSS) |
|------------------|-----------------|
| `--primary` | `--gh-primary` |
| `--secondary` | `--gh-secondary` |
| `--accent` | `--gh-accent` |
| `--muted` | `--gh-muted` |
| `--background` | `--gh-background` |
| `--foreground` | `--gh-foreground` |
| `--border` | `--gh-border` |

### CSS Class Prefix

All WordPress theme classes use `gh-` prefix:

```css
.gh-container    /* Container width */
.gh-section      /* Section padding */
.gh-btn          /* Button base */
.gh-btn-primary  /* Primary button */
.gh-btn-hero     /* Hero CTA button */
.gh-card         /* Card component */
.gh-grid         /* Grid layout */
```

---

## 🔌 Dual Architecture Support

### Option 1: Traditional WordPress Theme

- Full PHP rendering
- WooCommerce templates
- WordPress Customizer
- No external dependencies

### Option 2: Headless with React Frontend

- React frontend (this codebase)
- WordPress + WooCommerce backend
- WPGraphQL + WooGraphQL
- Session-based cart

### Shared Backend

Both options use the same WordPress/WooCommerce installation. The theme works standalone or as an API backend.

---

## 📦 Required WordPress Plugins

| Plugin | Purpose | Required |
|--------|---------|----------|
| **WooCommerce** | E-commerce | ✅ Required |
| WPGraphQL | GraphQL API | Headless only |
| WooGraphQL | WC GraphQL | Headless only |
| Yoast SEO | SEO optimization | Recommended |

---

## 🚀 Quick Start

### Installing WordPress Theme

```bash
# 1. Zip the theme folder
cd wordpress-theme
zip -r greenhaven.zip greenhaven/

# 2. Upload to WordPress
# Appearance → Themes → Add New → Upload Theme

# 3. Activate theme

# 4. Install WooCommerce

# 5. Configure theme
# Appearance → Customize → Green Haven Options
```

### Using Headless Mode

```bash
# 1. Install WordPress plugins
# - WPGraphQL
# - WooGraphQL

# 2. Configure CORS in theme
# See: inc/headless.php

# 3. Update React client
# src/lib/graphql/client.ts
# Set WORDPRESS_GRAPHQL_URL

# 4. Run React app
npm run dev
```

---

## 📋 Conversion Progress

### Phase 1: Core Structure ✅
- [x] Theme setup (functions.php)
- [x] Header/Footer templates
- [x] Homepage (front-page.php)
- [x] Basic styling (style.css)

### Phase 2: Homepage Sections ✅
- [x] Hero section
- [x] Categories section
- [x] Products section
- [x] Shipping section
- [x] FAQ section

### Phase 3: WooCommerce 🔲
- [ ] Product archive
- [ ] Single product
- [ ] Cart
- [ ] Checkout

### Phase 4: Static Pages 🔲
- [ ] About Us
- [ ] Contact
- [ ] FAQ
- [ ] Policy pages

### Phase 5: Custom Post Types 🔲
- [ ] Plant Care CPT
- [ ] Guides CPT
- [ ] Archive/Single templates

### Phase 6: Polish 🔲
- [ ] SEO markup
- [ ] Schema.org
- [ ] Performance optimization
- [ ] Accessibility audit

---

## 🔗 Related Resources

- [WordPress Theme Handbook](https://developer.wordpress.org/themes/)
- [WooCommerce Template Structure](https://woocommerce.com/document/template-structure/)
- [WPGraphQL Documentation](https://www.wpgraphql.com/docs)
- [WooGraphQL Documentation](https://woographql.com/docs)
