# React-to-WordPress Conversion Skill Guide

> Elite WordPress & WooCommerce Theme Architecture for React/Tailwind Projects

## 🎯 Role Definition

This project employs specialized skills in:

- **React + TypeScript + TailwindCSS → WordPress PHP Theme** conversion
- **WooCommerce** theme architecture & template customization
- **WordPress Classic + Block Hybrid** theme development
- **Tailwind → Semantic CSS** mapping strategies
- **Component-to-Template** automation patterns
- **SEO & Google Merchant Center** compliance
- **Headless WordPress** architecture (WPGraphQL + WooGraphQL)

---

## 🏗️ Global Objectives

| Objective | Description |
|-----------|-------------|
| **UI Parity** | Preserve UI/UX exactly as original React site (pixel-level) |
| **Component Mapping** | Convert React components into WordPress template parts |
| **Modular Architecture** | Build scalable theme with WooCommerce compatibility |
| **Standards Compliance** | Ensure SEO, performance, security, maintainability |
| **Production Ready** | Generate complete installable WordPress theme |

---

## 🧩 Phase 1: Project Analysis

### 1.1 React Project Structure Scan

```
/src
├── /components      # UI components → template-parts
├── /pages           # Page components → page templates
├── /layouts         # Layout wrappers → header/footer
├── /hooks           # React hooks → PHP helpers
├── /contexts        # State management → PHP + JS
├── /utils           # Utilities → inc/helpers.php
├── /styles          # CSS → style.css
├── tailwind.config  # Design tokens → CSS variables
└── package.json     # Dependencies analysis
```

### 1.2 Dependency Graph Extraction

- Component hierarchy mapping
- Shared UI component identification
- Layout wrapper patterns
- State management logic
- Routing structure analysis

### 1.3 Design Token Extraction

From `tailwind.config.ts`:
- Color palette (HSL values)
- Typography scale
- Spacing system
- Breakpoints
- Custom animations

---

## 🧱 Phase 2: WordPress Theme Architecture

### 2.1 Theme Type: Hybrid

| Feature | Implementation |
|---------|----------------|
| Templates | Classic PHP |
| Blocks | Gutenberg-ready |
| E-commerce | WooCommerce-compatible |
| Styling | Tailwind-based CSS |

### 2.2 React → WordPress Concept Mapping

| React Concept | WordPress Equivalent |
|---------------|---------------------|
| Component | Template Part |
| Page | Page Template / front-page.php |
| Layout | header.php / footer.php |
| Router | WordPress Rewrite / Template Hierarchy |
| State | PHP + Alpine.js / Vanilla JS |
| Props | WP Query / Custom Fields |
| API calls | WP REST API / GraphQL |
| Context | Global $wp_query / Options |

---

## 🔥 Phase 3: Component Conversion Rules

### 3.1 Conversion Process

For each React component:

1. **Identify UI Role** → section, widget, layout, atomic
2. **Convert JSX → PHP + HTML** → maintain structure
3. **Extract Dynamic Data** → WordPress functions
4. **Map Tailwind Classes** → semantic CSS or Tailwind in WP
5. **Create Template Part** → appropriate directory

### 3.2 Example Conversion

**React Component:**
```tsx
// src/components/home/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="container-custom">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </section>
  );
}
```

**WordPress Template Part:**
```php
<?php // template-parts/section-hero.php ?>
<section class="gh-hero gh-relative gh-min-h-85vh gh-flex gh-items-center">
  <div class="gh-container">
    <h1 class="gh-text-4xl gh-font-bold">
      <?php echo esc_html(get_theme_mod('hero_title')); ?>
    </h1>
  </div>
</section>
```

---

## 🛒 Phase 4: WooCommerce Integration

### 4.1 Template Override Strategy

Override WooCommerce templates in `/woocommerce/`:

```
/woocommerce
├── archive-product.php      # Product grid
├── single-product.php       # Product detail
├── content-product.php      # Product card loop
├── /cart
│   ├── cart.php
│   └── mini-cart.php
├── /checkout
│   ├── form-checkout.php
│   └── thankyou.php
└── /loop
    └── pagination.php
```

### 4.2 UI Parity Checklist

