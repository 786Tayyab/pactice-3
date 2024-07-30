document.querySelectorAll('.addToCartBtn').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseFloat(button.getAttribute('data-price'));
        addToCart(productName, productPrice);
    });
});

function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;

    cart.push({ name: productName, price: productPrice });
    totalAmount += productPrice;

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalAmount', totalAmount.toFixed(2));

    showMessage(`Your product is added to cart. (${cart.length})`);
}

function showMessage(messageText) {
    const messageContainer = document.getElementById('messageContainer');
    const message = document.createElement('div');
    message.className = 'message';
    message.innerText = messageText;

    messageContainer.appendChild(message);

    setTimeout(() => {
        message.classList.add('hide');
        setTimeout(() => {
            messageContainer.removeChild(message);
        }, 500);
    }, 3000);
}
