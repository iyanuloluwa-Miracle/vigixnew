import React, { useState, useEffect, useContext } from 'react';
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
  Popconfirm,
  Spin,
  Button,
  message,
} from 'antd';
import { VigilantAssignOption, BankAssignOption } from '../../../utility/enum';
import { OverlayContext } from '../../../components/Layout';

export default function Details({ data }) {
  const [incidentModal, setIncidentModal] = useState(false);
  const [sunmitLoading, setSunmitLoading] = useState(false);
  const [formAssign] = Form.useForm();
  const { user } = OverlayContext();

  function generateRandom20DigitNumber() {
    let randomNumber = '';
    for (let i = 0; i < 20; i++) {
      randomNumber += Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9
    }
    return randomNumber;
  }

  const editBank = values => {
    console.log(values);
  };

  useEffect(() => {
    formAssign.resetFields();
  }, [formAssign]);

  const confirm = e => {
    console.log(e);
    message.success('Click on Yes');
  };
  const cancel = e => {
    console.log(e);
    message.error('Click on No');
  };

  console.log({ user });

  return (
    <DetailsWrapper>
      <div className="contain">
        <div className="d-flex justify-content-between">
          <div className="col-7 d-flex flex-wrap">
            <div className="col-6">
              <h4>Bank ID</h4>
              <p>{data?.bank?.bank_id}</p>

              <h4>Reported By:</h4>
              <p>
                {data?.user?.first_name} {data?.user?.last_name}`
              </p>

              <h4>Transaction Reference</h4>
              <p>{generateRandom20DigitNumber()}</p>

              <h4>Notes</h4>
              <p>{data?.incident?.details}</p>
            </div>

            <div className="col-6">
              <h4>Date</h4>
              <p>{data?.incident?.created_at}</p>

              <h4>Transaction Type</h4>
              <p>{data?.transaction?.name}</p>

              <h4>Status</h4>
              <p className={`status ${data?.incident?.status_name}`}>
                {data?.incident?.status_name}
              </p>
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
        {user?.entity === 'Vigilant' || user?.entity === 'Bank' ? (
          <button className="btn" onClick={() => setIncidentModal(true)}>
            Assign
          </button>
        ) : (
          ''
        )}

        {user?.entity === 'NPF' && (
          <>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              {/* <button className="btn danger"> Proceed to arrest</button> */}
              <Button danger>Investigate</Button>
            </Popconfirm>

            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              {/* <button className="btn danger"> Proceed to arrest</button> */}
              <Button danger>Proceed to arrest</Button>
            </Popconfirm>
          </>
        )}

        {user?.entity === 'Vigilant' && (
          <>
            <Popconfirm
              title="Void this incident"
              description="Are you sure to void this incident?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <button className="btn void">Void</button>
            </Popconfirm>
          </>
        )}
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
            name="entity"
            label="Entity"
            className="heights"
            rules={[
              {
                required: true,
                message: 'Please select assign entity!',
              },
            ]}
          >
            <Radio.Group>
              <Space direction="vertical">
                {user?.entity === 'Vigilant'
                  ? VigilantAssignOption?.map(item => (
                      <Radio value={item?.value}>{item?.label}</Radio>
                    ))
                  : user?.entity === 'Bank'
                  ? BankAssignOption?.map(item => (
                      <Radio value={item?.value}>{item?.label}</Radio>
                    ))
                  : ' '}
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="note"
            label="Note"
            className=""
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
