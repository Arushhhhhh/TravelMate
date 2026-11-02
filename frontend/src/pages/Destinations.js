
import React, { useEffect, useState } from 'react';

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/api/destinations')
      .then((response) => {
        if (!response.ok) throw new Error('Unable to fetch destinations');
        return response.json();
      })
      .then((data) => setDestinations(data.recommendations || []))
      .catch(() => setError('Could not load destinations. Check your Node.js server.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main style={{ maxWidth: '1100px', margin: '120px auto 40px', padding: '20px' }}>
      <h1>Explore Destinations</h1>
      <p>Discover amazing places for your next adventure.</p>

      {loading && <p>Loading destinations...</p>}
      {error && <p>{error}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {destinations.map((place) => (
          <article key={place.name} style={{
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <h2>{place.name}</h2>
            <p>{place.description}</p>
            <p><strong>Budget:</strong> {place.budget}</p>
            <h4>Highlights</h4>
            <ul>
              {place.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Destinations;
