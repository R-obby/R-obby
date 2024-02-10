document.addEventListener('DOMContentLoaded', function() {
   
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    
    loginButton.addEventListener('click', function(event) {
        
        event.preventDefault();

       
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

       

       
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

        
        window.location.href = 'categories.html';
    });
});
