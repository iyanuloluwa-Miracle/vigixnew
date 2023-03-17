import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import { HomeNav } from '../utility/svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BreadCrumb({ tab, location }) {
  const router = useRouter();
  const [backdrop, setBackdrop] = useState(false);

  function MouseOver() {
    setBackdrop(true);
  }
  function MouseOut() {
    setBackdrop(false);
  }

  return (
    <>
      <section className="primary-bg">
        <div className="container">
          {/* <div
            className={backdrop ? 'backdrop d-block' : 'backdrop d-none'}
          ></div> */}

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
                  <div>
                    <Link href={''}>Users</Link>

                    <div className="children">
                      <div
                        className="backdrop"
                        // style={{
                        //   position: 'fixed',
                        //   top: '0px',
                        //   bottom: 'top',
                        //   right: '0px',
                        //   left: '0px',
                        //   opacity: 1,
                        // }}
                      />
                      <ul className="px-0">
                        <li>
                          <Link href={'/manage-users'}>Manage Users</Link>
                        </li>
                        <li>
                          <Link href={''}>Logged-In Users</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={tab == 'reports' ? 'nav-item active' : 'nav-item'}>
                <div className="parent">
                  <div>
                    <Link href={''}>Reports</Link>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="px-0">
                        <li>
                          <Link href={'/transaction-reports'}>
                            Transaction reports
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={
                  tab == 'pageManagement' ? 'nav-item active' : 'nav-item'
                }
              >
                <div className="parent">
                  <div>
                    <Link href={''}>Page Management</Link>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="px-0">
                        <li>
                          <Link href={'/page-management'}>Pages</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={
                  tab == 'adminMembers' ? 'nav-item active' : 'nav-item'
                }
                onMouseOver={() => MouseOver}
                onMouseOut={MouseOut}
              >
                <div className="parent">
                  <div>
                    <Link href={''}>Admin Members</Link>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="px-0">
                        <li>
                          <Link href={'/admin-members'}>Members</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={tab == 'roles' ? 'nav-item active' : 'nav-item '}>
                <div className="parent">
                  <div>
                    <Link href={''}>Roles</Link>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="px-0">
                        <li>
                          <Link href={'/roles'}>Roles</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={
                  tab == 'communications' ? 'nav-item active' : 'nav-item '
                }
              >
                <div className="parent">
                  <div>
                    <Link href={''}>Communications</Link>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="px-0">
                        <li>
                          <Link href={'/manage-users'}>Reports</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={
                  tab == 'notifications' ? 'nav-item active' : 'nav-item '
                }
              >
                <div className="parent">
                  <div>
                    <Link href={''}>Notifications</Link>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="px-0">
                        <li>
                          <Link href={'/manage-users'}>Reports</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={
                  tab == 'configurations' ? 'nav-item active' : 'nav-item '
                }
              >
                <div className="parent">
                  <div>
                    <Link href={''}>Configurations</Link>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="px-0" style={{ maxWidth: '100%' }}>
                        <li style={{ maxWidth: '100%' }}>
                          <Link href={'/app-configuration'}>
                            App Configuration{' '}
                          </Link>
                        </li>
                        <li style={{ maxWidth: '100%' }}>
                          <Link href={'/admin-configuration'}>
                            Admin Configuration{' '}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
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
            {location ? (
              location.map((el, index) => (
                <Breadcrumb.Item key={index}>
                  <a href={el.link}>{el.location}</a>
                </Breadcrumb.Item>
              ))
            ) : (
              <Breadcrumb.Item>
                <a href="">Dashboard</a>
              </Breadcrumb.Item>
            )}
          </Breadcrumb>
        </div>
      </section>
    </>
  );
}
