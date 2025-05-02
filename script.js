// Sample Product Data
const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        price: 99.99,
        originalPrice: 129.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.5,
        reviews: 125,
        badge: "Popular",
        category: "electronics",
        trending: true,
        deal: false,
        link: "#"
    },
    {
        id: 2,
        title: "Smart Watch with Fitness Tracker",
        price: 149.99,
        originalPrice: 199.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.2,
        reviews: 89,
        badge: "Sale",
        category: "electronics",
        trending: true,
        deal: true,
        link: "#"
    },
    {
        id: 3,
        title: "Portable Bluetooth Speaker",
        price: 59.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.7,
        reviews: 210,
        category: "electronics",
        trending: false,
        deal: false,
        link: "#"
    },
    {
        id: 4,
        title: "4K Ultra HD Smart TV",
        price: 699.99,
        originalPrice: 899.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.8,
        reviews: 56,
        badge: "Best Seller",
        category: "electronics",
        trending: true,
        deal: false,
        link: "#"
    },
    {
        id: 5,
        title: "Laptop Backpack with USB Charging Port",
        price: 39.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2twYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rating: 4.3,
        reviews: 178,
        category: "electronics",
        trending: false,
        deal: true,
        link: "#"
    },
    {
        id: 6,
        title: "Wireless Charging Stand",
        price: 29.99,
        originalPrice: 39.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lyZWxlc3MlMjBjaGFyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rating: 4.0,
        reviews: 92,
        badge: "New",
        category: "electronics",
        trending: false,
        deal: false,
        link: "#"
    },
    {
        id: 7,
        title: "Noise Cancelling Headphones",
        price: 199.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.9,
        reviews: 312,
        category: "electronics",
        trending: true,
        deal: false,
        link: "#"
    },
    {
        id: 8,
        title: "Smartphone Gimbal Stabilizer",
        price: 79.99,
        originalPrice: 99.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1573481078804-70c9d3406cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2ltYmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rating: 4.4,
        reviews: 67,
        category: "electronics",
        trending: false,
        deal: true,
        link: "#"
    },
    {
        id: 9,
        title: "Men's Casual T-Shirt",
        price: 19.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.1,
        reviews: 45,
        category: "clothing",
        trending: false,
        deal: false,
        link: "#"
    },
    {
        id: 10,
        title: "Women's Running Shoes",
        price: 79.99,
        originalPrice: 99.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.6,
        reviews: 132,
        category: "clothing",
        trending: true,
        deal: true,
        link: "#"
    },
    {
        id: 11,
        title: "Home Blender",
        price: 49.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1561023364-9cd51c513f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsZW5kZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.0,
        reviews: 78,
        category: "home",
        trending: false,
        deal: false,
        link: "#"
    },
    {
        id: 12,
        title: "Facial Moisturizer",
        price: 24.99,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.3,
        reviews: 56,
        category: "beauty",
        trending: false,
        deal: false,
        link: "#"
    }
];

// Cart Data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Wishlist Data
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const trendingGrid = document.getElementById('trending-grid');
const dealsGrid = document.getElementById('deals-grid');
const recommendedGrid = document.getElementById('recommended-grid');
const searchResults = document.getElementById('search-results');
const searchResultsGrid = document.getElementById('search-results-grid');
const cartBtn = document.getElementById('cart-btn');
const wishlistLink = document.querySelector('.wishlist-link');
const cartModal = document.getElementById('cart-modal');
const wishlistModal = document.getElementById('wishlist-modal');
const productViewModal = document.getElementById('product-view-modal');
const closeBtn = document.querySelector('.close-btn');
const closeWishlist = document.querySelector('.close-wishlist');
const closeProductView = document.querySelector('.close-product-view');
const cartItems = document.getElementById('cart-items');
const wishlistItems = document.getElementById('wishlist-items');
const productViewContainer = document.getElementById('product-view-container');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortBy = document.getElementById('sort-by');
const countdown = document.getElementById('countdown');
const viewAllTrending = document.getElementById('view-all-trending');
const viewAllRecommended = document.getElementById('view-all-recommended');


