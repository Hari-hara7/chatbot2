function sendUserMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatBox = document.getElementById('chat-box');

    // Display user message in chat box
    var userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.innerHTML = `<p>You: ${userInput}</p>`;
    chatBox.appendChild(userMessageElement);

    // Clear input field after sending message
    document.getElementById('user-input').value = '';

    // Simulate chatbot response
    simulateChatbotResponse(userInput);
}

function simulateChatbotResponse(userInput) {
    // Simulate a delayed response from the chatbot (replace with actual API call)
    setTimeout(function() {
        var chatBox = document.getElementById('chat-box');
        var botMessageElement = document.createElement('div');
        botMessageElement.classList.add('message', 'bot-message');
        
        // Example responses based on user input
        var botResponse;
        if (userInput.toLowerCase().includes('notes')) {
            botResponse = 'Here are some notes on various subjects. <a href="#">Download Notes</a>';
        } else if (userInput.toLowerCase().includes('question papers')) {
            botResponse = 'You can find past question papers under the Question Papers section.';
        } else if (userInput.toLowerCase().includes('syllabus')) {
            botResponse = 'Visit the Syllabus page to view detailed syllabus information.';
        } else if (userInput.toLowerCase().includes('question banks')) {
            botResponse = 'Question banks are available for different subjects. <a href="#">Explore Question Banks</a>';
        } else {
            botResponse = 'I can help you with notes, question papers, syllabus, and question banks. Please specify.';
        }
        
        botMessageElement.innerHTML = `<p>Academic Pal 2.0: ${botResponse}</p>`;
        chatBox.appendChild(botMessageElement);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500); // Simulate a slight delay for a more natural conversation flow
}
