import React, { useState, useEffect, useRef } from "react";
import { TextAnimate } from "../components/magicui/text-animate.jsx";

// Function to calculate Levenshtein distance (fuzzy matching)
const levenshteinDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1 // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

// Predefined questions and answers
const questionsAndAnswers = [
  {
    question: "What is Hacknovate 6.0?",
    answer:
      "Hacknovate 6.0 is a hackathon event focused on innovation and problem-solving. It brings together developers, designers, and thinkers to create solutions for real-world challenges.",
  },
  {
    question: "How can I register for the hackathon?",
    answer:
      "You can register for Hacknovate 6.0 by visiting our official website and filling out the registration form.",
  },
  {
    question: "Is there an age limit for participation?",
    answer:
      "No, there is no age limit for participation. Everyone is welcome to join!",
  },
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage chatbot visibility
  const messagesEndRef = useRef(null); // Ref for auto-scrolling to the latest message

  const handleQuestion = (question) => {
    // Find the closest matching question using Levenshtein distance
    let closestMatch = questionsAndAnswers.reduce(
      (prev, curr) => {
        const distance = levenshteinDistance(question.toLowerCase(), curr.question.toLowerCase());
        if (distance < prev.distance) {
          return { question: curr.question, answer: curr.answer, distance };
        }
        return prev;
      },
      { question: "", answer: "", distance: Infinity }
    );

    // If the closest match is within a reasonable threshold, use it
    const answer =
      closestMatch.distance <= 10 // Adjust threshold as needed
        ? closestMatch.answer
        : "I'm sorry, I don't have an answer to that question.";

    // Only keep the latest question and answer
    setMessages([{ type: "user", text: question }, { type: "bot", text: answer, id: Date.now() }]);
    setInput("");
  };


  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chatbot Interface */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 w-96 h-[500px] bg-cover bg-center rounded-lg shadow-lg flex flex-col"
          style={{ backgroundImage: "url('https://i.pinimg.com/736x/99/23/55/992355694735dfc24bbf15f8dc6c94ec.jpg')" }}
        >
          <div className="flex-1 mt-24 ml-2 p-4 overflow-y-auto text-left">
            {messages.map((msg) => (
              <div
                key={msg.id} // Use a unique ID for each message
                className={`text-left p-2 rounded-lg w-full ${
                  msg.type === "user" ? "bg-transparent text-black ml-auto" : "bg-transparent text-gray-800"
                }`}
              >
                {msg.type === "user" ? (
                  // Display user's question without TextAnimate
                  <div>{msg.text}</div>
                ) : (
                  // Display bot's answer with TextAnimate
                  <TextAnimate animation="blurInUp" by="word" once>
                    {msg.text}
                  </TextAnimate>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Auto-scroll anchor */}
          </div>
          <div className="p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleQuestion(input)}
              placeholder="Type your question..."
              className="w-[90%] mx-4 p-4 bg-transparent outline-none border-t-4 border-gray-500"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;