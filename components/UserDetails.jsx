import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { back } from '../utility/svg';
import { Tabs, Button } from 'antd';
import Profile from './Profile';
import UsersReport from './UsersReport';
import UserDevice from './UserDevice';
import { useRouter } from 'next/router';
import { OverlayContext } from './Layout';

export default function UserDetails() {
  const { defaultUserTab } = useContext(OverlayContext);

  return (
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
            <h4 className="_tabs">User Details</h4>
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
            <Tabs.TabPane tab="Profile" key="1">
              <Profile activeStatus={'online'} />
            </Tabs.TabPane>

            <Tabs.TabPane tab="Reports" key="2">
              <UsersReport />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Device" key="3">
              <UserDevice />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
