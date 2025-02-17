const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

const responses = {
  // General Questions
  "hello": "Hi there! How can I help you?",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name": "I'm a simple QnA bot!",
  "goodbye": "Goodbye! Have a great day!",
  "what can you do": "I can answer simple questions! Try asking me about health, fitness, or general facts.",
  "who created you": "I was created by a developer to assist with your questions!",
  "tell me a joke": "Why did the computer go to the doctor? Because it had a virus!",
  "what is 2 plus 2": "2 + 2 is 4!",

  // HealthBuddy Questions
  "what is healthbuddy": "HealthBuddy is a personalized companion for chronic disease management, offering tools for health monitoring, medication reminders, and more.",
  "how does healthbuddy help": "HealthBuddy helps you track vitals, manage medications, schedule appointments, and access telehealth services.",
  "does healthbuddy offer telehealth services": "Yes! You can consult with healthcare professionals online through HealthBuddy.",
  "what is chronic disease management": "It involves ongoing care and support to help manage chronic health conditions and improve quality of life.",
  "is healthbuddy free": "HealthBuddy offers both free and premium plans. The free plan includes basic features, while the premium plan has additional tools.",
  "how can I track my health progress": "HealthBuddy provides a progress tracking feature to monitor your vitals over time.",
  "can I book appointments with healthbuddy": "Yes! HealthBuddy allows you to book and manage medical appointments easily.",
  "how do I manage chronic diseases": "Stay active, eat a balanced diet, manage stress, and follow your doctor's advice for better health.",
  "what are the benefits of healthbuddy": "HealthBuddy offers health monitoring, medication reminders, telehealth services, educational resources, and appointment scheduling to help you stay on top of your health.",
  "how do medication reminders work": "HealthBuddy sends you alerts so you never miss a dose of your prescribed medications.",
  "does healthbuddy have health education resources": "Yes! HealthBuddy has an Education Hub filled with self-management tools and health tips.",
  "how do I reduce my risk of chronic diseases": "Maintain a healthy lifestyle with proper diet, regular exercise, stress management, and routine check-ups.",
  "what are common chronic diseases": "Some common chronic diseases include diabetes, heart disease, hypertension, asthma, and arthritis.",
  "how does stress affect health": "Chronic stress can lead to high blood pressure, heart disease, and a weakened immune system.",
  "does healthbuddy support mental health": "Yes! HealthBuddy provides health tips and self-management tools that can help with mental well-being.",
  "what foods are good for heart health": "Foods like salmon, nuts, berries, and leafy greens are great for your heart.",
  "how often should I exercise": "It's recommended to do at least 150 minutes of moderate exercise per week.",

  // Default Response
  "default": "I'm not sure how to respond to that. Can you try asking something else?"
};



const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = (chatElement) => {
  const messageElement = chatElement.querySelector("p");

  const normalizedMessage = userMessage
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .trim();

  const response = responses[normalizedMessage] || responses["default"];
  messageElement.textContent = response;
  chatbox.scrollTo(0, chatbox.scrollHeight);
};


const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