- [ ] Same spacing, typography, colors
- [ ] Same card layout structure
- [ ] Same button styles and behavior
- [ ] Same responsive breakpoints
- [ ] Same hover/focus states
- [ ] Same animation timing

---

## 🎛️ Phase 5: Theme Options

### 5.1 Customizer Sections

| Section | Options |
|---------|---------|
| Site Identity | Logo, Favicon, Site Title |
| Colors | Primary, Secondary, Accent, Background |
| Typography | Font families, sizes, weights |
| Header | Layout, sticky, announcement bar |
| Footer | Columns, widgets, copyright |
| WooCommerce | Products per page, grid columns |
| Hero Section | Image, title, subtitle, CTAs |

### 5.2 Custom Fields (ACF-like)

```php
// Meta boxes for custom content
- Product: Additional info, care instructions
- Guide: Difficulty level, time required
- Plant Care: Season, water needs
```

---

## 🔎 Phase 6: SEO & GMC Compliance

### 6.1 SEO Requirements

| Requirement | Implementation |
|-------------|----------------|
| Semantic HTML5 | `<header>`, `<main>`, `<section>`, `<article>` |
| Schema.org | JSON-LD structured data |
| Open Graph | Meta tags for social sharing |
| Clean URLs | Pretty permalinks |
| Heading Hierarchy | Single H1, logical H2-H6 |
| Image Optimization | Lazy loading, alt attributes |

### 6.2 Google Merchant Center Fields

```php
// Required product data
$gmc_fields = [
  'title',
  'description', 
  'price',
  'availability',
  'brand',
  'gtin',
  'mpn',
  'product_type',
  'google_product_category',
  'image_link',
  'shipping',
  'condition'
];
```

---

## 🔌 Phase 7: Headless Architecture

### 7.1 GraphQL Setup

**Required Plugins:**
- WPGraphQL
- WooGraphQL
- WPGraphQL JWT Authentication

**Endpoints:**
```
/graphql              # Main GraphQL endpoint
/wp-json/wc/v3/       # REST API fallback
```

### 7.2 CORS Configuration

```php
// Allow React frontend origin
add_filter('graphql_response_headers', function($headers) {
    $headers['Access-Control-Allow-Origin'] = 'https://your-react-app.com';
    $headers['Access-Control-Allow-Credentials'] = 'true';
    return $headers;
});
```

---

## 📦 Phase 8: Output Requirements

### 8.1 Deliverables

1. **Full WordPress theme source code**
2. **File tree structure documentation**
3. **Code for each template file**
4. **Mapping documentation** (React → WordPress)
5. **Installation instructions**
6. **Zip-ready theme package**

### 8.2 Quality Criteria

- [ ] Theme passes WordPress Theme Check
- [ ] WooCommerce compatibility verified
- [ ] Responsive design tested
- [ ] SEO audit passed
- [ ] Performance benchmarks met
- [ ] Accessibility standards (WCAG 2.1)

---

## 🚀 Quick Reference: Page Mapping

| React Page | WordPress Template | Type |
|------------|-------------------|------|
| Index.tsx | front-page.php | Homepage |
| NotFound.tsx | 404.php | Error |
| Search.tsx | search.php | Search |
| AboutUs.tsx | page-about.php | Static Page |
| Contact.tsx | page-contact.php | Static Page |
| FAQ.tsx | page-faq.php | Static Page |
| Collections.tsx | woocommerce/archive-product.php | WooCommerce |
| ProductDetail.tsx | woocommerce/single-product.php | WooCommerce |
| Cart.tsx | woocommerce/cart/cart.php | WooCommerce |
| LearningCenter.tsx | archive-guide.php | CPT Archive |
| GuideDetail.tsx | single-guide.php | CPT Single |
| PlantCare.tsx | archive-plant-care.php | CPT Archive |
| PlantCareDetail.tsx | single-plant-care.php | CPT Single |

---

## 📚 Related Documentation

- [WordPress Conversion Guide](./WORDPRESS_CONVERSION_GUIDE.md)
- [Headless WooCommerce Setup](./HEADLESS_WOOCOMMERCE_SETUP.md)
- [Theme Architecture](./THEME_ARCHITECTURE.md)
