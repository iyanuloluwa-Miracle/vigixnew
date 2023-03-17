import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NavDropdown, LogoutIcon } from '../utility/svg';
import SettingsVector from './Vectors/Settings';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export default function NavBar() {
  const items = [
    {
      key: '1',
      label: <Link href="/login">{LogoutIcon} Logout</Link>,
    },
  ];
  return (
    <header>
      <nav className="container">
        <div className="row justify-content-between gap-3 gap-lg-4">
          <div className="col-auto nav-logo">
            <Link href="/" passHref>
              <Image
                src={'/icons/VigilantAppLogo.svg'}
                alt="logo"
                height={38}
                width={220}
              />
              {/* <button className="navbar-brand aeonik-bold"> {NavLogo}</button> */}
            </Link>
          </div>

          <div className="col-auto r-side">
            {/* <div>
              <SettingsVector />
            </div> */}

            <Dropdown
              menu={{
                items,
              }}
              overlayClassName="logout-icon"
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  <div className="dp">
                    <Image
                      src={'/icons/nav-dp.png'}
                      alt="dp"
                      height={32}
                      width={32}
                      objectFit="cover"
                      quality={100}
                      priority={true}
                    />
                  </div>
                  <div>
                    <h5>Atanda Damilare</h5>
                    {/* <h6>Product Designer</h6> */}
                  </div>
                  {NavDropdown}
                </Space>
              </a>
            </Dropdown>

            <div className="details d-flex align-items-center gap-2"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
