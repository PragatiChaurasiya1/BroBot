let hasSpoken = false;
const talkBtn = document.getElementById("talkBtn");
const conversation = document.getElementById("conversation");

/* ---------- SPEECH RECOGNITION SETUP ---------- */
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

/* ---------- BUTTON CLICK ---------- */
talkBtn.addEventListener("click", () => {
  if (isListening) return;
  startListening();
});

function startListening() {
  isListening = true;
  hasSpoken = false;

  talkBtn.innerText = "Listening…";
  talkBtn.className = "listening";

  setTimeout(() => recognition.start(), 300);
}

recognition.onstart = () => {
  console.log("Mic listening started");
};

/* ---------- SPEECH RESULT ---------- */
recognition.onresult = async (event) => {
  hasSpoken = true;
  retryCount = 0;

  const result = event.results[event.results.length - 1];
  const userText = result[0].transcript.trim();
  const isFinal = result.isFinal;

  if (speechTimeout) clearTimeout(speechTimeout);

  // Wait briefly for more words
  if (!isFinal) {
    lastTranscript = userText;
    speechTimeout = setTimeout(() => {
      if (lastTranscript.split(" ").length >= 2) {
        processUserInput(lastTranscript);
      }
      lastTranscript = "";
    }, 2000);
    return;
  }

  // Final result
  if (isFinal && userText.length > 2) {
    processUserInput(userText);
  }
};

/* ---------- PROCESS INPUT ---------- */
async function processUserInput(text) {
  if (!text) return;

  appendText("You", text);

  talkBtn.innerText = "Thinking…";
  talkBtn.className = "thinking";

  await getBotResponse(text);

  lastTranscript = "";
  resetButton();
}

/* ---------- ERROR HANDLING ---------- */
recognition.onerror = (event) => {
  console.log("Speech error:", event.error);

  if (!hasSpoken && retryCount < 1) {
    retryCount++;
    setTimeout(startListening, 500);
    return;
  }

  speak("I didn't catch that. Please try again.");
  resetButton();
};

recognition.onend = () => {
  isListening = false;
  if (speechTimeout) clearTimeout(speechTimeout);
  resetButton();
};

/* ---------- UI HELPERS ---------- */
function resetButton() {
  talkBtn.innerText = "Start talking";
  talkBtn.className = "";
}

function appendText(speaker, text) {
  conversation.innerText += `${speaker}: ${text}\n\n`;
}

/* ---------- BACKEND CALL ---------- */
async function getBotResponse(question) {
  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    const data = await res.json();
    speak(data.answer);
    appendText("Bot", data.answer);
  } catch (error) {
    speak("Something went wrong. Please try again.");
    console.error(error);
  }
}

/* ---------- TEXT TO SPEECH ---------- */
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}
