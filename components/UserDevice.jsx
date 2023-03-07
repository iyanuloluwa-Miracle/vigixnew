import { Button } from 'antd';
import React from 'react';

export default function UserDevice() {
  return (
    <div className="user-device">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="our-h4">Device Details</h4>
            <div className="device">
              <div>
                <h5>Device Name:</h5>
                <p>Iphone 12 pro max - 12345</p>
              </div>
              <div>
                <h5>Mac Address:</h5>
                <p>123:456:789:0</p>
              </div>
              <div>
                <h5>Serial number:</h5>
                <p>1234567890123456790</p>
              </div>
              <div className="">
                <Button>Untie Device</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
