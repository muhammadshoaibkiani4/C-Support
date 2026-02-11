const chat = document.getElementById("chat");
const questionsDiv = document.getElementById("questions");
const title = document.getElementById("productTitle");

const params = new URLSearchParams(window.location.search);
const product = params.get("product");

const database = {
  headphones: {
    title: "Headphones Support",
    qa: {
      "Price?": "The headphones cost Rs. 4,999.",
      "Battery life?": "Battery lasts 20 hours.",
      "Warranty?": "1 year official warranty."
    }
  },
  watch: {
    title: "Smart Watch Support",
    qa: {
      "Price?": "Smart Watch costs Rs. 6,999.",
      "Waterproof?": "Yes, IP68 water resistant.",
      "Battery?": "Lasts 5 days."
    }
  },
  speaker: {
    title: "Bluetooth Speaker Support",
    qa: {
      "Price?": "Speaker costs Rs. 3,499.",
      "Sound quality?": "HD Surround Sound.",
      "Battery?": "Lasts 12 hours."
    }
  }
};

title.innerText = database[product].title;

for (let question in database[product].qa) {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = question;
  btn.onclick = () => sendMessage(question);
  questionsDiv.appendChild(btn);
}

function sendMessage(question) {
  addMessage(question, "user");

  const typing = document.createElement("div");
  typing.className = "message ai";
  typing.innerText = "AI is typing...";
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();
    addMessage(database[product].qa[question], "ai");
  }, 1200);
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = "message " + type;
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}
