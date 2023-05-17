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

  return (
    <div className="container">
      <div className="row carding my-4">
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="d-flex justify-content-between ">
              <div className="col-auto card-icon">{CardIcon1}</div>
              <div className="col-auto stat">
                <p
                  className={
                    progressIndicator?.users?.guage == 'Negative'
                      ? 'lows'
                      : 'highs'
                  }
                >
                  <span className="me-1">
                    {progressIndicator?.users?.guage == 'Negative'
                      ? lows
                      : highs}
                  </span>
                  {progressIndicator?.users?.percentage || '0'}%
                </p>
                <p>
                  +{progressIndicator?.users?.totalUsersForToday || '0'} Today
                </p>
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
                <p
                  className={
                    progressIndicator?.reports?.guage == 'Negative'
                      ? 'lows'
                      : 'highs'
                  }
                >
                  <span className="me-1">
                    {progressIndicator?.reports?.guage == 'Negative'
                      ? lows
                      : highs}
                  </span>
                  {progressIndicator?.reports?.percentage || '0'}%
                </p>
                <p>
                  +{progressIndicator?.reports?.totalReportsForToday || '0'}{' '}
                  Today
                </p>
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
                <p
                  className={
                    progressIndicator?.recoveries?.guage == 'Negative'
                      ? 'lows'
                      : 'highs'
                  }
                >
                  <span className="me-1">
                    {progressIndicator?.recoveries?.guage == 'Negative'
                      ? lows
                      : highs}
                  </span>
                  {progressIndicator?.recoveries?.percentage || '0'}%
                </p>
                <p>
                  +{progressIndicator?.recoveries?.totalReportsForToday || '0'}{' '}
                  Today
                </p>
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
                <p
                  className={
                    progressIndicator?.admin?.guage == 'Negative'
                      ? 'lows'
                      : 'highs'
                  }
                >
                  <span className="me-1">
                    {progressIndicator?.admin?.guage == 'Negative'
                      ? lows
                      : highs}
                  </span>
                  {progressIndicator?.admin?.percentage || '0'}%
                </p>
                <p>
                  +{progressIndicator?.admin?.totalReportsForToday || '0'} Today
                </p>
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
