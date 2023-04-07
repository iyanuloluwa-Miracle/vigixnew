import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import { HomeNav } from '../utility/svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const reportStyles = {
  width: 'max-content',
};
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
                    <a>Users</a>

                    <div className="children">
                      <div className="backdrop" />
                      <ul className="">
                        <li>
                          <Link href={'/manage-users'}>Manage Users</Link>
                        </li>
                        {/* <li>
                          <Link href={''}>Logged-In Users</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={tab == 'reports' ? 'nav-item active' : 'nav-item'}>
                <div className="parent">
                  <div>
                    <a>Reports</a>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="transaction-list">
                        <li>
                          <Link href={'/transaction-reports'}>
                            Transaction reports
                          </Link>
                        </li>
                        <li>
                          <Link href={'/transaction-report-authorized'}>
                            Authorized Transaction reports
                          </Link>
                        </li>
                        <li>
                          <Link href={'/transaction-report-manual'}>
                            Manual Transaction reports
                          </Link>
                        </li>
                        <li>
                          <Link href={'/transaction-report-manual-authorized'}>
                            Authorized Manual Transaction reports
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
                    <a>Page Management</a>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="">
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
                    <a>Admin Members</a>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="">
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
                    <a>Roles</a>
                    <div className="children">
                      <div className="backdrop" />
                      <ul className="">
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
                    <a>Communications</a>
                    <div className="children">
                      <div className="backdrop" />
                      {/* <ul className="">
                        <li>
                          <Link href={'/manage-users'}>Reports</Link>
                        </li>
                      </ul> */}
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
                    <a>Notifications</a>
                    <div className="children">
                      <div className="backdrop" />
                      {/* <ul className="">
                        <li>
                          <Link href={'/manage-users'}>Reports</Link>
                        </li>
                      </ul> */}
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
                    <a>Configurations</a>
                    <div className="children last">
                      <div className="backdrop" />
                      <ul className="" style={{ maxWidth: '100%' }}>
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
