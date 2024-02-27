// script.js
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatMessages = document.getElementById('chat-messages');

    // Display user message
    chatMessages.innerHTML += `<div class="user-message">You: ${userInput}</div>`;

    // Process user input (replace with your chatbot logic)
    let botResponse = "Chatbot: I apologize, but I couldn't understand your query.";

    if (userInput.toLowerCase().includes("protect")) {
        botResponse = "Chatbot: To protect your rice crop, consider using organic pesticides or integrated pest management techniques.";
    } else if (userInput.toLowerCase().includes("yellow spots")) {
        botResponse = "Chatbot: Yellow spots on leaves could indicate fungal or bacterial infections. Apply neem oil or copper-based fungicides.";
    } else if (userInput.toLowerCase().includes("harvest")) {
        botResponse = "Chatbot: Harvest rice when grains are fully mature and golden. Moisture content should be around 20-22%. Avoid heavy rains.";
    }

    // Display bot response
    chatMessages.innerHTML += `<div class="bot-message">${botResponse}</div>`;

    // Clear input field
    document.getElementById('user-input').value = '';
}
