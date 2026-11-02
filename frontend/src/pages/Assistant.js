
import React, { useState } from 'react';

function Assistant() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setLoading(true);
    setReply('');

    try {
      const response = await fetch('http://localhost:5001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }

      setReply(data.reply);
      setMessage('');
    } catch (error) {
      setReply('Unable to connect to the TravelMate assistant. Please check that the Node.js backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: '800px', margin: '120px auto 40px', padding: '20px' }}>
      <h1>TravelMate AI Assistant</h1>
      <p>Ask me about hotels, flights, food and travel planning.</p>

      <form onSubmit={sendMessage}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Where would you like to travel?"
          rows="4"
          style={{ width: '100%', padding: '12px', marginTop: '20px' }}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Thinking...' : 'Send Message'}
        </button>
      </form>

      {reply && (
        <div style={{ marginTop: '25px', padding: '20px', background: '#f1f5f9', borderRadius: '10px' }}>
          <h3>TravelMate says:</h3>
          <p>{reply}</p>
        </div>
      )}
    </main>
  );
}

export default Assistant;
