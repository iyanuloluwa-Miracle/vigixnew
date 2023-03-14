import { Button, Modal } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useContext, useEffect } from 'react';
import { OverlayContext } from './Layout';

export default function AdminProfile() {
  const { isActive, setIsActive } = useContext(OverlayContext);
  // const [isActive, setIsActive] = useState(true);
  const [confirmDeactivation, setConfirmDeactivation] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="buttons">
          <Button className="cont" onClick={() => confirmDeactivate()}>
            Deactivate
          </Button>
          <Button onClick={() => setModalOpen(false)}>Cancel</Button>
        </div>
      </div>
    );
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
          has been successfully suspended from the vigilant app and can no
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

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
          <Button className="change-pass">Change Password</Button>
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
    </div>
  );
}
