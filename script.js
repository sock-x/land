function interactWithAgent() {
    const userInput = document.getElementById('user-input').value;
    const agentResponse = document.getElementById('agent-response');

    // Simulate an agent response
    if (userInput.toLowerCase().includes('hello')) {
        agentResponse.textContent = "Hi there! How can I help you with your trading today?";
    } else {
        agentResponse.textContent = "I'm here to assist you with any questions about cryptocurrency trading.";
    }

    // Clear the input field
    document.getElementById('user-input').value = '';
}
