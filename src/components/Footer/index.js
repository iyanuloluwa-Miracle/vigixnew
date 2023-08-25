import React from 'react';
import { FooterWrapper } from './styles';

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <FooterWrapper>
      <footer>
        <div className="container d-flex justify-content-center align-items-center">
          <p className="mb-0">
            {currentYear} © powered by{' '}
            <span className="colored comp-name">Vigilant Technologies</span>{' '}
          </p>
        </div>
      </footer>
    </FooterWrapper>
  );
}
