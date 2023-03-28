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
              <div className="device-wrap">
                <div className="col-lg-4 col-md-6 col-12">
                  <h5>Device Name:</h5>
                  <p>Iphone 12 pro max - 12345</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <h5>Mac Address:</h5>
                  <p>123:456:789:0</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <h5>Serial number:</h5>
                  <p>1234567890123456790</p>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <h5>IMEI Slot 1:</h5>
                  <p>1234567890123456790</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <h5>IMEI Slot 2:</h5>
                  <p>1234567890123456790</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12 d-flex gap-4 gap-lg-5">
                  <div className="">
                    <h5>OS:</h5>
                    <p>Android 11.6.4</p>
                  </div>
                  <div>
                    <h5>RAM:</h5>
                    <p>Android 11.6.4</p>
                  </div>
                </div>
              </div>

              <div>
                <Button className="our-btn">Untie Device</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
