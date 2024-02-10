
let shoppingCart = [];


function addToCart(productName, price) {
    const product = {
        name: productName,
        price: price,
        quantity: 1
    };

  
    const existingProductIndex = shoppingCart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
    
        shoppingCart[existingProductIndex].quantity++;
    } else {
        
        shoppingCart.push(product);
    }


    updateCartIcon();

    alert(`${productName} added to the cart!`);
}


function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartItemCount = shoppingCart.reduce((total, item) => total + item.quantity, 0);
    cartIcon.textContent = `🛒 ${cartItemCount}`;
}
function updateCartOnCartPage() {
            
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    
    let cartItemList = document.getElementById('cartItemList');
    if (cartItemList) {
        
        cartItemList.innerHTML = '';

        
        cartItems.forEach(item => {
            
            let listItem = document.createElement('li');
            listItem.textContent = `Product: ${item.productName}, Price: ${item.price}`;

           
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeItemFromCart(item));

            
            listItem.appendChild(removeButton);

            
            cartItemList.appendChild(listItem);
        });
    }
}


function removeItemFromCart(itemToRemove) {
    
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    
    let updatedCart = cartItems.filter(item => item !== itemToRemove);

    
    sessionStorage.setItem('cartItems', JSON.stringify(updatedCart));

    
    updateCartOnCartPage();
}


updateCartOnCartPage();


document.getElementById('checkoutButton').addEventListener('click', function() {

    window.location.href = 'checkout page.html';
});
document.addEventListener('DOMContentLoaded', function() {
    
    function renderCartItems() {
        
        let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

        
        let cartItemList = document.getElementById('cartItemList');

        
        cartItemList.innerHTML = '';

        
        cartItems.forEach((item, index) => {
            
            let listItem = document.createElement('li');
            listItem.textContent = `Product: ${item.productName}, Price: ${item.price}`;

            
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            
            removeButton.addEventListener('click', function() {
                
                cartItems.splice(index, 1);
                
                sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
                
                renderCartItems();
            });

            
            listItem.appendChild(removeButton);

            
            cartItemList.appendChild(listItem);
        });
    }

   
    renderCartItems();
});
document.addEventListener('DOMContentLoaded', function() {
    
    function handleCheckout() {
        
        window.location.href = 'checkout page.html';
    }

   
    const checkoutButton = document.getElementById('checkoutButton');

    
    checkoutButton.addEventListener('click', handleCheckout);
});

