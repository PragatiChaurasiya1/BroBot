let hasSpoken = false;
const talkBtn = document.getElementById("talkBtn");
const conversation = document.getElementById("conversation");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.interimResults = true;
recognition.maxAlternatives = 1;
recognition.continuous = true;

let isListening = false;
let retryCount = 0;
let speechTimeout = null;
let lastTranscript = "";

talkBtn.addEventListener("click", () => {
  if (isListening) return;
  startListening();
});

function startListening() {
  isListening = true;
  hasSpoken = false;

  talkBtn.innerText = "Listening…";
  talkBtn.className = "listening";

  setTimeout(() => {
    recognition.start();
  }, 300);
}


recognition.onstart = () => {
  console.log("Mic listening started");
};

recognition.onresult = async (event) => {
  hasSpoken = true;
  retryCount = 0;

  const userText = event.results[event.results.length - 1][0].transcript.trim();
  const isFinal = event.results[event.results.length - 1].isFinal;

  // Clear previous timeout
  if (speechTimeout) {
    clearTimeout(speechTimeout);
  }

  // If we have at least one word, wait for 2 seconds for more
  if (userText.split(' ').length >= 1 && !isFinal) {
    lastTranscript = userText;
    
    speechTimeout = setTimeout(() => {
      // After 2 seconds, check if we have enough to process
      if (lastTranscript.split(' ').length < 2) {
        console.log("Discarded short input:", lastTranscript);
        lastTranscript = "";
        return;
      }
      processUserInput(lastTranscript);
    }, 2000);
    return;
  }

  // If it's a final result, process immediately if it has keywords
  if (isFinal && userText.length > 0) {
    clearTimeout(speechTimeout);
    const words = userText.toLowerCase();
    
    // Check if any keyword exists
    if (words.includes("life") || words.includes("superpower") || 
        words.includes("grow") || words.includes("misconception") || 
        words.includes("boundary") || words.includes("limit")) {
      processUserInput(userText);
    } else {
      lastTranscript = userText;
    }
  }
};

async function processUserInput(text) {
  if (!text || text.length < 3) return;
  
  appendText("You", text);
  
  talkBtn.innerText = "Thinking…";
  talkBtn.className = "thinking";
  
  await getBotResponse(text);
  
  lastTranscript = "";
  resetButton();
}


recognition.onerror = (event) => {
  console.log("Speech error:", event.error);

  if (!hasSpoken && retryCount < 1) {
    retryCount++;
    console.log("Retrying... (" + retryCount + "/1)");
    setTimeout(() => {
      if (!isListening) {
        startListening();
      }
    }, 500);
    return;
  }

  if (!hasSpoken) {
    resetButton();
    retryCount = 0;
    return;
  }

  speak("I didn't catch that. You can try asking again.");
  resetButton();
  retryCount = 0;
};

recognition.onend = () => {
  isListening = false;
  
  if (speechTimeout) {
    clearTimeout(speechTimeout);
  }

  if (!hasSpoken) {
    resetButton();
  }
};

function resetButton() {
  talkBtn.innerText = "Start talking";
  talkBtn.className = "";
}

function appendText(speaker, text) {
  conversation.innerText += `${speaker}: ${text}\n\n`;
}

async function getBotResponse(question) {
  try {
    const res = await fetch("https://brobot-backend.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    speak(data.answer);
    appendText("Me", data.answer);
  } catch {
    speak("Something went wrong. Please try again.");
  }
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}


