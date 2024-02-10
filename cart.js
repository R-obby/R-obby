
function addToCart() {
    
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    
    cartItems.push({  });

    
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

    
    updateCartUI(cartItems.length);
}


function updateCartUI(cartItemCount) {
    
    let cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        
        cartIcon.innerHTML = cartItemCount;

        
        alert('Product added to cart!');

        
        window.location.href = 'products.html';
    }
}
