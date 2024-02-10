document.addEventListener('DOMContentLoaded', function() {
    
    const signupButton = document.getElementById('signupButton');

    
    signupButton.addEventListener('click', function() {
        
        window.location.href = 'login.html';

    
        alert('welcome to eCo-bags!!...Please log in with your new account.');
    });
});
