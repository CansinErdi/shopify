# Minimal Atelier - Shopify Theme

A minimal, sophisticated Shopify Online Store 2.0 theme focused on clean design and UX.

## Features

- ✅ Minimal header with logo, navigation, locale selector, and cart
- ✅ Collection pages with intro text, category filters, and smart pricing
- ✅ Product pages with media gallery, variant selector, and info accordions
- ✅ Footer with links and newsletter signup
- ✅ Fully customizable through Shopify theme editor
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Accessible HTML and semantic markup
- ✅ Fast performance with optimized assets

## Theme Structure

```
shopify-theme/
├── assets/              # CSS, JS, and other assets
│   ├── base.css        # Base styles, reset, utilities
│   ├── theme.css       # Component-specific styles
│   └── global.js       # JavaScript functionality
├── config/             # Theme configuration
│   ├── settings_schema.json  # Theme settings definition
│   └── settings_data.json    # Default settings values
├── layout/             # Layout files
│   └── theme.liquid    # Main layout template
├── locales/            # Translation files
│   └── en.default.json # English translations
├── sections/           # Reusable sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── collection-intro.liquid
│   ├── collection-categories.liquid
│   ├── collection-product-grid.liquid
│   ├── product-main.liquid
│   └── product-info-accordions.liquid
├── snippets/           # Reusable code snippets
│   ├── meta-tags.liquid
│   ├── product-card.liquid
│   ├── product-price.liquid
│   └── icon-*.liquid   # Icon SVGs
├── templates/          # Page templates (JSON)
│   ├── index.json      # Homepage
│   ├── collection.json # Collection pages
│   ├── product.json    # Product pages
│   ├── page.liquid     # Generic pages
│   └── cart.liquid     # Cart page
└── .shopifyignore      # Files to exclude from upload
```

## Prerequisites

1. **Shopify Store**: You need a Shopify development store or partner account
2. **Shopify CLI**: Install the Shopify CLI tool
3. **Node.js**: Version 14+ recommended

## Setup Instructions

### Step 1: Install Shopify CLI

```bash
# macOS (using Homebrew)
brew tap shopify/shopify
brew install shopify-cli

# Verify installation
shopify version
```

### Step 2: Authenticate with Shopify

```bash
shopify auth login
```

This will open your browser to authenticate with your Shopify partner account.

### Step 3: Navigate to Theme Directory

```bash
cd /Users/workspace/shopify-theme
```

### Step 4: Development - Serve Locally

Start a local development server with hot-reload:

```bash
shopify theme dev
```

This will:
- Upload your theme to a development theme on your store
- Provide a preview URL (usually https://[your-store].myshopify.com?preview_theme_id=...)
- Watch for file changes and automatically sync them
- Enable hot-reload for rapid development

**Note**: Keep this terminal running while you develop.

### Step 5: Push to Shopify (Unpublished)

To upload your theme as an unpublished theme:

```bash
shopify theme push --unpublished
```

### Step 6: Publish Theme

To publish the theme (make it live):

```bash
shopify theme publish
```

Or publish from the Shopify admin: Online Store → Themes → Actions → Publish

## Development Workflow

1. **Start dev server**: `shopify theme dev`
2. **Make changes**: Edit files in your local directory
3. **Preview changes**: Changes automatically sync to preview URL
4. **Test thoroughly**: Verify all functionality works
5. **Push when ready**: `shopify theme push`

## Customization

### Theme Settings

Access theme settings via: **Shopify Admin → Online Store → Themes → Customize**

You can customize:
- Colors (background, text, borders, accent, sale)
- Typography (fonts and sizes)
- Layout spacing
- Product info accordion content (About, Shipping, Care, Terms, Custom Projects)
- Header logo and menu
- Footer menu and newsletter settings

### Menu Configuration

1. **Header Menu**: Create a menu called "main-menu" in Navigation
   - Suggested items: Shop, Home, Lookbook, Archived Collections, Press, Contact

2. **Footer Menu**: Create a menu called "footer"
   - Suggested items: About, Shipping & Pick-up, Jewelry Care, Sales Terms & Exchange, FAQ, Contact, Instagram, Stockists

### Collections Setup

1. Create collections for different product categories
2. The "Categories" section on collection pages automatically lists all collections
3. Set collection descriptions for custom intro text

## Theme Features Explained

### Smart Pricing Logic

The product card automatically handles different pricing scenarios:

1. **Multiple variant prices**: Shows "from $X" when variants have different prices
2. **Sold out products**: Displays "Sold out" badge
3. **Sale pricing**: Shows "Sale Price: $X  Original Price: $Y  Sale" when compare-at price exists

### Product Info Accordions

Five collapsible sections on product pages (all editable in theme settings):
- About
- Shipping & Pick-up
- Jewelry Care (or general care instructions)
- Sales Terms & Exchange
- Custom Projects info

### Cart Functionality

- Real-time cart count updates
- Add to cart via AJAX (no page reload)
- Cart page with quantity management

## Testing Checklist

Before launching, verify:

- [ ] Header displays correctly with logo, navigation, locale selector, cart
- [ ] Collection pages show intro text and category links
- [ ] Product grid displays with correct pricing logic
- [ ] Product pages show media, variants, and accordions
- [ ] Add to cart functionality works
- [ ] Cart count updates correctly
- [ ] Newsletter signup works
- [ ] All links in footer work
- [ ] Theme is responsive on mobile/tablet/desktop
- [ ] All content is editable via theme customizer
- [ ] No JavaScript errors in console
- [ ] No Liquid syntax errors

## Troubleshooting

### Theme Check

Run Shopify's official linter:

```bash
shopify theme check
```

This validates:
- Liquid syntax
- Theme structure
- Performance issues
- Best practices

### Common Issues

**Issue**: Cart count doesn't update
- **Fix**: Check browser console for JavaScript errors
- **Fix**: Ensure global.js is loaded correctly

**Issue**: Styles not loading
- **Fix**: Clear browser cache
- **Fix**: Check that CSS files are in assets/ folder

**Issue**: Changes not syncing
- **Fix**: Restart `shopify theme dev`
- **Fix**: Check .shopifyignore isn't blocking files

## Performance Tips

1. **Images**: Use Shopify's image_url filter with appropriate widths
2. **Lazy loading**: Images use loading="lazy" attribute
3. **Fonts**: Theme uses Shopify's font CDN for optimal delivery
4. **Minimal JS**: Only essential JavaScript is included

## Support & Documentation

- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Reference](https://shopify.dev/api/liquid)
- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- [Online Store 2.0](https://shopify.dev/themes/architecture)

## License

Custom theme - All rights reserved
