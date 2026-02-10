const chat = document.getElementById("chat");

// Knowledge base (demo answers)
const knowledgeBase = {
  "What is the price?": "The Wireless Headphones cost Rs. 4,999.",
  "How long is the battery life?": "The battery lasts up to 20 hours.",
  "Is it Bluetooth compatible?": "Yes, it is fully Bluetooth compatible.",
  "What about delivery?": "Delivery takes 2-4 working days nationwide."
};

function sendMessage(question) {
  // Show user message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = question;
  chat.appendChild(userMsg);
  chat.scrollTop = chat.scrollHeight;

  // Show typing bubble
  const typingMsg = document.createElement("div");
  typingMsg.className = "message ai";
  typingMsg.textContent = "AI is typing...";
  chat.appendChild(typingMsg);
  chat.scrollTop = chat.scrollHeight;

  // Replace typing bubble with answer after delay
  setTimeout(() => {
    typingMsg.textContent = knowledgeBase[question] || "Sorry, I don't have information on that.";
    chat.scrollTop = chat.scrollHeight;
  }, 1000 + Math.random()*1000); // random delay 1-2s for realism
}
