# UX Verification Checklist

Use this checklist to verify that your theme matches the reference site's layout and UX.

## ✅ Header Verification

- [ ] Logo appears on the left side
- [ ] Navigation menu displays all items (Shop, Home, Lookbook, Archived Collections, Press, Contact)
- [ ] Navigation items are lowercase
- [ ] Locale/language selector is present and functional
- [ ] Cart icon shows item count
- [ ] Cart count updates when adding items
- [ ] Header is sticky on scroll
- [ ] Mobile menu works on smaller screens

## ✅ Collection/Shop Page Verification

### Intro Section
- [ ] Collection title displays in lowercase
- [ ] Intro paragraph appears under the title
- [ ] Text is centered and well-formatted

### Categories Section
- [ ] "Categories:" label is visible
- [ ] All collections are listed horizontally
- [ ] Collections are separated by pipe (|) characters
- [ ] Collections are lowercase
- [ ] Category links navigate to correct collections

### Product Grid
- [ ] Products display in a grid layout (3-4 columns on desktop)
- [ ] Product images are visible and properly sized
- [ ] Product titles are displayed
- [ ] Pricing logic is correct:
  - [ ] "from $X" shows for products with multiple variant prices
  - [ ] "Sold out" badge appears for unavailable products
  - [ ] Sale items show: "Sale Price: $X  Original Price: $Y  Sale"
- [ ] Grid is responsive (2 columns on tablet, 1 on mobile)
- [ ] Hover effects work on product cards

## ✅ Product Page Verification

### Layout
- [ ] Two-column layout (media left, info right) on desktop
- [ ] Single column on mobile/tablet
- [ ] Clean, minimal aesthetic

### Media
- [ ] Product images display large and clear
- [ ] Multiple images show in sequence
- [ ] Video media plays if present
- [ ] Images are high quality

### Product Info
- [ ] Product title displays prominently
- [ ] Price shows correct format
- [ ] Sale price shows red with strikethrough original price
- [ ] Variant selector appears for multi-variant products
- [ ] Variant dropdown lists all options
- [ ] Sold-out variants are disabled in dropdown
- [ ] Quantity selector works (increment/decrement)
- [ ] "Add to Cart" button is prominent
- [ ] Button shows "Sold out" when unavailable
- [ ] Button changes to "Adding..." during cart submission
- [ ] Success message appears after adding to cart

### Info Accordions
- [ ] All five accordions are present:
  - [ ] About
  - [ ] Shipping & Pick-up
  - [ ] Jewelry Care (or general care)
  - [ ] Sales Terms & Exchange
  - [ ] Custom Projects info
- [ ] Accordions expand/collapse on click
- [ ] Only one accordion open at a time
- [ ] Content is editable from theme settings
- [ ] Smooth animation on open/close

## ✅ Footer Verification

- [ ] All links are present and functional:
  - [ ] About
  - [ ] Shipping & Pick-up
  - [ ] Jewelry Care
  - [ ] Sales Terms & Exchange
  - [ ] FAQ
  - [ ] Contact
  - [ ] Instagram
  - [ ] Stockists
- [ ] Links are displayed in a clean list format
- [ ] Newsletter signup section is present
- [ ] Newsletter form has email input field
- [ ] Newsletter submit button works
- [ ] Copyright notice displays

## ✅ Cart Functionality

- [ ] Cart count badge appears on cart icon
- [ ] Count updates when adding products
- [ ] Cart page displays all items
- [ ] Item images show on cart page
- [ ] Quantity can be updated on cart page
- [ ] Remove button works
- [ ] Subtotal calculates correctly
- [ ] Checkout button is prominent

## ✅ Responsive Design

### Desktop (>990px)
- [ ] Full header with all nav items
- [ ] Product grid: 3-4 columns
- [ ] Product page: 2-column layout
- [ ] Footer: multi-column layout

### Tablet (750px - 989px)
- [ ] Mobile menu toggle appears
- [ ] Product grid: 2 columns
- [ ] Product page: single column
- [ ] All functionality works

### Mobile (<749px)
- [ ] Mobile menu works properly
- [ ] Product grid: 1 column
- [ ] Touch targets are adequate size
- [ ] Text is readable without zooming
- [ ] Images scale properly

## ✅ Theme Customizer

- [ ] All sections appear in theme editor
- [ ] Colors can be changed
- [ ] Fonts can be changed
- [ ] Logo can be uploaded
- [ ] Menus can be selected
- [ ] Accordion content can be edited
- [ ] Newsletter settings work
- [ ] All changes preview correctly
- [ ] Changes save successfully

## ✅ Performance & Quality

- [ ] Page loads quickly (<3 seconds)
- [ ] Images load progressively
- [ ] No console errors in browser
- [ ] No Liquid errors on any page
- [ ] Theme passes `shopify theme check`
- [ ] All images have alt text
- [ ] Semantic HTML is used
- [ ] Skip to content link works
- [ ] Color contrast is accessible

## ✅ Browser Compatibility

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Safari iOS (mobile)
- [ ] Chrome Android (mobile)

## Final Sign-Off

- [ ] All checklist items above are complete
- [ ] Theme matches reference site layout and UX
- [ ] All custom content is in place
- [ ] Theme is ready for launch

**Verified by**: ________________  
**Date**: ________________
