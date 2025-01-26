import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Valida que el email tenga el formato correcto
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(email)) {
      setSubscribed(true);
    } else {
      alert('Por favor ingresa un correo válido');
    }
  };

  return (
    <div className="container">
      {!subscribed ? (
        <div className="subscribe-box">
          <div className="icon">📧</div>
          <h2>SUBSCRIBE</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      ) : (
        <div className="success-message">
          <div className="icon">
            <span role="img" aria-label="checkmark">✅</span>
          </div>
          <h1 className="title">¡Gracias por suscribirte!</h1>
          <p className="message">Ahora estarás al tanto de todas nuestras novedades.</p>
          <p className="message">¡Estamos emocionados de tenerte con nosotros!</p>
          <p className="sub-message">*No olvides revisar tu bandeja de entrada para recibir las últimas actualizaciones.</p>
        </div>
      )}

      <footer>
        <small>© 2025 Subscribe Form. All Rights Reserved. Designed By EquipoDotGuru.</small>
      </footer>
    </div>
  );
}

export default App;
