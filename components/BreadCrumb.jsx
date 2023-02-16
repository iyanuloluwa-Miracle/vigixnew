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
                <Link href={''}>Users</Link>
              </li>
              <li className={tab == 'reports' ? 'nav-item active' : 'nav-item'}>
                <Link href={''}>Reports</Link>
              </li>
              <li
                className={
                  tab == 'pageManagement' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href={''}>Page Management</Link>
              </li>
              <li
                className={
                  tab == 'adminMembers' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href={''}>Admin Members</Link>
              </li>
              <li className={tab == 'roles' ? 'nav-item active' : 'nav-item '}>
                <Link href={''}>Roles</Link>
              </li>
              <li
                className={
                  tab == 'communications' ? 'nav-item active' : 'nav-item '
                }
              >
                <Link href={''}>Communications</Link>
              </li>
              <li
                className={
                  tab == 'notifications' ? 'nav-item active' : 'nav-item '
                }
              >
                <Link href={''}>Notifications</Link>
              </li>
              <li
                className={
                  tab == 'configurations' ? 'nav-item active' : 'nav-item '
                }
              >
                <Link href={''}>Configurations</Link>
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
