const chat = document.getElementById("chat");

const knowledgeBase = {
  "What is the price?": "The Wireless Headphones cost Rs. 4,999.",
  "Battery life?": "Battery lasts up to 20 hours on a single charge.",
  "Is it waterproof?": "Yes, it has IPX5 water resistance.",
  "Is it Bluetooth 5.0?": "Yes, it supports Bluetooth 5.0 for faster connectivity.",
  "Warranty details?": "It comes with a 1-year official warranty.",
  "Delivery time?": "Delivery takes 2-4 working days nationwide."
};

function sendMessage(question) {

  addMessage(question, "user");

  const typingDiv = document.createElement("div");
  typingDiv.className = "message ai";
  typingDiv.innerHTML = `
    <div class="typing">
      <span></span><span></span><span></span>
    </div>
  `;
  chat.appendChild(typingDiv);
  scrollChat();

  setTimeout(() => {
    typingDiv.remove();
    addMessage(knowledgeBase[question] || 
      "I am still learning about this product. Please contact live support for more help.", 
      "ai");
  }, 1500 + Math.random() * 1000);
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = "message " + type;
  msg.textContent = text;
  chat.appendChild(msg);
  scrollChat();
}

function scrollChat() {
  chat.scrollTop = chat.scrollHeight;
}
