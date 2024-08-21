// Handle showing the login and register forms
document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

// Handle registration (front-end only)
document.getElementById('register-button').addEventListener('click', function() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        // Store user info in localStorage (for demo purposes only)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Registration successful! Please log in.');

        // Show login form
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    } else {
        alert('Please fill out both fields.');
    }
});

// Handle login (front-end only)
document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check user info against localStorage (for demo purposes only)
    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
        alert('Login successful!');

        // Show chat container and hide login
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'flex';
    } else {
        alert('Invalid username or password.');
    }
});

// Handle sending messages
document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;

        document.getElementById('chat-box').appendChild(messageElement);
        messageInput.value = '';
        messageInput.focus();

        // Scroll to the bottom of the chat
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }
});

document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});
