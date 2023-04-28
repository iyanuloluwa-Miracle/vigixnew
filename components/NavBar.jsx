import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { NavDropdown, LogoutIcon } from '../utility/svg';
import SettingsVector from './Vectors/Settings';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Modal, Form, Button } from 'antd';
import { OverlayContext } from './Layout';

export default function NavBar() {
  const { user } = useContext(OverlayContext);

  const [logoutModal, setLogoutModal] = useState(false);

  const onFinish = value => {
    console.log(value);
    setLogoutModal(false);
  };

  const items = [
    {
      key: '1',
      label: (
        <div
          onClick={() => {
            setLogoutModal(true);
          }}
        >
          {LogoutIcon} Logout
        </div>
      ),
    },
  ];

  return (
    <header>
      <nav className="container">
        <div className="row justify-content-between gap-3 gap-lg-4">
          <div className="col-auto nav-logo">
            <Link href="/home" passHref>
              <Image
                src={'/icons/VigilantAppLogo.svg'}
                alt="logo"
                height={38}
                width={220}
              />
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
              <a>
                <Space>
                  <div className="dp">
                    <Image
                      src={'/icons/nav-dp.png'}
                      alt="dp"
                      height={32}
                      width={32}
                      style={{ objectFit: 'contain' }}
                      quality={100}
                      priority={true}
                    />
                  </div>
                  <div>
                    <h5>{user?.names || '--'}</h5>
                  </div>
                  {NavDropdown}
                </Space>
              </a>
            </Dropdown>

            <div className="details d-flex align-items-center gap-2"></div>
          </div>
        </div>
      </nav>

      <Modal
        title={<div className="text-center">Logout</div>}
        centered
        open={logoutModal}
        onOk={() => setLogoutModal(false)}
        onCancel={() => setLogoutModal(false)}
        className="our-modal logout"
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <div className="logout-modal">
            <Image
              src={'/images/logout.png'}
              alt="logout image"
              width={140}
              height={140}
            />
            <p>Are you sure you want to logout?</p>
          </div>

          <Form.Item className="buttons logout-buttons">
            <Link href="/">
              <Button
                htmlType="submit"
                className="me-3"
                style={{ background: '#7D0003', color: '#fff' }}
              >
                Logout
              </Button>
            </Link>

            <Button
              type="primary"
              onClick={() => setLogoutModal(false)}
              style={{ background: '#FFF', color: '#1C1C1C' }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </header>
  );
}
