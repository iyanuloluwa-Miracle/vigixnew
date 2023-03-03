import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

export default function Profile() {
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
          <h5>Last seen:</h5>
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
          <p className="status active">• Active</p>
        </div>
        <div className="deactivate">
          <Button>Deactivate</Button>
        </div>
      </div>
    </div>
  );
}
