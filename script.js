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
