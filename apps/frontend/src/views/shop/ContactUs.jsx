import React from 'react';

const locations = [
  {
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    phone: '(123) 456-7890',
    hours: 'Mon-Fri: 9am - 9pm, Sat-Sun: 10am - 6pm',
  },
  {
    city: 'Los Angeles',
    address: '456 Sunset Blvd, Los Angeles, CA 90028',
    phone: '(987) 654-3210',
    hours: 'Mon-Fri: 10am - 8pm, Sat-Sun: 11am - 7pm',
  },
  {
    city: 'Chicago',
    address: '789 Lake Shore Dr, Chicago, IL 60611',
    phone: '(555) 123-4567',
    hours: 'Mon-Fri: 9am - 9pm, Sat-Sun: 10am - 6pm',
  },
  {
    city: 'Texas',
    address: '865 Lord Dr, Dallas, TX 60611',
    phone: '(564) 1286-2367',
    hours: 'Mon-Fri: 9am - 9pm, Sat-Sun: 10am - 6pm',
  },
];

function App() {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Welcome to STANDGATES! Your trusted partner for quality products at multiple convenient locations.</p>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2000, STANDGATES has grown from a small family business to a leading retail brand across
          multiple cities. Our mission is to provide high-quality products and exceptional customer service to every
          community we serve.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer First:</strong> We prioritize our customers' needs above all else.</li>
          <li><strong>Quality Products:</strong> We handpick every product to ensure the best quality.</li>
          <li><strong>Community Engagement:</strong> We strive to give back to the communities we serve.</li>
        </ul>
      </section>

      {/* Locations Section */}
      <section className="locations">
        <h2>Our Locations</h2>
        <div className="location-list">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <h3>{location.city}</h3>
              <p><strong>Address:</strong> {location.address}</p>
              <p><strong>Phone:</strong> {location.phone}</p>
              <p><strong>Hours:</strong> {location.hours}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us text-white">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out to us at <a href="mailto:info@standgates.com">info@standgates.com</a>.</p>
      </section>
    </div>
  );
}

export default App;