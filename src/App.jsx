import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const highlights = [
    {
      title: 'Sagrada Familia',
      description: 'An architectural masterpiece by Antoni Gaudí, this iconic basilica is a symbol of Barcelona and a UNESCO World Heritage site.',
      image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Park Güell',
      description: 'A public park system composed of gardens and architectural elements, showcasing Gaudi\'s unique artistic vision and colorful mosaics.',
      image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'La Rambla',
      description: 'The most famous street in Barcelona, a vibrant pedestrian boulevard filled with cafes, flower stalls, and street performers.',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1543783230-05203d21390c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464790719720-a73bd340909e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1514336020557-e54f4200547f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1562306713-718a66699a22?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>Discover the Magic of Barcelona</h1>
        <p>Your gateway to the vibrant culture and stunning architecture</p>
        <button className="btn">Explore Now</button>
      </section>

      {/* About Section */}
      <section className="about fade-in">
        <h2>About Barcelona</h2>
        <p>Barcelona is a city that captivates with its unique blend of history, art, and modernity.</p>
      </section>

      {/* Highlights Section */}
      <section className="highlights fade-in">
        <h2>Key Highlights</h2>
        <div className="highlights-container">
          {highlights.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery fade-in">
        <h2>Explore the City</h2>
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Barcelona view ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact fade-in">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you!</p>
      </section>
    </div>
  );
}

export default App;
