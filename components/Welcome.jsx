import React, { useContext } from 'react';
import { OverlayContext } from './Layout';
import moment from 'moment';
import secureLocalStorage from 'react-secure-storage';
import { companyEnum } from '../utility/enum';

export default function Welcome() {
  const { user, userData } = OverlayContext();

  // Get the current date and time
  const currentDateTime = moment();
  const currentDateTime2 = moment();

  // Format the current date and time
  const formattedDateTime = currentDateTime.format('dddd, MMMM D YYYY');
  const formattedTime = currentDateTime.format('hh:mmA');

  return (
    <section className="welcom__block">
      <div className="container">
        <div className="subs row">
          <div className="col-auto">
            <h2 class="text-dark text-uppercase" style={{ fontSize: "25px", fontWeight: "700" }}>
              {user?.first_name
                ? `${user?.first_name} ${user?.last_name}`
                : '--'}
            </h2>

          </div>
          <div className="col-auto">
            <h1>{formattedTime}</h1>
          </div>
        </div>
        <span class="mb-5">
          {companyEnum[user?.role?.entity_id]}
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
        <div className="col-auto left-to-right">
          <span>{formattedDateTime}</span>
        </div>
      </div>
    </section>
  );
}
