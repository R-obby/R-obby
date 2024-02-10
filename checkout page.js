
       const shoppingCart = [
            { name: 'Product Name 1', price: 19.99, quantity: 1 },
            
        ];
        
        function calculateTotal() {
            return shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
        }

        
        function generateOrderSummary() {
            const orderSummaryContainer = document.getElementById('orderSummary');
            orderSummaryContainer.innerHTML = '<h3>Order Summary</h3>';

           
            shoppingCart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <span>${item.name}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                `;
                orderSummaryContainer.appendChild(itemElement);
            });


            const totalElement = document.createElement('p');
            totalElement.textContent = `Total: $${calculateTotal()}`;
            orderSummaryContainer.appendChild(totalElement);
        }

        generateOrderSummary();

        
        document.getElementById('checkoutForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

           
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;

            
            const total = calculateTotal();
            window.location.href = `confirm-order.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}&total=${total}`;
        });
        
        function placeOrder() {
            
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
        
            
            if (username.trim() !== '' && email.trim() !== '') {
                
                window.location.href = 'confirmation.html';
            } else {
                alert('Please enter your username and email before placing the order.');
            }
        }document.addEventListener('DOMContentLoaded', function() {
            // Function to render the cart items on the checkout page
            function renderCartItems() {
                // Retrieve the current cart items from session storage
                let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        
                // Reference to the cart items container
                const cartItemsContainer = document.getElementById('cartItems');
                if (!cartItemsContainer) return;
        
                // Clear existing content
                cartItemsContainer.innerHTML = '';
        
                // Iterate over each cart item and render it
                cartItems.forEach(item => {
                    const cartItemHTML = `
                        <div>
                            <p>Description: ${item.description}</p>
                            <p>Price: $${item.price.toFixed(2)}</p>
                        </div>
                    `;
                    cartItemsContainer.innerHTML += cartItemHTML;
                });
        
                
                const grandTotal = cartItems.reduce((total, item) => total + item.price, 0);
        
                
                const grandTotalContainer = document.getElementById('grandTotal');
                if (grandTotalContainer) {
                    grandTotalContainer.innerHTML = `<h3>Grand Total: $${grandTotal.toFixed(2)}</h3>`;
                }
            }
        
            
            renderCartItems();
        });
        
        

