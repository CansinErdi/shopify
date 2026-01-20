// Global JavaScript for theme functionality

class CartManager {
    constructor() {
        this.init();
    }

    init() {
        this.updateCartCount();
        this.bindEvents();
    }

    bindEvents() {
        // Update cart count on any cart change
        document.addEventListener('cart:updated', () => {
            this.updateCartCount();
        });
    }

    async updateCartCount() {
        try {
            const response = await fetch('/cart.js');
            const cart = await response.json();
            const countElements = document.querySelectorAll('.cart-count');

            countElements.forEach(element => {
                element.textContent = cart.item_count;
                element.style.display = cart.item_count > 0 ? 'block' : 'none';
            });
        } catch (error) {
            console.error('Error updating cart count:', error);
        }
    }

    async addItem(variantId, quantity = 1) {
        try {
            const response = await fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: variantId,
                    quantity: quantity
                })
            });

            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }

            const item = await response.json();
            document.dispatchEvent(new CustomEvent('cart:updated'));
            return item;
        } catch (error) {
            console.error('Error adding to cart:', error);
            throw error;
        }
    }
}

// Accordion functionality
class Accordion {
    constructor(element) {
        this.accordion = element;
        this.items = this.accordion.querySelectorAll('.accordion__item');
        this.init();
    }

    init() {
        this.items.forEach(item => {
            const header = item.querySelector('.accordion__header');
            header.addEventListener('click', () => this.toggle(item));
        });
    }

    toggle(item) {
        const isActive = item.classList.contains('active');

        // Close all items
        this.items.forEach(i => i.classList.remove('active'));

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    }
}

// Product form handler
class ProductForm {
    constructor(form) {
        this.form = form;
        this.submitButton = this.form.querySelector('[type="submit"]');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    async handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(this.form);
        const variantId = formData.get('id');
        const quantity = parseInt(formData.get('quantity')) || 1;

        if (!variantId) {
            alert('Please select a variant');
            return;
        }

        this.setLoading(true);

        try {
            await window.cartManager.addItem(variantId, quantity);
            this.showSuccess();
        } catch (error) {
            alert('Failed to add item to cart. Please try again.');
        } finally {
            this.setLoading(false);
        }
    }

    setLoading(loading) {
        this.submitButton.disabled = loading;
        this.submitButton.textContent = loading ? 'Adding...' : 'Add to Cart';
    }

    showSuccess() {
        const originalText = this.submitButton.textContent;
        this.submitButton.textContent = 'Added to Cart!';

        setTimeout(() => {
            this.submitButton.textContent = originalText;
        }, 2000);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart manager
    window.cartManager = new CartManager();

    // Initialize accordions
    document.querySelectorAll('.accordion').forEach(accordion => {
        new Accordion(accordion);
    });

    // Initialize product forms
    document.querySelectorAll('.product-form').forEach(form => {
        new ProductForm(form);
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const nav = document.querySelector('.header__nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});

// Variant selector update
function updateVariantPrice(select) {
    const selectedOption = select.options[select.selectedIndex];
    const price = selectedOption.dataset.price;

    if (price) {
        const priceElement = document.querySelector('.product__price');
        if (priceElement) {
            priceElement.innerHTML = price;
        }
    }
}

// Make functions globally available
window.updateVariantPrice = updateVariantPrice;
