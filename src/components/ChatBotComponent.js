import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatBotAvatar=styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const ChatBotWindow = styled.div`
  position: absolute;
  bottom: 60px;
  right: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  width: 300px;
  height: 400px;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const ChatBotHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ChatBotConversation = styled.div`
  padding: 10px;
  overflow-y: auto;
  height: 300px;
`;

const ChatBotInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
`;

const ChatBotButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const ChatBotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const chatBotRef = useRef(null);

  const handleToggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    const message = input.trim();
    if (message) {
      setConversation([...conversation, { text: message, sender: 'user' }]);
      setInput('');

      // Simple chatbot response logic
      const responses = {
        hello: 'Hi, how can I assist you?',
        hi: 'Hello! What can I help you with?',
        how: 'I can help you with general questions or provide information on a topic.',
        what: 'I can answer questions on a wide range of topics. What would you like to know?',
        default: 'I didn\'t understand that. Can you please rephrase?',
      };

      const intent = message.toLowerCase().split(' ')[0];
      const response = responses[intent] || responses.default;
      setConversation([...conversation, { text: response, sender: 'bot' }]);
    }
  };

  const handleClickOutside = (event) => {
    if (chatBotRef.current && !chatBotRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener('click', handleClickOutside);

  return (
    <ChatBotContainer ref={chatBotRef}>
      <ChatBotAvatar src="Avatar2.jpg" onClick={handleToggleChatbot} />
      <ChatBotWindow isOpen={isOpen}>
        <ChatBotHeader>
          <h4>Chatbot</h4>
          <button onClick={handleToggleChatbot}>X</button>
        </ChatBotHeader>
        <ChatBotConversation>
          {conversation.map((message, index) => (
            <div key={index}>
              <span style={{ color: message.sender === 'user' ? '#333' : '#666' }}>
                {message.text}
              </span>
            </div>
          ))}
        </ChatBotConversation>
        <ChatBotInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <ChatBotButton onClick={handleSendMessage}>Send</ChatBotButton>
      </ChatBotWindow>
    </ChatBotContainer>
  );
};

export default ChatBotComponent;