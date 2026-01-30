# Green Haven Nursery - WordPress Theme

A production-ready WordPress theme converted from React/Tailwind CSS for the Green Haven Nursery e-commerce website.

## Features

- ✅ **WooCommerce Ready** - Full e-commerce support
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Schema.org markup, semantic HTML
- ✅ **GMC Compliant** - Google Merchant Center ready
- ✅ **Customizer Options** - Easy theme customization
- ✅ **Custom Post Types** - Plant Care Guides, FAQs, Testimonials
- ✅ **No Page Builders** - Clean PHP templates

## Installation

1. **Download the theme**
   - Zip the `greenhaven` folder

2. **Upload to WordPress**
   - Go to `Appearance → Themes → Add New → Upload Theme`
   - Select the zip file and click "Install Now"
   - Activate the theme

3. **Install Required Plugins**
   - WooCommerce (for e-commerce)
   - Optional: Yoast SEO, WP Super Cache

4. **Set Up Menus**
   - Go to `Appearance → Menus`
   - Create menus for: Primary Navigation, Footer - Shop, Footer - Help, Footer - Learn

5. **Configure Theme Options**
   - Go to `Appearance → Customize → Green Haven Theme Options`
   - Set up Hero section, Contact info, Social links

## Folder Structure

```
greenhaven/
├── style.css              # Main stylesheet + theme info
├── functions.php          # Theme functions
├── header.php             # Header template
├── footer.php             # Footer template
├── front-page.php         # Homepage
├── index.php              # Fallback template
├── page.php               # Page template
├── single.php             # Single post
├── archive.php            # Archive pages
├── search.php             # Search results
├── 404.php                # 404 page
├── assets/
│   ├── css/               # Additional CSS
│   ├── js/main.js         # JavaScript
│   └── images/            # Theme images
├── template-parts/
│   ├── section-hero.php
│   ├── section-categories.php
│   ├── section-products.php
│   ├── section-shipping.php
│   └── section-faq.php
└── inc/
    ├── theme-setup.php
    ├── enqueue.php
    ├── helpers.php
    ├── customizer.php
    ├── custom-post-types.php
    ├── custom-fields.php
    └── woocommerce.php
```

## Customization

### Colors
Edit CSS variables in `style.css` under `:root` selector.

### Hero Section
Use Customizer or add your own hero image to Media Library.

### Products
Add products via WooCommerce → Products.

## Requirements

- WordPress 6.0+
- PHP 8.0+
- WooCommerce 8.0+ (for e-commerce)

## License

GPL v2 or later
