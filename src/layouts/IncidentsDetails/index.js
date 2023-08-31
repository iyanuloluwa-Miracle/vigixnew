import BreadCrumb from '../../../components/BreadCrumb';
import Welcome from '../../../components/Welcome';
import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { back } from '../../../utility/svg';
import { Tabs, Button } from 'antd';
import UsersReport from '../../../components/UsersReport';
import UserDevice from '../../../components/UserDevice';
import { useRouter } from 'next/router';
import { OverlayContext } from '../../../components/Layout';
import UserBVN from '../../../components/UserBVN';
import { IncidentsDetailsWrapper } from './styles';
import Details from './Details';
import Comments from './Comments';
import Logs from './Logs';
import Status from './Status';
import api from '../../../apis';
import { useQuery } from '@tanstack/react-query';

export default function IncidentsDetails() {
  const router = useRouter();
  const { query } = router;
  const { defaultUserTab } = OverlayContext();
  const [search_query, setSearchQuery] = useState(null);
  const [incidentData, setIncidentData] = useState([]);

  function generateRandom20DigitNumber() {
    let randomNumber = '';
    for (let i = 0; i < 20; i++) {
      randomNumber += Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9
    }
    return randomNumber;
  }

  const { data: fetcIncident, isLoading: loadingIncident } = useQuery({
    queryKey: ['get_incidents', search_query],
    queryFn: () => {
      return api.fetchSingleIncidents(null, router.query?.incidentId);
    },
    onSuccess: data => {
      setIncidentData(data?.data[0]);
    },
    onError: err => {
      console.log(err);
    },
    retry: false,
    refetchInterval: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  return (
    <>
      <IncidentsDetailsWrapper>
        {/* <Welcome /> */}
        <BreadCrumb />
        <section>
          <div className="container">
            <div className="row justify-content-between details-header">
              <div className="col-auto go-back">
                <Button onClick={() => router.back()}>
                  {back}
                  <span>Go back</span>
                </Button>
              </div>
              <div className="col-auto">
                <h4 className="_tabs">Incident Details</h4>
              </div>
              <div className="col-auto go-back d-none d-lg-block">
                <Link href={'/'} style={{ visibility: 'hidden' }}>
                  {back}
                  <span>Go back</span>
                </Link>
              </div>
            </div>
            <div className="user-details-content">
              <Tabs defaultActiveKey={defaultUserTab}>
                <Tabs.TabPane tab="Details" key="1">
                  <Details data={incidentData} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Comments" key="2">
                  <Comments data={incidentData} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Incident Logs" key="3">
                  <Logs data={incidentData} />
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </section>
      </IncidentsDetailsWrapper>
    </>
  );
}
