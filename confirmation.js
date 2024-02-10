document.addEventListener('DOMContentLoaded', function() {
    
    const paymentButton = document.getElementById('paymentButton');

    
    paymentButton.addEventListener('click', function() {
        
        window.location.href = 'payment.html';
    });
});
