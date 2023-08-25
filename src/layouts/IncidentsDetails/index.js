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

export default function IncidentsDetails() {
  const { defaultUserTab } = useContext(OverlayContext);

  return (
    <>
      <IncidentsDetailsWrapper>
        <Welcome />
        <BreadCrumb />
        <section>
          <div className="container">
            <div className="row justify-content-between details-header">
              <div className="col-auto go-back">
                <Button href={''}>
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
                  <Details />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Status" key="2">
                  <Status />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Comments" key="3">
                  <Comments />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Incident Logs" key="4">
                  <Logs />
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </section>
      </IncidentsDetailsWrapper>
    </>
  );
}
