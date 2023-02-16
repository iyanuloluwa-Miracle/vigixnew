import React from 'react';
import styles from '../styles/vigilant.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container d-flex justify-content-center align-items-center">
        <p className="mb-0">
          2023 © powered by{' '}
          <span className="colored comp-name">Vigilant Technologies</span>{' '}
        </p>
      </div>
    </footer>
  );
}
