import React, { useContext } from 'react';
import { OverlayContext } from './Layout';
import moment from 'moment';
import secureLocalStorage from 'react-secure-storage';
import { companyEnum } from '../utility/enum';

export default function Welcome() {
  const { user, userData } = OverlayContext();

  // Get the current date and time
  const currentDateTime = moment();

  // Format the current date and time
  const formattedDateTime = currentDateTime.format('dddd, MMMM D YYYY');

  return (
    <section className="welcom__block">
      <div className="container">
        <div className="subs row">
          <div className="col-auto">
            <span>
              {companyEnum[user?.entity_id]}
              {/* {user?.entity_id == 1
                ? 'CBN'
                : user?.entity_id == 2
                ? 'NPF'
                : user?.entity_id == 3
                ? 'VIGILANT'
                : user?.entity_id == 4
                ? 'BANK'
                : ''}{' '}*/}
              / {user?.role?.name}
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
