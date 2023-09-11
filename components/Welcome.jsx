import React, { useContext } from 'react';
import { OverlayContext } from './Layout';
import moment from 'moment';

export default function Welcome() {
  const { user, userData } = OverlayContext();

  // Get the current date and time
  const currentDateTime = moment();

  // Format the current date and time
  const formattedDateTime = currentDateTime.format('dddd, MMMM D YYYY');

  console.log({ user });
  console.log({ userData });

  return (
    <section className="welcom__block">
      <div className="container">
        <div className="subs row">
          <div className="col-auto">
            <span>
              {/* {user?.company} */}
              Vigilant / {user?.role?.name}
            </span>
          </div>
          <div className="col-auto left-to-right">
            <span>{formattedDateTime}</span>
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
