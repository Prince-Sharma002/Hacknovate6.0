import React, { useState, useEffect, useRef } from "react";

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
    if (!question.trim()) return;
    
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
      closestMatch.distance <= 80 // Adjust threshold as needed
        ? closestMatch.answer
        : "I'm sorry, I don't have an answer to that question.";

    // Add new messages instead of replacing all messages
    setMessages([
      ...messages,
      { type: "user", text: question, id: Date.now() },
      { type: "bot", text: answer, id: Date.now() + 1, isNew: true }
    ]);
    setInput("");
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Remove the isNew flag after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(messages.map(msg => ({ ...msg, isNew: false })));
    }, 3000); // Match animation duration
    
    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-20 fixed md:w-20 md:h-20 bottom-4 flex justify-center align-center items-center text-2xl right-12  md:right-4 p-4 bg-black text-white rounded-full  hover:bg-black transition-all"
      >
              <span
              className=" text-xl  md:text-3xl"
                style={{
                  color: "#FFD700", // Gold color
                  textShadow: "0 0 5px #FFD700, 0 0 15px #FFA500, 0 0 20px #FF8C00", // Initial glow
                  fontWeight: "bold",
                  animation: "glow 1.5s infinite alternate", // Apply animation
                }}
              >
                {isOpen ? "✕" : "📜"}

                {/* Adding animation inside a <style> tag */}
                <style>
                  {`
                    @keyframes glow {
                      0% {
                        text-shadow: 0 0 5px #FFD700, 0 0 10px #FFA500, 0 0 15px #FF8C00;
                      }
                      50% {
                        text-shadow: 0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 30px #FF8C00;
                      }
                      100% {
                        text-shadow: 0 0 5px #FFD700, 0 0 10px #FFA500, 0 0 15px #FF8C00;
                      }
                    }
                  `}
                </style>
              </span>


      </button>

      {/* Chatbot Interface */}
      {isOpen && (
        <div
          className="z-20 fixed bottom-24 right-4 w-[18rem] h-[30rem] bg-cover bg-center rounded-lg shadow-2xl flex flex-col"
          style={{ backgroundImage: "url('https://youve-reached-the-apex.weebly.com/uploads/7/1/8/8/71880077/2620393_orig.jpg')" }}
        >

          <style>
            {`
              @keyframes blurInUp {
                0% {
                  opacity: 0;
                  filter: blur(10px);
                  transform: translateX(0px);
                }
                100% {
                  opacity: 1;
                  filter: blur(0);
                  transform: translateX(0);
                }
              }
              
              .message-animation {
                animation: blurInUp 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }
              
              /* Custom Scrollbar Styles */
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
              }
              
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                transition: all 0.3s ease;
              }
              
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 0, 0, 0.5);
              }
              
              /* For Firefox */
              .custom-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: rgba(0, 0, 0, 0.3) rgba(255, 255, 255, 0.1);
              }
            `}
          </style>
          
          <div className="flex-1 italic mt-4 ml-2 p-4 overflow-y-auto text-left custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`text-left p-2 rounded-lg w-full ${
                  msg.type === "user" ? "bg-transparent text-black ml-auto" : "bg-transparent text-gray-800"
                } ${msg.type === "bot" && msg.isNew ? "message-animation" : ""}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Auto-scroll anchor */}
          </div>
          <div className="p-4 text-black">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleQuestion(input)}
              placeholder="Type your question..."
              className="w-[90%] italic placeholder-black  mx-4 p-4 bg-transparent text-black outline-none border-t-4 border-gray-500"
            />
            
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;