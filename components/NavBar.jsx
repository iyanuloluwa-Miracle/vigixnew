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

export default function NavBar() {
  const { user, handleLogOut, setUser } = OverlayContext();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [logoutModal, setLogoutModal] = useState(false);

  const onFinish = async value => {
    setLoading(true);

    try {
      const res = await api.get(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/logout',
        {
          Authorization: `Bearer ${JSON.parse(
            secureLocalStorage.getItem('Token')
          )}`,
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );

      console.log(res);

      toast.success(res?.data?.message);
      handleLogOut();
      setLogoutModal(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.data?.message[0]);
    } finally {
      setLoading(false);
    }
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

  // useEffect(() => {
  //   setUser(JSON.parse(secureLocalStorage.getItem('VigUser')));
  // }, []);

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
