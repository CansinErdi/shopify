# Shopify Theme - File Tree

Complete file structure for the Minimal Atelier Shopify Online Store 2.0 theme.

```
shopify-theme/
│
├── .shopifyignore                      # Files to exclude from theme upload
├── README.md                           # Setup and documentation
├── UX_VERIFICATION_CHECKLIST.md       # Checklist to verify UX parity
│
├── assets/                             # CSS, JavaScript, and other assets
│   ├── base.css                       # Base styles: reset, variables, utilities
│   ├── theme.css                      # Component styles: header, footer, products, etc.
│   └── global.js                      # JavaScript: cart, accordions, forms
│
├── config/                             # Theme configuration
│   ├── settings_schema.json           # Theme settings definition (customizer options)
│   └── settings_data.json             # Default theme settings values
│
├── layout/                             # Layout templates
│   └── theme.liquid                   # Main layout (head, body, header, footer)
│
├── locales/                            # Translation/locale files
│   └── en.default.json                # English language strings
│
├── sections/                           # Reusable theme sections (Online Store 2.0)
│   ├── header.liquid                  # Header: logo, nav, locale, cart
│   ├── footer.liquid                  # Footer: links, newsletter
│   ├── collection-intro.liquid        # Collection title and description
│   ├── collection-categories.liquid   # Horizontal category/collection links
│   ├── collection-product-grid.liquid # Product grid with pagination
│   ├── product-main.liquid            # Product info: media, title, price, variants, add-to-cart
│   └── product-info-accordions.liquid # Expandable info sections (About, Shipping, etc.)
│
├── snippets/                           # Reusable code snippets
│   ├── meta-tags.liquid               # SEO and social meta tags
│   ├── product-card.liquid            # Product card with smart pricing logic
│   ├── product-price.liquid           # Product price display with sale logic
│   ├── icon-cart.liquid               # Shopping cart icon SVG
│   ├── icon-close.liquid              # Close icon SVG
│   ├── icon-minus.liquid              # Minus icon SVG (accordion)
│   └── icon-plus.liquid               # Plus icon SVG (accordion)
│
└── templates/                          # Page templates (JSON for OS 2.0)
    ├── index.json                     # Homepage template
    ├── collection.json                # Collection page template (shop page)
    ├── product.json                   # Product page template
    ├── page.liquid                    # Generic page template
    └── cart.liquid                    # Cart page template
```

## File Descriptions

### Root Files
- **`.shopifyignore`**: Excludes unnecessary files from theme upload (node_modules, logs, etc.)
- **`README.md`**: Complete setup instructions and documentation
- **`UX_VERIFICATION_CHECKLIST.md`**: Detailed checklist to verify theme matches reference UX

### Assets (CSS & JS)
- **`base.css`**: Foundation styles including CSS reset, CSS variables, typography, grid utilities, buttons, and form elements
- **`theme.css`**: Component-specific styles for header, footer, collection pages, product pages, accordions, and cart
- **`global.js`**: JavaScript functionality for cart management, accordion interactions, and product forms

### Config (Theme Settings)
- **`settings_schema.json`**: Defines customizable theme settings (colors, typography, accordion content, etc.)
- **`settings_data.json`**: Default values for theme settings

### Layout
- **`theme.liquid`**: Main HTML structure, includes all CSS/JS, renders header/footer sections, contains SEO meta tags

### Locales
- **`en.default.json`**: English translation strings for all theme text (accessible, multilingual-ready)

### Sections (Building Blocks)
- **`header.liquid`**: Sticky header with logo, navigation menu, language selector, and cart icon
- **`footer.liquid`**: Footer with customizable link menu and newsletter signup form
- **`collection-intro.liquid`**: Collection title and description paragraph
- **`collection-categories.liquid`**: Horizontal list of all collections with pipe separators
- **`collection-product-grid.liquid`**: Responsive product grid with pagination
- **`product-main.liquid`**: Product page hero with media, info, variant selector, and add-to-cart
- **`product-info-accordions.liquid`**: Five collapsible info sections (content from theme settings)

### Snippets (Reusable Components)
- **`meta-tags.liquid`**: SEO and Open Graph meta tags for social sharing
- **`product-card.liquid`**: Individual product card with sophisticated pricing logic:
  - "from $X" for products with variant price ranges
  - "Sold out" badge for unavailable products
  - "Sale Price / Original Price / Sale" for discounted items
- **`product-price.liquid`**: Price display with compare-at price logic
- **`icon-*.liquid`**: SVG icons for cart, accordion controls, and mobile menu

### Templates (Page Structure)
- **`index.json`**: Homepage layout (can be customized with sections)
- **`collection.json`**: Collection page with intro, categories, and product grid sections
- **`product.json`**: Product page with main product section and info accordions
- **`page.liquid`**: Generic template for custom pages (About, Contact, etc.)
- **`cart.liquid`**: Cart page with item list, quantity management, and checkout

## Key Features by File

### Smart Pricing (`snippets/product-card.liquid`)
- Detects variant price ranges and shows "from $X"
- Checks product availability and shows "Sold out"
- Compares regular vs. sale price and formats accordingly

### Theme Customization (`config/settings_schema.json`)
- Color scheme (background, text, borders, accent, sale)
- Typography (font families and sizes)
- Layout spacing
- Product info accordion content (5 sections, all editable)

### Responsive Design (`assets/theme.css`)
- Desktop: multi-column grids, full navigation
- Tablet: reduced columns, mobile menu toggle
- Mobile: single column, touch-friendly targets

### Performance Optimization
- Lazy-loaded images with `loading="lazy"`
- Shopify CDN for fonts
- Minimal JavaScript (only essential features)
- Clean, semantic HTML

## Development Tips

1. **Edit styles**: Modify `assets/base.css` for global styles, `assets/theme.css` for components
2. **Add functionality**: Extend `assets/global.js` for new interactive features
3. **Customize sections**: All sections have schema blocks for theme editor customization
4. **Add translations**: Create additional locale files (e.g., `fr.json`) for multilingual support
5. **Test locally**: Use `shopify theme dev` for live preview with hot-reload

## Notes

- All Liquid files use semantic comments for clarity
- CSS follows BEM-like naming convention for maintainability
- JavaScript uses ES6+ syntax with classes
- Theme follows Shopify OS 2.0 architecture (JSON templates + sections + blocks)
- All content is editable through Shopify theme customizer
- No external dependencies or third-party libraries (keeps it lightweight)
