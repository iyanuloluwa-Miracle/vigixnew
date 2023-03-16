import { Button, Modal, Form, Input, Select } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useContext, useEffect } from 'react';
import { OverlayContext } from './Layout';
import { CopyIcon, LockIcon } from '../utility/svg';

export default function AdminProfile() {
  const { isActive, setIsActive } = useContext(OverlayContext);
  const [modalAddPage, setModalAddPage] = useState(false);

  // const [isActive, setIsActive] = useState(true);
  const [confirmDeactivation, setConfirmDeactivation] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const router = useRouter();

  const onFinish = values => {
    console.log('Success:', values);
    setTimeout(() => {
      setConfirmed(false);
    }, 1000);
    setModalOpen(false);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const deactivate = () => {
    // setIsActive(!isActive);
    setModalOpen(true);
  };

  const activate = () => {
    setModalOpen(true);
  };

  const confirmDeactivate = () => {
    setIsActive(false);
    setConfirmDeactivation(true);
  };

  useEffect(() => {
    setConfirmDeactivation(false);
  }, []);

  const DeactivateModal = () => {
    return (
      <div className="deactivate">
        <div className="img-wrap ">
          <Image
            src={'/icons/secure.svg'}
            alt="Deactivate account"
            width={160}
            height={160}
            style={{ maxWidth: '100%' }}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="buttons">
          <Button className="cont" onClick={() => setConfirmed(true)}>
            Change password
          </Button>
          <Button
            onClick={() => setModalOpen(false)}
            // style={{ borderColor: 'white' }}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  const PasswordChanged = () => {
    return (
      <>
        <div className="headings text-center">
          <h4>Password Change</h4>
          <p>The new password is displayed below</p>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="password"
            label="New password"
            className="heights mb-3"
          >
            <Input placeholder="a138der4d-3544SD" />
          </Form.Item>
          <div className="d-flex justify-content-between mb-4 ">
            <div>
              <span className="auto-generate">
                {LockIcon}
                Autogenerate password
              </span>
            </div>
            <div className="copy">
              <Button icon={CopyIcon}>Copy</Button>
            </div>
          </div>

          <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 mt-4 mb-lg-5 mb-4"
            // onClick={}
          >
            Done, Thank you!
          </Button>
        </Form>
      </>
    );
  };

  const cancelModal = () => {
    setConfirmDeactivation(false);
    setModalOpen(false);
  };

  console.log(confirmDeactivation, isActive);

  return (
    <div className="row user-profile admin-profile">
      <div className="col-sm-auto">
        <div className="img-wrap">
          <Image
            width={120}
            height={120}
            alt="dp"
            src={'/images/user_dp.png'}
            quality={100}
            priority
            object-fit={'cover'}
            style={{ border: '1px solid #7D0003', borderRadius: '50%' }}
          />
        </div>
      </div>
      <div className="col det">
        <div>
          <h5>First name:</h5>
          <p>Specter</p>
        </div>
        <div>
          <h5>Last name:</h5>
          <p>Atanda</p>
        </div>
        <div>
          <h5>Email address:</h5>
          <p>ongodspecter@gmail.com</p>
        </div>
        <div>
          <h5>Company::</h5>
          <p>+Vigilant</p>
        </div>
        <div>
          <h5>Role access::</h5>
          <p>Product designer</p>
        </div>
        <div>
          <h5>Date registered::</h5>
          <p>June 17, 2022</p>
        </div>
        <div>
          <h5>Last seen::</h5>
          <p>June 17, 2022 21:43:28</p>
        </div>
        <div>
          <h5>Login Count:</h5>
          <p>3</p>
        </div>
        <div>
          <h5>Total Login attempt:</h5>
          <p>2</p>
        </div>
        <div>
          <h5>Total login failed:</h5>
          <p>4</p>
        </div>
        <div>
          <h5>Login block time:</h5>
          <p>12:34</p>
        </div>
        <div>
          <h5>Status:</h5>
          {isActive ? (
            <p className="status active">• Active</p>
          ) : (
            <p className="status inactive">• Inactive</p>
          )}
        </div>
        <div className="buttons">
          <Button className="edit-members">Edit member</Button>
          {isActive ? (
            <div className="deactivate">
              <Button onClick={() => deactivate()}>Deactivate</Button>
            </div>
          ) : (
            <div className="deactivate activate">
              <Button onClick={() => activate()}>Activate</Button>
            </div>
          )}
          <Button className="change-pass" onClick={() => setModalOpen(true)}>
            Change Password
          </Button>
        </div>
      </div>

      <Modal
        title={
          !confirmed ? <div className="text-center">Change Password</div> : ''
        }
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        className={!confirmed ? 'our-modal' : 'our-modal add-page-modal'}
        footer={null}
        onCancel={() => cancelModal()}
      >
        {!confirmed ? <DeactivateModal /> : <PasswordChanged />}
      </Modal>
    </div>
  );
}
