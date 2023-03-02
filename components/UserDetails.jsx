import Link from 'next/link';
import React from 'react';
import { back } from '../utility/svg';
import { Tabs } from 'antd';

export default function UserDetails() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-between details-header">
          <div className="col-auto go-back">
            <Link href={''}>
              {back}
              <span>Go back</span>
            </Link>
          </div>
          <div className="col-auto">
            <h4 className="_tabs">User Details</h4>
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
              <div>tab 1</div>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Reports" key="item-2">
              <div>tab 2</div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Device" key="item-3">
              <div>tab 3</div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
