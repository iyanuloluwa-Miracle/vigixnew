import Image from 'next/image';
import React, { useContext } from 'react';
import {
  CardIcon1,
  CardIcon2,
  CardIcon3,
  CardIcon4,
  highs,
  lows,
} from '../utility/svg';

import { OverlayContext } from './Layout';

export default function Cards() {
  const { progressIndicator } = useContext(OverlayContext);

  console.log(progressIndicator);

  // useEffect(() => {
  // setUser({ name: 'specter', role: 'admin' });
  // }, []);

  return (
    <div className="container">
      <div className="row carding my-4">
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="d-flex justify-content-between ">
              <div className="col-auto card-icon">{CardIcon1}</div>
              <div className="col-auto stat">
                <p className="highs">
                  <span className="me-1">{highs}</span>
                  {progressIndicator?.users?.percentage || '0'}%
                </p>
                <p>+500 Today</p>
              </div>
            </div>
            <h3>{progressIndicator?.users?.totalUsers || '--'}</h3>
            <h6>Total Users</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="d-flex justify-content-between ">
              <div className="col-auto card-icon">{CardIcon2}</div>
              <div className="col-auto stat">
                <p className="lows">
                  <span className="me-1">{lows}</span>18%
                </p>
                <p>+234 Today</p>
              </div>
            </div>
            <h3>{progressIndicator?.reports?.totalReports || '--'}</h3>
            <h6>Total Reports</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="d-flex justify-content-between ">
              <div className="col-auto card-icon">{CardIcon3}</div>
              <div className="col-auto stat">
                <p className="highs">
                  <span className="me-1">{highs}</span>20%
                </p>
                <p>+1234 Today</p>
              </div>
            </div>
            <h3>{progressIndicator?.recoveries?.totalRecoveries || '--'}</h3>
            <h6>Total Recoveries</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="d-flex justify-content-between ">
              <div className="col-auto card-icon">{CardIcon4}</div>
              <div className="col-auto stat">
                <p className="lows">
                  <span className="me-1">{lows}</span>18%
                </p>
                <p>+234 Today</p>
              </div>
            </div>
            <h3>{progressIndicator?.admin?.totalAdminMembers || '--'}</h3>
            <h6>Total Admin Members</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
