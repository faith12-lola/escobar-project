document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".mobile-menu-toggle");
  const icon = menuBtn.querySelector("i");

  const overlay = document.createElement("div");
  overlay.className = "mobile-menu-overlay";

  const sidebar = document.createElement("div");
  sidebar.className = "mobile-menu-sidebar";

  sidebar.innerHTML = `
    <div class="mobile-menu-header">
      <h3>Menu</h3>
      <button class="close-btn">&times;</button>
    </div>

    <div class="mobile-search">
      <i class='bx bx-search'></i>
      <input type="text" placeholder="Search products...">
    </div>

    <div class="mobile-auth">
      <button class="signin"><i class='bx bx-user'></i> Sign In</button>
      <button class="signup"><i class='bx bx-user-plus'></i> Sign Up</button>
    </div>

    <div class="mobile-user-actions">
        <div class="action-item">
            <i class='bx bx-heart'></i>
        </div>
        <div class="action-item">
            <i class='bx bx-heart'></i>
        </div>
        <a href="checkout.html" class="action-item" style="color: inherit; text-decoration: none;">
            <i class='bx bx-cart'></i>
            <span class="cart-count">2</span>
        </a>
        <div class="cart-price">
            <span>Shopping cart:</span>
            <strong>$57.00</strong>
        </div>
    </div>

    <ul class="mobile-links">
      <li><a href="index.html"><i class='bx bx-home'></i> Home</a></li>
      <li><a href="shop.html"><i class='bx bx-store'></i> Shop</a></li>
      <li><a href="pages.html"><i class='bx bx-file'></i> Pages</a></li>
      <li><a href="blog.html"><i class='bx bx-news'></i> Blog</a></li>
      <li><a href="faq.html"><i class='bx bx-help-circle'></i> FAQ</a></li>
      <li><a href="about.html"><i class='bx bx-info-circle'></i> About Us</a></li>
      <li><a href="contact.html"><i class='bx bx-envelope'></i> Contact Us</a></li>
    </ul>

    <div class="mobile-footer">
      <i class='bx bx-phone'></i> (219) 555-0114
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(sidebar);

  function openMenu() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  menuBtn.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);
  sidebar.querySelector(".close-btn").addEventListener("click", closeMenu);
  // Timer Logic
  function startTimer(duration, display) {
    let timer = duration, days, hours, minutes, seconds;
    const spans = document.querySelectorAll('.timer span');

    if (!spans.length) return; 

    // Update the timer immediately to prevent 1s delay
    updateDisplay();

    const intervalId = setInterval(updateDisplay, 1000);

    function updateDisplay() {
        days = Math.floor(timer / (60 * 60 * 24));
        hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        if (spans[0]) spans[0].textContent = (days < 10 ? "0" + days : days) + " :";
        if (spans[1]) spans[1].textContent = (hours < 10 ? "0" + hours : hours) + " :";
        if (spans[2]) spans[2].textContent = (minutes < 10 ? "0" + minutes : minutes) + " :";
        if (spans[3]) spans[3].textContent = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            timer = duration; 
        }
    }
  }

  // Start timer: 2 days, 18 hours, 46 mins = 240360 seconds (approx example)
  // Or just parsed from the text. Let's start a fresh countdown.
  const initialTime = (2 * 24 * 60 * 60) + (18 * 60 * 60) + (46 * 60);
  startTimer(initialTime);

  // ================= PRODUCT DETAILS LOGIC =================
  const products = {
    "green-apple": {
        name: "Green Apple",
        price: "$14.99",
        image: "images/green apple.png",
        category: "Fruits",
        desc: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar."
    },
    "chanise-cabbage": {
        name: "Chinese Cabbage",
        price: "$12.00",
        image: "images/chinese gabbage.png",
        category: "Vegetables",
        desc: "Sed vestibulum nulla elementum imperdiet eleifend. Aliquam erat volutpat. Cras sit amet enim nibh. Aliquam congue viverra nisl vitae vestibulum. Suspendisse sodales arcu sit amet elementum ultrices."
    },
    "green-lettuce": {
        name: "Green Lettuce",
        price: "$9.00",
        image: "images/green lettuce.png",
        category: "Vegetables",
        desc: "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    "eggplant": {
        name: "Eggplant",
        price: "$34.00",
        image: "images/egg plant.png",
        category: "Vegetables",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
    },
    "fresh-cauliflower": {
        name: "Fresh Cauliflower",
        price: "$12.00",
        image: "images/fresh couliflower.png",
        category: "Vegetables",
        desc: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
    },
    "green-capsicum": {
        name: "Green Capsicum",
        price: "$9.00",
        image: "images/green copsicum.png",
        category: "Vegetables",
        desc: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."
    },
    "green-chili": {
        name: "Green Chili",
        price: "$34.00",
        image: "images/green chili.png",
        category: "Vegetables",
        desc: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi."
    },
    "big-potatoes": {
        name: "Big Potatoes",
        price: "$12.00",
        image: "images/big potatoes.png",
        category: "Vegetables",
        desc: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem."
    },
    "corn": {
        name: "Corn",
        price: "$12.00",
        image: "images/corn.png",
        category: "Vegetables",
        desc: "Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
    },
    "red-chili": {
        name: "Red Chili",
        price: "$12.00",
        image: "images/red chili.png",
        category: "Vegetables",
        desc: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
    },
    "red-tomatoes": {
        name: "Red Tomatoes",
        price: "$9.00",
        image: "images/red tomatoe.png",
        category: "Vegetables",
        desc: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu."
    },
    "surjapur-mango": {
        name: "Surjapur Mango",
        price: "$34.00",
        image: "images/sunja mango.png",
        category: "Fruits",
        desc: "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
    },
    "fresh-fruit": {
        name: "Fresh Fruit Pack",
        price: "$45.00",
        image: "images/fruit-pack.png", 
        category: "Fruits",
        desc: "A mix of seasonal fresh fruits. Perfect for a healthy snack."
    },
    "low-fat-meat": {
        name: "Low-Fat Meat",
        price: "$79.99",
        image: "images/meat.png", 
        category: "Meat",
        desc: "Premium quality low-fat meat. Great for grilling and roasting."
    },
    "sale-month": {
        name: "Assorted Vegetables",
        price: "$29.99",
        image: "images/veggies.jpg",
        category: "Vegetables",
        desc: "The best deal of the month! A basket full of fresh vegetables."
    }
  };

  // Check if we are on the product details page
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId && products[productId]) {
      const product = products[productId];
      
      const imgEl = document.getElementById('product-img');
      const nameEl = document.getElementById('product-name');
      const priceEl = document.getElementById('product-price');
      const descEl = document.getElementById('product-desc');
      const catEl = document.getElementById('product-category');

      if (imgEl) imgEl.src = product.image;
      if (nameEl) nameEl.textContent = product.name;
      if (priceEl) priceEl.textContent = product.price;
      if (descEl) descEl.textContent = product.desc;
      if (catEl) catEl.textContent = product.category;
  }

  // ================= FUNCTIONALITY IMPLEMENTATION =================

  // 1. Cart Functionality
  let cartCount = 0;
  const cartCountEl = document.getElementById('cart-count'); // Desktop badge
  const mobileCartCountEl = document.querySelector('.mobile-user-actions .cart-count'); // Mobile badge

  const updateCartDisplay = () => {
      if (cartCountEl) cartCountEl.textContent = cartCount;
      if (mobileCartCountEl) mobileCartCountEl.textContent = cartCount;
  };

  // Add event listeners to all cart icons/buttons
  // Select .cart-icon (div wrapper in index), .add-cartt (button in deals), and generic buttons
  const addCartButtons = document.querySelectorAll('.cart-icon, .add-cartt, .add-to-cart-btn');
  
  addCartButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
          // e.preventDefault(); // Optional: prevent if it jumps top
          // Find the product name if possible for better alert
          const card = btn.closest('.product-card, .produ-card, .product-cardd, .product-details-container');
          const name = card ? (card.querySelector('h4, .title, h1') ? card.querySelector('h4, .title, h1').innerText : 'Product') : 'Product';
          
          cartCount++;
          updateCartDisplay();
          alert(`${name} has been added to your cart!`);
      });
  });

  // 2. Search Functionality
  const searchBox = document.querySelector('.search-box input');
  const searchBtn = document.querySelector('.search-box button');

  if (searchBox && searchBtn) {
      const performSearch = () => {
          const query = searchBox.value.trim();
          if (query) {
              // Redirect to product.html with search query
              window.location.href = `product.html?search=${encodeURIComponent(query)}`;
          }
      };

      searchBtn.addEventListener('click', performSearch);
      searchBox.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') performSearch();
      });
  }

  // Search Filter on Product Page
  const searchQuery = urlParams.get('search');
  if (searchQuery) {
      const term = searchQuery.toLowerCase();
      // Select all types of product cards
      const productCards = document.querySelectorAll('.produ-card, .product-card, .product-cardd'); 
      let foundCount = 0;
      
      productCards.forEach(card => {
          const text = card.textContent.toLowerCase();
          if (text.includes(term)) {
              card.style.display = ''; // Show
              foundCount++;
          } else {
              card.style.display = 'none'; // Hide
          }
      });
      
      // Optional: Update title to show search results
      const bannerTitle = document.querySelector('.active'); // Breadcrumb active span
      if (bannerTitle) bannerTitle.textContent = `Search Results for "${searchQuery}" (${foundCount})`;
  }

  // 3. Form Handling
  // Newsletter
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const emailInput = newsletterForm.querySelector('input');
          if(emailInput && emailInput.value) {
            alert(`Thanks for subscribing with ${emailInput.value}!`);
            newsletterForm.reset();
          }
      });
  }

  // Contact Form
  const contactForm = document.querySelector('.contact-right form');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          alert("Your message has been sent successfully! We will get back to you soon.");
          contactForm.reset();
      });
  }

  // Checkout Place Order
  const placeOrderBtn = document.querySelector('.place-order-btn');
  if (placeOrderBtn) {
      placeOrderBtn.addEventListener('click', (e) => {
          e.preventDefault();
          alert("Thank you! Your order has been placed successfully.");
          // Redirect to home or simulated success page
          window.location.href = "index.html";
      });
  }
});



