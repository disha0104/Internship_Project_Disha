// Get all the add to cart buttons
const carts = document.querySelectorAll('.add-cart');

// Define an array to store the products added to the cart
let products = [];

// Function to add product to cart
function addToCart(name, price) {
    const product = {
        name,
        price
    };
    products.push(product);
    updateCartCount();
}

// Function to update the cart count in the navbar
function updateCartCount() {
    const cartCount = document.querySelector('.navbar-top-items.cart span');
    cartCount.textContent = products.length;
}

// Add event listeners to each add to cart button
carts.forEach((cart) => {
    cart.addEventListener('click', () => {
        // Retrieve the product name and price from the dataset
        const name = cart.dataset.name;
        const price = cart.dataset.price;
        addToCart(name, price);
    });
});
