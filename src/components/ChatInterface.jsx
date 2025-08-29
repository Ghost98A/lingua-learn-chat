import React, { useState, useRef, useEffect } from 'react';
import './ChatInterface.css';

const ChatInterface = ({ currentLanguage, learningMode, onLanguageSwitch, onMessageSent }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hello! I'm your ${currentLanguage} language tutor. How can I help you practice today?`,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage, mode) => {
    const responses = {
      conversation: [
        "That's interesting! Can you tell me more about that?",
        "I see. How did that make you feel?",
        "What would you do differently next time?",
        "That sounds challenging. How did you handle it?",
        "Great! Can you give me another example?"
      ],
      grammar: [
        `Good attempt! Here's a correction: "${userMessage.replace(/\bi\b/g, 'I')}"`,
        "Nice sentence structure! Try using past tense here.",
        "Almost perfect! Watch your verb conjugation.",
        "Excellent grammar! You're improving.",
        "Good job! Remember to capitalize proper nouns."
      ],
      vocabulary: [
        `"${userMessage}" - Great word choice! Do you know any synonyms?`,
        "Let me teach you a new word: 'magnificent' means very beautiful or impressive.",
        "Can you use this word in a different sentence?",
        "Excellent vocabulary! Try using more descriptive adjectives.",
        "Good! Here's a related word you might like: 'fascinating'."
      ],
      translation: [
        `In ${currentLanguage}, you could say: "${userMessage}"`,
        "That's a good translation! Here's a more natural way to say it...",
        "Try this alternative translation for better flow...",
        "Perfect translation! You understand the meaning well.",
        "Good attempt! Consider the cultural context when translating..."
      ]
    };

    const modeResponses = responses[mode] || responses.conversation;
    return modeResponses[Math.floor(Math.random() * modeResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Notify parent component about message sent
    if (onMessageSent) {
      onMessageSent();
    }

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        text: generateAIResponse(inputMessage, learningMode),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-title">
          <h2>🗣️ {currentLanguage} Practice</h2>
          <span className="learning-mode">Mode: {learningMode}</span>
        </div>
        <button className="language-switch-btn" onClick={onLanguageSwitch}>
          Switch Language
        </button>
      </div>

      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
          >
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-time">{formatTime(message.timestamp)}</div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message ai-message">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={`Type your message in ${currentLanguage}...`}
          className="message-input"
          rows="2"
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputMessage.trim()}
          className="send-button"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;