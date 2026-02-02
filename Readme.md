# 🎙️ BroBot - Voice-Enabled Interview Practice Chatbot

<div align="center">

![BroBot Banner](https://img.shields.io/badge/BroBot-Voice%20Interview%20Assistant-blue?style=for-the-badge)

**An AI-powered voice chatbot designed to help users practice interview conversations**

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://brobot-e9fu.onrender.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[🚀 Live Demo](https://brobot-e9fu.onrender.com/) • [📝 Report Bug](https://github.com/PragatiChaurasiya1/BroBot/issues) • [✨ Request Feature](https://github.com/PragatiChaurasiya1/BroBot/issues)

</div>

---

## 📖 About The Project

**BroBot** is an innovative voice-enabled chatbot designed to help job seekers practice and improve their interview skills through natural conversation. By leveraging AI technology and voice interaction, BroBot provides a low-pressure environment where users can rehearse answering common interview questions, receive feedback, and build confidence before facing real interviews.

**Current Implementation:** BroBot uses ChatGPT's API to respond to personal and professional development questions as YOU would answer them. The bot is designed to be universally user-friendly, requiring no coding knowledge or API key entry from users.

### ✨ Key Features

- 🎤 **Voice Interaction** - Natural speech-to-text and text-to-speech capabilities
- 💬 **Conversational AI** - Intelligent responses powered by AI (using ChatGPT API)
- 🎯 **Interview Practice** - Currently answers questions such as:
  - What should we know about your life story in a few sentences?
  - What's your #1 superpower?
  - What are the top 3 areas you'd like to grow in?
  - What misconception do your coworkers have about you?
  - How do you push your boundaries and limits?
- 🌐 **Web-Based** - No installation required, accessible from any browser
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🚀 **Real-Time Processing** - Instant feedback and responses
- 👤 **User-Friendly** - Simple setup with no coding knowledge or complex installations required

---

## 🔧 Technical Implementation

BroBot leverages the following technologies and APIs:

- **ChatGPT API** - Powers the conversational AI responses
- **Web Speech API** - Enables voice recognition and text-to-speech
- **Express.js** - Handles server-side routing and API integration
- **Vanilla JavaScript** - Client-side interaction and real-time processing

The application is designed with simplicity in mind - users don't need to enter API keys or have technical knowledge to use the chatbot.

---

## 🎯 Use Cases

- **Job Interview Preparation** - Practice common interview questions in a safe environment
- **Communication Skills** - Improve verbal communication and articulation
- **Confidence Building** - Reduce interview anxiety through repeated practice
- **Self-Assessment** - Reflect on personal strengths and areas for improvement
- **Career Development** - Prepare for various career-related conversations

---

## 🛠️ Built With

This project is built using modern web technologies:

- **Frontend:**
  - HTML5
  - CSS3
  - Vanilla JavaScript

- **Backend:**
  - Node.js
  - Express.js

- **Deployment:**
  - Render (Cloud Platform)

---

## 🚀 Getting Started

Follow these steps to get BroBot running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/PragatiChaurasiya1/BroBot.git
```

2. **Navigate to the project directory**

```bash
cd BroBot
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the server**

```bash
npm start
```

5. **Open your browser**

Navigate to `http://localhost:3000` (or the port specified in your server configuration)

---

## 💻 Usage

1. **Visit the Application**
   - Open [https://brobot-e9fu.onrender.com/](https://brobot-e9fu.onrender.com/) in your browser
   - Or run locally at `http://localhost:3000`

2. **Start Talking**
   - Click the "Start talking" button to begin
   - Grant microphone permissions when prompted

3. **Practice Your Responses**
   - Ask BroBot questions about your background, strengths, or areas for growth
   - Speak naturally - the bot currently responds to questions like:
     - "What should we know about your life story?"
     - "What's your #1 superpower?"
     - "What are the top 3 areas you'd like to grow in?"
     - "What misconception do your coworkers have about you?"
     - "How do you push your boundaries and limits?"
   - BroBot will provide thoughtful responses as you would answer them

4. **Build Confidence**
   - Practice as many times as you need
   - Refine your answers and delivery

> **Note:** The bot is designed to answer questions AS YOU, helping you practice how you might respond in real interview scenarios.

---

## 📂 Project Structure

```
BroBot/
├── app.js              # Main application logic
├── server.js           # Express server configuration
├── index.html          # Main HTML file
├── style.css           # Styling and layout
├── package.json        # Project dependencies
├── package-lock.json   # Locked dependency versions
└── README.md           # Project documentation
```

---

## 🌟 Features in Detail

### Voice Recognition
BroBot uses the Web Speech API to convert your spoken words into text, enabling natural conversation flow.

### AI-Powered Responses
The chatbot provides intelligent, context-aware responses to help guide your interview practice.

### User-Friendly Interface
Clean, modern UI design that's easy to navigate and use.

### Accessibility
Built with accessibility in mind, ensuring everyone can benefit from interview practice.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Known Issues

- Some browsers may require HTTPS for microphone access
- Speech recognition accuracy varies by browser and environment
- Performance depends on internet connection speed

---

## 🔮 Future Enhancements

- [ ] Add multiple interview scenarios (technical, behavioral, HR)
- [ ] Implement feedback scoring system
- [ ] Save and review past practice sessions
- [ ] Add industry-specific question banks
- [ ] Multi-language support
- [ ] Integration with video analysis for body language feedback
- [ ] User authentication and progress tracking
- [ ] Custom interview question sets

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Pragati Chaurasiya**

- GitHub: [@PragatiChaurasiya1](https://github.com/PragatiChaurasiya1)
- Project Link: [https://github.com/PragatiChaurasiya1/BroBot](https://github.com/PragatiChaurasiya1/BroBot)

---

## 🙏 Acknowledgments

- Thanks to all contributors and users who provide feedback
- Inspired by the need for accessible interview practice tools
- Built with passion for helping job seekers succeed

---

## 📧 Contact & Support

If you have any questions, suggestions, or need support:

- Open an [Issue](https://github.com/PragatiChaurasiya1/BroBot/issues)
- Star ⭐ this repository if you find it helpful!

---

<div align="center">

**Made with ❤️ by Pragati Chaurasiya**

⭐ Star this repo if you find it useful!

[⬆ Back to Top](#-brobot---voice-enabled-interview-practice-chatbot)

</div>
