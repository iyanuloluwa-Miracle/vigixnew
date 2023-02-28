import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeNav } from '../utility/svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BreadCrumb({ tab }) {
  const router = useRouter();

  return (
    <>
      <section className="primary-bg">
        <div className="container">
          <div className="row page-navigation align-items-center">
            <ul className="navbar-nav flex-row col">
              <li
                className={
                  tab == 'home'
                    ? ' nav-item home-nav-icon active'
                    : 'nav-item home-nav-icon'
                }
              >
                <Link href={'/'}>{HomeNav}</Link>
              </li>
              <li className={tab == 'users' ? 'nav-item active' : 'nav-item'}>
                <div className="parent">
                  <Link href={''}>Users</Link>
                  <div className="children">
                    <ul className="px-0">
                      <li>
                        <Link href={''}>Manage Users</Link>
                      </li>
                      <li>
                        <Link href={''}>Users</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={tab == 'reports' ? 'nav-item active' : 'nav-item'}>
                <div className="parent">
                  <Link href={''}>Reports</Link>
                </div>
              </li>
              <li
                className={
                  tab == 'pageManagement' ? 'nav-item active' : 'nav-item'
                }
              >
                <div className="parent"></div>
                <Link href={''}>Page Management</Link>
              </li>
              <li
                className={
                  tab == 'adminMembers' ? 'nav-item active' : 'nav-item'
                }
              >
                <div className="parent">
                  <Link href={''}>Admin Members</Link>
                </div>
              </li>
              <li className={tab == 'roles' ? 'nav-item active' : 'nav-item '}>
                <div className="parent">
                  <Link href={''}>Roles</Link>
                </div>
              </li>
              <li
                className={
                  tab == 'communications' ? 'nav-item active' : 'nav-item '
                }
              >
                <div className="parent">
                  <Link href={''}>Communications</Link>
                </div>
              </li>
              <li
                className={
                  tab == 'notifications' ? 'nav-item active' : 'nav-item '
                }
              >
                <div className="parent">
                  <Link href={''}>Notifications</Link>
                </div>
              </li>
              <li
                className={
                  tab == 'configurations' ? 'nav-item active' : 'nav-item '
                }
              >
                <div className="parent">
                  <Link href={''}>Configurations</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Dashboard</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
    </>
  );
}
