function send() {
  let input = document.getElementById("userInput").value.trim();
  let chat = document.getElementById("chatbox");

  if (input === "") return;

  chat.innerHTML += `<p><b>You:</b> ${input}</p>`;

  let reply = "I'm still learning. Please ask something else 🙂";

  let text = input.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    reply = "Hello 😊 How can I help you?";
  } 
  else if (text.includes("your name")) {
    reply = "I am your AI Student Assistant 🤖";
  }
  else if (text.includes("derivative")) {
    reply = "Derivative means rate of change with respect to a variable.";
  }
  else if (text.includes("integration")) {
    reply = "Integration is the reverse process of differentiation.";
  }
  else if (text.includes("math")) {
    reply = "I can help with math 📐 Ask me any question!";
  }
  else if (text.includes("who made you")) {
    reply = "I was created by Ravindra using coding 😎";
  }

  chat.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
  chat.scrollTop = chat.scrollHeight;

  document.getElementById("userInput").value = "";
}

/* 🎤 VOICE INPUT */
function startVoice() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice not supported in this browser. Use Chrome.");
    return;
  }

  let recognition = new webkitSpeechRecognition();
  recognition.lang = "en-IN";
  recognition.start();

  recognition.onresult = function(event) {
    let voiceText = event.results[0][0].transcript;
    document.getElementById("userInput").value = voiceText;
    send();
  };
}
