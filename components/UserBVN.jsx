import { Button, Modal, Form, Input, DatePicker } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useContext, useEffect } from 'react';
import { OverlayContext } from './Layout';

export default function UserBVN({ activeStatus }) {
  const { isActive, setIsActive } = OverlayContext();
  // const [isActive, setIsActive] = useState(true);
  const [confirmDeactivation, setConfirmDeactivation] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const deactivate = () => {
    // setIsActive(!isActive);
    setModalOpen(true);
  };

  const activate = () => {
    // setIsActive(!isActive);
    setConfirmDeactivation(false);
    setModalOpen(true);
  };

  return (
    <div className="row user-profile mb-4">
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
        {/* <div className="active-status">
          {activeStatus == 'online' ? (
            <p className="online">Online</p>
          ) : (
            <p className="offline">Offline</p>
          )}
        </div> */}
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
          <h5>Middle Name:</h5>
          <p>Ayomikun</p>
        </div>

        <div>
          <h5>Gender:</h5>
          <p>Male</p>
        </div>
        <div>
          <h5>Name on card:</h5>
          <p>Atanda Damilare</p>
        </div>
        <div>
          <h5>Bank Verification Number:</h5>
          <p>1234567890</p>
        </div>
        <div>
          <h5>NIN:</h5>
          <p>1234 5678 9012 3456</p>
        </div>
      </div>
    </div>
  );
}
