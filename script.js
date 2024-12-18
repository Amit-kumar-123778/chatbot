// script.js
document.addEventListener("DOMContentLoaded", function() {
    const chatContainer = document.querySelector('.chat-container');
    const inputField = document.querySelector('.chat-input');

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const userMessage = inputField.value;
            chatContainer.innerHTML += `<p>You: ${userMessage}</p>`;
            inputField.value = '';
            // Simulate bot response
            setTimeout(() => {
                chatContainer.innerHTML += `<p>Bot: You said "${userMessage}"</p>`;
            }, 1000);
        }
    });
});
