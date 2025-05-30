import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';

const Chat = ({ socket, username }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [otherTyping, setOtherTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!socket) return;
    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    socket.on('typing', (status) => {
      setOtherTyping(status);
    });
    return () => {
      socket.off('message');
      socket.off('typing');
    };
  }, [socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInput = (e) => {
    setInput(e.target.value);
    setTyping(true);
    socket.emit('typing', true);
    setTimeout(() => {
      setTyping(false);
      socket.emit('typing', false);
    }, 1000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const msg = { user: username, text: input, time: new Date().toLocaleTimeString() };
      socket.emit('message', msg);
      setMessages((prev) => [...prev, msg]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message${msg.user === username ? ' own' : ''}`}>
            <span className="chat-user">{msg.user}</span>
            <span className="chat-text">{msg.text}</span>
            <span className="chat-time">{msg.time}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {otherTyping && <div className="chat-typing">Someone is typing...</div>}
      <form className="chat-input-form" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
