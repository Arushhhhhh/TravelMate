
import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Explore Destinations',
    description: 'Discover places and plan your next adventure.',
    icon: '🌍',
    path: '/destinations',
  },
  {
    title: 'AI Travel Assistant',
    description: 'Get help planning your trips with AI.',
    icon: '🤖',
    path: '/ai-assistance',
  },
  {
    title: 'Hotel Search',
    description: 'Find suitable accommodation for your journey.',
    icon: '🏨',
    path: 'http://localhost:5000/hotel',
  },
  {
    title: 'Language Translation',
    description: 'Communicate more easily while travelling.',
    icon: '🌐',
    path: 'http://localhost:5000/translate',
  },
  {
    title: 'Travel Reels',
    description: 'Explore travel experiences and inspiration.',
    icon: '🎥',
    path: 'http://localhost:5000/reel',
  },
  {
    title: 'Emergency Assistance',
    description: 'Find help and important information while travelling.',
    icon: '🆘',
    path: 'http://localhost:5000/sos',
  },
];

function Home() {
  return (
    <main>
      <section className="travel-hero">
        <h1>Discover the World with TravelMate</h1>
        <p>Your journey starts here. Explore, plan, and travel smarter.</p>
      </section>

      <section className="features-section">
        <h2>Everything You Need for Your Journey</h2>

        <div className="features-grid">
          {features.map((feature) => (
            <Link
              to={feature.path.startsWith('http') ? '#' : feature.path}
              onClick={
                feature.path.startsWith('http')
                  ? () => window.location.href = feature.path
                  : undefined
              }
              className="feature-card"
              key={feature.title}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