// Display Products with cart icon and buy now button
function displayProducts(productsToDisplay, gridElement = productGrid) {
    gridElement.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const isInWishlist = wishlist.some(item => item.id === product.id);
        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    <h4 class="discounts">${product.discount}</h4>
                    </div>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-actions">
                    <a href="${product.link}" class="buy-now-btn">Buy Now</a>
                    <button class="cart-icon-btn" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                        <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        
        gridElement.appendChild(productCard);
    });
    // Add event listeners
    document.querySelectorAll('.cart-icon-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
     // Add event listeners to wishlist buttons
     document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', toggleWishlist);
    });
}

// Display Trending Products
function displayTrendingProducts() {
    const trendingProducts = products.filter(product => product.trending);
    displayProducts(trendingProducts.slice(0, 4), trendingGrid);
}

// Display All Trending Products
function displayAllTrendingProducts() {
    const trendingProducts = products.filter(product => product.trending);
    displayProducts(trendingProducts, productGrid);
    searchResults.style.display = 'none';
}

// Display Deal Products
function displayDealProducts() {
    const dealProducts = products.filter(product => product.deal);
    displayProducts(dealProducts.slice(0, 4), dealsGrid);
}

// Display Recommended Products
function displayRecommendedProducts() {
    const recommendedProducts = [...products]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
    displayProducts(recommendedProducts, recommendedGrid);
}

// Display All Recommended Products
function displayAllRecommendedProducts() {
    const recommendedProducts = [...products]
        .sort(() => 0.5 - Math.random());
    displayProducts(recommendedProducts, productGrid);
    searchResults.style.display = 'none';
}

// Sort Products
function sortProducts() {
    const sortOption = sortBy.value;
    let productsToSort = [...products];
    
    switch (sortOption) {
        case 'price-low':
            productsToSort.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            productsToSort.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            productsToSort.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            productsToSort.sort((a, b) => b.id - a.id);
            break;
        default:
            productsToSort = [...products];
    }
    
    displayProducts(productsToSort);
    searchResults.style.display = 'none';
}

//for featured today

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, idx) => {
        item.style.transform = `translateX(-${index * 100}%)`;
        dots[idx].classList.remove('active');
    });
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}, 5000);

// Search Products
function searchProducts() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        searchResults.style.display = 'none';
        productGrid.style.display = 'grid';
        return;
    }
    
    const results = products.filter(product => 
        product.title.toLowerCase().includes(query)
    );
    
    if (results.length > 0) {
        displayProducts(results, searchResultsGrid);
        searchResults.style.display = 'block';
        productGrid.style.display = 'none';
    } else {
        searchResultsGrid.innerHTML = '<p class="empty-cart">No products found</p>';
        searchResults.style.display = 'block';
        productGrid.style.display = 'none';
    }
}

// Add to Cart
function addToCart(e) {
    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCart();
    showCartNotification();
}

// Toggle Wishlist
function toggleWishlist(e) {
    e.preventDefault();
    e.stopPropagation();
    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    const index = wishlist.findIndex(item => item.id === productId);
    
    if (index === -1) {
        // Add to wishlist
        wishlist.push(product);
        e.currentTarget.classList.add('active');
        e.currentTarget.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        // Remove from wishlist
        wishlist.splice(index, 1);
        e.currentTarget.classList.remove('active');
        e.currentTarget.innerHTML = '<i class="far fa-heart"></i>';
    }
    
    saveWishlist();
    updateWishlistCount();
    
    // Update wishlist buttons in all product displays
    document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
        btn.classList.toggle('active');
        btn.innerHTML = btn.classList.contains('active') ? 
            '<i class="fas fa-heart"></i>' : 
            '<i class="far fa-heart"></i>';
    });
}

