import Link from 'next/link';
import React from 'react';
import { back } from '../utility/svg';
import { Tabs, Button } from 'antd';
import { useRouter } from 'next/router';

import UserDevice from './UserDevice';
import AdminProfile from './AdminProfile';
import AdminMemberReport from './AdminMemberReport';

export default function AdminDetails() {
  const router = useRouter();

  return (
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
            <h4 className="_tabs">Member Details</h4>
          </div>
          <div className="col-auto go-back d-none d-lg-block">
            <Link href={''} style={{ visibility: 'hidden' }}>
              {back}
              <span>Go back</span>
            </Link>
          </div>
        </div>
        <div className="user-details-content">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Profile" key="item-1">
              <AdminProfile />
            </Tabs.TabPane>

            {/* <Tabs.TabPane tab="Activities" key="item-2">
              <AdminMemberReport />
            </Tabs.TabPane> */}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
