import React, { useContext } from 'react';
import { OverlayContext } from './Layout';

export default function Welcome() {
  const { user } = useContext(OverlayContext);

  return (
    <section className="welcom__block">
      <div className="container">
        <div className="subs row">
          <div className="col-auto">
            <span>{user?.company} / PRODUCT DESIGNER</span>
          </div>
          <div className="col-auto left-to-right">
            <span>Thursday, February 2 2023</span>
          </div>
        </div>
        <h2>
          Welcome back,
          <span> {user?.names}</span>
        </h2>
        <p>
          Keeping careful watch for possible dangers or difficulties. Also
          represent protection, safety, security and strength.{' '}
        </p>
      </div>
    </section>
  );
}
