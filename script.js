const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');

// Function to save chat messages to localStorage
function saveMessage(username, message) {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push({ username, message, timestamp: new Date().toISOString() });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Function to load chat messages from localStorage
function loadMessages() {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatMessages.innerHTML = chatHistory.map(({ username, message, timestamp }) => 
        `<div class="message">
            <strong>${username}</strong> <em>${new Date(timestamp).toLocaleTimeString()}</em>
            <p>${message}</p>
        </div>`
    ).join('');
}

// Function to handle new message submission
function handleSubmit(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();
    
    if (username && message) {
        saveMessage(username, message);
        messageInput.value = '';
        loadMessages(); // Update the chat box with the new message
    }
}

// Event listener for form submission
chatForm.addEventListener('submit', handleSubmit);

// Initial load of chat messages
loadMessages();

// Periodically refresh the chat messages to stay in sync
setInterval(loadMessages, 1000);
