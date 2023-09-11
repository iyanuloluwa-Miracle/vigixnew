import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useContext, useEffect } from 'react';
import { NavDropdown, LogoutIcon } from '../utility/svg';
import SettingsVector from './Vectors/Settings';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Modal, Form, Button, Spin } from 'antd';
import { OverlayContext } from './Layout';
import api from '../apis';
import secureLocalStorage from 'react-secure-storage';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

export default function NavBar() {
  const { user, handleLogOut, setUser } = OverlayContext();
  const [loading, setLoading] = useState(false);
  const token = Cookies.get('token');

  const router = useRouter();

  const [logoutModal, setLogoutModal] = useState(false);

  const onFinish = async value => {
    setLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Adjust content type if needed
      },
    };

    console.log(requestOptions);

    try {
      const response = await fetch(
        `https://sea-turtle-app-7ta2e.ondigitalocean.app/api/user/logout-admin/${user.id}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Handle the response here if needed
      const responseData = await response.json(); // Parse response data if it's JSON
      console.log('Response Data:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }

    // fetch(
    //   `https://sea-turtle-app-7ta2e.ondigitalocean.app/api/user/logout-admin/${user.id}`,
    //   requestOptions
    // )
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json(); // You can remove this line if not expecting a response body
    //   })
    //   .then(data => {
    //     // Handle the response data here
    //     console.log('Response:', data);
    //   })
    //   .catch(error => {
    //     // Handle errors here
    //     console.error('Error:', error);
    //   });

    // const apiUrl = 'https://sea-turtle-app-7ta2e.ondigitalocean.app/api';
    // const axiosInstance = axios.create({
    //   baseURL: apiUrl,
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // axiosInstance
    //   .post(`/api/user/logout-admin/${user.id}`)
    //   .then(response => {
    //     // Handle the response here
    //     console.log('Response:', response.data);
    //     handleLogOut();
    //     setLogoutModal(false);
    //   })
    //   .catch(error => {
    //     // Handle errors here
    //     console.error('Error:', error);
    //     setLoading(false);
    //   });

    // try {
    //   const res = await api.post(
    //     `https://sea-turtle-app-7ta2e.ondigitalocean.app/api/user/logout-admin/${user.id}`,
    //     {},
    //     {
    //       Authorization: `Bearer ${token}`,
    //     }
    //   );

    //   console.log(res);

    //   toast.success(res?.data?.message);
    //   handleLogOut();
    //   setLogoutModal(false);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }

    setLoading(false);
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
  console.log(user);

  console.log(token);
  return (
    <header>
      <nav className="container">
        <div className="row justify-content-between gap-3 gap-lg-4">
          <div className="col-auto nav-logo">
            <Link href="/dashboard" passHref>
              <Image
                src={'/icons/VigilantAppLogo.svg'}
                alt="logo"
                height={38}
                width={220}
              />
            </Link>
          </div>

          <div className="col-auto r-side">
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
                    <h5>
                      {user?.first_name
                        ? `${user?.first_name} ${user?.last_name}`
                        : '--'}
                    </h5>
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
        onOk={() => {
          setLogoutModal(false);
        }}
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
            <Button
              htmlType="submit"
              className="me-3"
              style={{ background: '#7D0003', color: '#fff' }}
            >
              {loading ? (
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: '10px' }}
                >
                  <Spin className="white-spinner" style={{ color: 'white' }} />
                  Logout
                </div>
              ) : (
                <>Logout </>
              )}
            </Button>

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
