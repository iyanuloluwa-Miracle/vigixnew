import React, { useState, useEffect } from 'react';
import { DetailsWrapper } from './styles';
import Image from 'next/image';
import {
  Input,
  Select,
  Space,
  Checkbox,
  Table,
  Modal,
  Form,
  Radio,
  Skeleton,
  DatePicker,
  Switch,
  Spin,
  Button,
  message,
} from 'antd';

export default function Details() {
  const [incidentModal, setIncidentModal] = useState(false);
  const [sunmitLoading, setSunmitLoading] = useState(false);
  const [formAssign] = Form.useForm();

  const editBank = values => {
    console.log(values);
  };

  useEffect(() => {
    formAssign.resetFields();
  }, [formAssign]);

  return (
    <DetailsWrapper>
      <div className="contain">
        <div className="d-flex justify-content-between">
          <div className="col-7 d-flex flex-wrap">
            <div className="col-6">
              <h4>Bank ID</h4>
              <p>ABC 1234</p>

              <h4>Reported By:</h4>
              <p>Adeyanju Gabriel</p>

              <h4>Transaction Reference</h4>
              <p>12345678901234567890</p>

              <h4>Notes</h4>
              <p>Uhm, help me find my money</p>
            </div>

            <div className="col-6">
              <h4>Date</h4>
              <p>Jan 11th, 2022 18:26</p>

              <h4>Transaction Type</h4>
              <p>Bank Debit</p>

              <h4>Status</h4>
              <p className="status">Newly Reported</p>
            </div>

            <div className="col-12">
              <button className="btn open-data">Open Data</button>
            </div>
          </div>

          <div className="col-auto">
            <div>
              <Image
                src="/images/incident.png"
                alt="incident pics"
                width={370}
                height={600}
              />
              <div className="text-center mt-3 pt-3">
                <button className="toggle-show status btn">Hide Media</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="actions">
        <button className="btn" onClick={() => setIncidentModal(true)}>
          Assign
        </button>
        <button className="btn void">Void</button>
      </div>

      <Modal
        centered
        open={incidentModal}
        onOk={() => setIncidentModal(false)}
        onCancel={() => {
          setIncidentModal(false);
        }}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Assign Incident</h4>
          <p>Fill the fields below to assign incident.</p>
        </div>
        <Form layout="vertical" onFinish={editBank} form={formAssign}>
          <Form.Item
            name="segment"
            label="Segment"
            className="heights"
            rules={[
              {
                required: true,
                message: 'Please select assign segment!',
              },
            ]}
          >
            <Select
              placeholder="Enter segment name"
              style={{
                width: '100%',
              }}
              options={[
                {
                  value: 'All',
                  label: 'All',
                },
                {
                  value: 'Vigilant',
                  label: 'Vigilant',
                },
                {
                  value: 'Bank',
                  label: 'Bank',
                },
                {
                  value: 'NPF',
                  label: 'NPF',
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="note"
            label="Note"
            className="heights"
            row={4}
            rules={[
              {
                required: true,
                message: 'Please input a short note!',
              },
            ]}
          >
            <Input.TextArea placeholder="Enter note" row={10} />
          </Form.Item>

          <div className="pt-lg-5 pt-4">
            <Button
              htmlType="submit"
              style={{ background: '#7D0003', color: '#FFF' }}
              className={
                sunmitLoading
                  ? 'our-btn-fade w-100 mt-4 mb-4'
                  : 'w-100 mt-4 mb-4'
              }
              // loading={sunmitLoading}
              disabled={sunmitLoading}
            >
              {sunmitLoading ? (
                <Spin
                  className="white-spinner d-flex align-items-center justify-content-center"
                  style={{ color: 'white' }}
                />
              ) : (
                <>Assign</>
              )}
            </Button>
          </div>
        </Form>
      </Modal>
    </DetailsWrapper>
  );
}
