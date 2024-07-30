document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;

    cartItems.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('tr');
        const productCell = document.createElement('td');
        const priceCell = document.createElement('td');

        productCell.textContent = item.name;
        priceCell.textContent = `$${item.price.toFixed(2)}`;

        row.appendChild(productCell);
        row.appendChild(priceCell);
        cartItems.appendChild(row);
    });

    totalAmountElement.textContent = totalAmount.toFixed(2);
}

function clearCart() {
    localStorage.removeItem('cart');
    localStorage.removeItem('totalAmount');
    displayCart();
}
