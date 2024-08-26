import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css'
import { assets } from '../../assets/assets'

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false); // State to manage chat window visibility
  
    const sendMessage = async () => {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);
  
      try {
        const response = await axios.post('https://food-delivery-app-backend-8mxw.onrender.com/api/chatbot', {
          message: input,
        });
        const botMessage = { sender: 'bot', text: response.data.response };
        setMessages([...messages, userMessage, botMessage]);
      } catch (error) {
        console.error('Error sending message', error);
      }
  
      setInput('');
    };
  
    return (
      <div className="ChatBot">
        <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
          💬
        </button>
        {isOpen && (
          <div className="chat-window">
            <div className='chatbot-welcome'>
              <img src={assets.chatbot} alt="chatbot image" />
              <h3>Welcome to Paramita's Kitchen</h3>
            </div>
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={msg.sender}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="input-area">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    );
  }
  

export default ChatBot
