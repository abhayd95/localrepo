// Get form elements
const signupForm = document.querySelector('.signup-form');
const loginForm = document.querySelector('.login-form');

// Handle signup form submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Basic validation
    if (username && email && password) {
        console.log('Signup Data:', { username, email, password });
        // Add your signup logic here
        this.reset();
    }
});

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Basic validation
    if (username && password) {
        console.log('Login Data:', { username, password });
        // Add your login logic here
        this.reset();
    }
});