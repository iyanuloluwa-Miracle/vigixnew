import Image from 'next/image';
import React, { useContext, useState, useEffect } from 'react';
import {
  CardIcon1,
  CardIcon2,
  CardIcon3,
  CardIcon4,
  highs,
  lows,
} from '../utility/svg';
import {
  fetchTotalUsers,
  fetchTotalAdminUsers,
  fetchTotalIncidents,
  fetchTotalRecoveries,
} from "../apis"
import { OverlayContext } from './Layout';
import Cookies from 'js-cookie';

export default function Cards() {
  const { progressIndicator } = OverlayContext();
  const [totalUsers, setTotalUsers] = useState("--")
  const [totalAdminUsers, setTotalAdminUsers] = useState("--")
  const [totalIncidents, setTotalIncidents] = useState("--")
  const [totalRecoveries, setTotalRecoveries] = useState("--")
  const { user } = OverlayContext();
  const token = Cookies.get('token');
  console.log(totalUsers, totalAdminUsers, totalIncidents, totalRecoveries)

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      const usersData = await fetchTotalUsers(token);
      const adminUsersData = await fetchTotalAdminUsers(token);
      const incidentsData = await fetchTotalIncidents(token);
      const recoveriesData = await fetchTotalRecoveries(token);

      setTotalUsers(usersData.data);
      setTotalAdminUsers(adminUsersData.data);
      setTotalIncidents(incidentsData.data);
      setTotalRecoveries(recoveriesData.data);
    };

    if (user?.entity_id === 3) {
      fetchData();
    }
  }, [token, user?.entity_id]);

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
            <h3>{user?.entity_id == 3 ? (totalUsers) : ('--')}</h3>
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
            <h3>{user?.entity_id == 3 ? (totalIncidents) : ('--')}</h3>
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
            <h3>{user?.entity_id == 3 ? (totalRecoveries) : ('--')}</h3>
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
            <h3>{user?.entity_id == 3 ? (totalAdminUsers) : ("--")}</h3>
            <h6>Total Admin Members</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
