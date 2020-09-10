import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">Ingresa tu mail</p>
          <p className="footer-subscription-text">
            y se parte de esta comunidad
          </p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Tu mail"
                className="footer-input"
              />
              <Button buttonStyle="btn--outline">Enviar</Button>
            </form>
          </div>
        </section>
        {/* <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Sobre Nosotros</h2>
              <Link to="/Login">Ingresa a tu cuenta</Link>
              <Link to="/Login">Contáctanos</Link>
            </div>
          </div>
        </div> */}
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link className="social-logo">
                MaipoGrande ®<i className="fab fa-typo3" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Footer
