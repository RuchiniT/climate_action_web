const products = [
    { id: 'baby_hair_brush', name: 'Baby Hair Brush', price: 2400 },
    { id: 'bamboo_cutlery', name: 'Bamboo Cutlery', price: 1000 },
    { id: 'loofah_sponge', name: 'Loofah Sponge', price: 1100 },
    { id: 'recycled_newspaper_pencils', name: 'Recycled Newspaper Pencils', price: 700 },
    { id: 'organic_bamboo_cotton_buds', name: 'Organic Bamboo Cotton Buds', price: 1900 },
    { id: 'cotton_lunch_bag', name: 'Wool Insulated Organic Cotton Lunch Bag - Orange', price: 14100 },
    { id: 'cotton_towels', name: 'Set of 4 Organic Cotton Towels - Terra Cotta', price: 45600 },
    { id: 'toothbrush_with_soft_bristles', name: 'Painted Bamboo Toothbrush with Soft Bristles', price: 1900 }
];

let cart = [];

function addToCart(productId) {
    if (cart.find(item => item.id === productId)) {
        alert("Product Already in the Cart")
    } else {
        const quantity = parseInt(document.getElementById(productId).value);
        const { id, name, price } = products.find(item => item.id === productId);
        const product = { id, name, price, quantity };
        cart.push(product);
        displayCart();
    }
}

function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        cartElement.innerHTML += `<p>${item.name} - Quantity: ${item.quantity} - Total: LKR ${itemTotal}</p>`;
    });
    cartElement.innerHTML += `<div>Total Price: LKR ${totalPrice}</div>`;
}

function clearCart() {
    cart = [];
    displayCart();
}

function checkout() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (cart.length === 0) {
        alert("Please add products to your cart before proceeding.");
        return false;
    } else if (!name || !email ) {
        alert("Please fill in all required fields.");
        return false;
    }else {
        window.location.href = "form.html";
    }
    return true;
}
