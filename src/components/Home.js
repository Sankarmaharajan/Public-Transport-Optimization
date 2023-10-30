import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: "url('https://web-assets.bcg.com/d3/dc/ff2806e24ee09f35f85222724590/solving-the-mobility-challenge-in-megacities-rectangle-opt.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#0eb718',
  };

  return (
    <div style={backgroundStyle}>
      <div className="container mt-5 text-center">
        <h1 className="mb-4 text-white">ROUTELINK</h1>
        <div className="d-grid gap-3 justify-content-center">
          <Link to="/login/user" className="btn btn-success btn-lg" style={buttonStyle}>User</Link>
          <Link to="/login/truck driver" className="btn btn-success btn-lg" style={buttonStyle}>Bus Driver</Link>
          <Link to="/login/municipality" className="btn btn-success btn-lg" style={buttonStyle}>Admin</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
