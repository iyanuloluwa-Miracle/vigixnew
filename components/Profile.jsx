import { Button, Modal, Form, Input, DatePicker, Radio } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useContext, useEffect } from 'react';
import { OverlayContext } from './Layout';
import { LockIcon } from '../utility/svg';

export default function Profile({ activeStatus }) {
  const { isActive, setIsActive } = useContext(OverlayContext);
  // const [isActive, setIsActive] = useState(true);
  const [confirmDeactivation, setConfirmDeactivation] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddPage, setModalAddPage] = useState(false);
  const [value, setValue] = useState(1);

  const router = useRouter();

  const deactivate = () => {
    // setIsActive(!isActive);
    setModalOpen(true);
  };

  const activate = () => {
    // setIsActive(!isActive);
    setConfirmDeactivation(false);
    setModalOpen(true);
  };

  const onRadioChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const confirmDeactivate = () => {
    setIsActive(false);
    setConfirmDeactivation(true);
  };

  const confirmactivate = () => {
    setIsActive(true);
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
            src={'/icons/deactivate-icon.png'}
            alt="Deactivate account"
            width={160}
            height={160}
            style={{ maxWidth: '100%' }}
          />
        </div>
        <p>Are you sure you want to deactivate this user?</p>

        <div className="buttons">
          <Button className="cont" onClick={() => confirmDeactivate()}>
            Deactivate
          </Button>
          <Button onClick={() => setModalOpen(false)}>Cancel</Button>
        </div>
      </div>
    );
  };

  const onFinish = () => {
    console.log('nah so ');
  };

  const DeactivatedModal = () => {
    return (
      <div className="deactivate">
        <div className="img-wrap ">
          <Image
            src={'/icons/deactivated-icon.png'}
            alt="Account Deactivated"
            width={160}
            height={160}
            style={{ maxWidth: '100%' }}
          />
        </div>
        <p>
          The user{' '}
          <span className="our-primary-color text-decoration-underline">
            Atanda Damilare
          </span>{' '}
          has been successfully deactivated from the vigilant app and can no
          longer perform activities on the app
        </p>
        <div className="buttons">
          <Link href="/manage-users">
            <Button className="cont">Okay, Go to all users</Button>
          </Link>
        </div>
      </div>
    );
  };

  const ActivateModal = () => {
    return (
      <div className="deactivate activate">
        <div className="img-wrap mb-3">
          <Image
            src={'/icons/activate-icon.png'}
            alt="Deactivate account"
            width={160}
            height={160}
            style={{ maxWidth: '100%' }}
          />
        </div>
        <p>Are you sure you want to activate this user?</p>

        <div className="buttons">
          <Button
            className="acti"
            onClick={() => confirmactivate()}
            style={{ border: 'none' }}
          >
            Activate
          </Button>
          <Button onClick={() => setModalOpen(false)}>Cancel</Button>
        </div>
      </div>
    );
  };

  const ActivatedModal = () => {
    return (
      <div className="deactivate activate">
        <div className="img-wrap ">
          <Image
            src={'/icons/activated-icon.png'}
            alt="Deactivate account"
            width={140}
            height={140}
            style={{ maxWidth: '100%' }}
          />
        </div>
        <p>
          The user{' '}
          <span className="our-primary-color text-decoration-underline">
            Atanda Damilare
          </span>{' '}
          has been successfully activated and can now perform activities on the
          app
        </p>

        <div className="buttons">
          <Button
            className="cont"
            onClick={() => {
              setConfirmDeactivation(false);
              router.push('/manage-users');
            }}
          >
            Okay, Go to all users
          </Button>
        </div>
      </div>
    );
  };

  const cancelModal = () => {
    setConfirmDeactivation(false);
    setModalOpen(false);
  };

  return (
    <div className="row user-profile">
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
        <div className="active-status">
          {activeStatus == 'online' ? (
            <p className="online">Online</p>
          ) : (
            <p className="offline">Offline</p>
          )}
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
          <h5>Phone number:</h5>
          <p>+2348123456790</p>
        </div>
        <div>
          <h5>Date registered:</h5>
          <p>June 17, 2022</p>
        </div>
        <div>
          <h5>No of report:</h5>
          <p>15</p>
        </div>
        <div>
          <h5>No of recoveries:</h5>
          <p>13</p>
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
        <div className={isActive ? 'deactivate' : 'deactivate activate'}>
          <Button className="edit-user" onClick={() => setModalAddPage(true)}>
            Edit user
          </Button>
          {isActive ? (
            <Button onClick={() => deactivate()}>Deactivate</Button>
          ) : (
            <Button onClick={() => activate()}>Activate</Button>
          )}
        </div>
      </div>

      <Modal
        title={
          <div className="text-center">
            {confirmDeactivation ? 'Account Deactivated' : 'Deactivate account'}
          </div>
        }
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        className="our-modal"
        footer={null}
        onCancel={() => cancelModal()}
      >
        {isActive && !confirmDeactivation && <DeactivateModal />}
        {!isActive && confirmDeactivation && <DeactivatedModal />}
        {!isActive && !confirmDeactivation && <ActivateModal />}
        {isActive && confirmDeactivation && <ActivatedModal />}
      </Modal>

      <Modal
        centered
        open={modalAddPage}
        onOk={() => setModalAddPage(false)}
        onCancel={() => {
          setModalAddPage(false);
        }}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Edit User</h4>
          <p>Fill the fields below to edit this user.</p>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="fullName" label="Full name" className="heights">
            <Input placeholder="Full name" />
          </Form.Item>

          <Form.Item name="email" label="Email address" className="heights">
            <Input placeholder="Enter email" type="email" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone number"
            className="heights"
          >
            <Input placeholder="234 8123456790" />
          </Form.Item>

          <div className="d-flex flex-wrap justify-content-between">
            <div className="col-6">
              <Form.Item
                name="passwordReset"
                label="Password reset"
                className="heights"
              >
                <Radio.Group onChange={onRadioChange} value={value}>
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item
                name="emailVerification"
                label="Email verification"
                className="heights"
              >
                <Radio.Group onChange={onRadioChange} value={value}>
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>

          <Form.Item
            name="blockedTime"
            label="Login blocked time"
            className="heights"
          >
            <Input placeholder="4" type="number" />
          </Form.Item>

          <Form.Item
            name="loginCountFailed"
            label="Login count failed"
            className="heights"
          >
            <Input placeholder="4" type="number" />
          </Form.Item>

          <Form.Item
            name="OTP"
            label="One time password  (OTP)"
            className="heights"
          >
            <Input
              placeholder="- - - - - - "
              type="number"
              style={{ textAlign: 'center' }}
            />
            <div className="mt-2">
              <span className="auto-generate">
                {LockIcon}
                Autogenerate OTP
              </span>
            </div>
          </Form.Item>

          <Form.Item
            name="OTP"
            label="OTP expiry time"
            className="heights date"
          >
            <DatePicker placeholder="2023-03-13" />
          </Form.Item>

          <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 my-4"
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