// Update Cart
function updateCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartSubtotal.textContent = '$0.00';
        cartTotal.textContent = '$0.00';
    } else {
        let subtotal = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <span class="remove-item" data-id="${item.id}">Remove</span>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.minus').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
        
        const shipping = 0.00;
        const total = subtotal + shipping;
        
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
    
    updateCartCount();
}

// Update Wishlist
function updateWishlist() {
    wishlistItems.innerHTML = '';
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
    } else {
        wishlist.forEach(item => {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            
            wishlistItem.innerHTML = `
                <div class="wishlist-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="wishlist-item-details">
                    <h4 class="wishlist-item-title">${item.title}</h4>
                    <p class="wishlist-item-price">$${item.price.toFixed(2)}</p>
                    <div class="wishlist-item-actions">
                        <button class="add-to-cart-from-wishlist" data-id="${item.id}">Add to Cart</button>
                        <span class="remove-from-wishlist" data-id="${item.id}">Remove</span>
                    </div>
                </div>
            `;
            
            wishlistItems.appendChild(wishlistItem);
        });
        
        // Add event listeners to wishlist buttons
        
        document.querySelectorAll('.add-to-cart-from-wishlist').forEach(button => {
            button.addEventListener('click', addToCartFromWishlist);
        });
        
        document.querySelectorAll('.remove-from-wishlist').forEach(button => {
            button.addEventListener('click', removeFromWishlist);
        });
    }
}

// Add to cart from wishlist
function addToCartFromWishlist(e) {
    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
    const product = wishlist.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCart();
    showCartNotification();
}

// Remove from wishlist
function removeFromWishlist(e) {
    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
    wishlist = wishlist.filter(item => item.id !== productId);
    
    // Update wishlist buttons in all product displays
    document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="far fa-heart"></i> Wishlist';
    });
    
    saveWishlist();
    updateWishlist();
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// Update Wishlist Count
function updateWishlistCount() {
    const count = wishlist.length;
    wishlistCount.textContent = count;
}

// Decrease Quantity
function decreaseQuantity(e) {
    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    saveCart();
    updateCart();
}

// Increase Quantity
function increaseQuantity(e) {
    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    
    item.quantity += 1;
    saveCart();
    updateCart();
}

// Remove Item
function removeItem(e) {
    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

// Show cart notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = 'Item added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Save Wishlist to LocalStorage
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Open Cart Modal
function openCartModal(e) {
    e.preventDefault();
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Cart Modal
function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Open Wishlist Modal
function openWishlistModal(e) {
    e.preventDefault();
    wishlistModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    updateWishlist();
}

// Close Wishlist Modal
function closeWishlistModal() {
    wishlistModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Update Countdown Timer
function updateCountdown() {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 0);
    
    const diff = end - now;
    
    if (diff <= 0) {
        countdown.textContent = '00:00:00';
        return;
    }
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdown.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Initialize the App
function init() {
    // Display all products
    displayProducts(products);
    displayTrendingProducts();
    displayDealProducts();
    displayRecommendedProducts();
    
    // Update cart and wishlist from localStorage
    updateCart();
    updateWishlist();
    updateCartCount();
    updateWishlistCount();
    
    // Event listeners
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchProducts();
    });
    
    sortBy.addEventListener('change', sortProducts);
    
    cartBtn.addEventListener('click', openCartModal);
    closeBtn.addEventListener('click', closeCartModal);
    
    wishlistLink.addEventListener('click', openWishlistModal);
    closeWishlist.addEventListener('click', closeWishlistModal);
            
    viewAllTrending.addEventListener('click', (e) => {
        e.preventDefault();
        displayAllTrendingProducts();
    });
    
    viewAllRecommended.addEventListener('click', (e) => {
        e.preventDefault();
        displayAllRecommendedProducts();
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCartModal();
        if (e.target === wishlistModal) closeWishlistModal();
    });
    
    // Countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
