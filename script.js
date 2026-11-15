// Legacy Shopping PRODUCT DATABASE

const products = [

    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 45000,
        rating: 5,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id: 2,
        name: "Premium Laptop",
        category: "Computers",
        price: 850000,
        rating: 4,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },

    {
        id: 3,
        name: "Smartphone Pro Max",
        category: "Electronics",
        price: 650000,
        rating: 5,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        id: 4,
        name: "Smart Watch Series 5",
        category: "Electronics",
        price: 120000,
        rating: 4,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 5,
        name: "Gaming Controller",
        category: "Gaming",
        price: 85000,
        rating: 5,
        image: "https://images.unsplash.com/photo-1592840496694-26c035b52bca"
    },

    {
        id: 6,
        name: "Mechanical Gaming Keyboard",
        category: "Gaming",
        price: 95000,
        rating: 5,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },

    {
        id: 7,
        name: "Modern Backpack",
        category: "Fashion",
        price: 55000,
        rating: 4,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    },

    {
        id: 8,
        name: "Running Sneakers",
        category: "Fashion",
        price: 75000,
        rating: 5,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }

];

// CART

let cart = JSON.parse(localStorage.getItem("LegacyCart")) || [];

// DISPLAY PRODUCTS

function displayProducts(productList) {

    const productGrid =
        document.getElementById("productGrid");

    productGrid.innerHTML = "";


    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <span class="category">
                ${product.category}
            </span>


            <h3>
                ${product.name}
            </h3>


            <div class="rating">

                ${"⭐".repeat(product.rating)}

            </div>


            <p class="price">

                ₦${product.price.toLocaleString()}

            </p>


            <button
                onclick="addToCart(${product.id})"
            >

                Add to Cart

            </button>

        `;


        productGrid.appendChild(card);

    });

}

// ADD TO CART

function addToCart(productId) {

    const product =
        products.find(
            product => product.id === productId
        );


    cart.push(product);


    localStorage.setItem(
        "LegacyCart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(
        `${product.name} added to your cart!`
    );

}

// UPDATE CART COUNTER

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");


    cartCount.textContent =
        cart.length;

}

// SEARCH

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");


    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    if (searchTerm === "") {

        displayProducts(products);

        return;

    }


    const results =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(searchTerm)

            ||

            product.category
                .toLowerCase()
                .includes(searchTerm)

        );


    displayProducts(results);


    if (results.length === 0) {

        alert(
            "No products found for: " +
            searchTerm
        );

    }

}

// START WEBSITE

displayProducts(products);

updateCartCount();