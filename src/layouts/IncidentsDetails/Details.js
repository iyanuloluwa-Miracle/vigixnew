import React, { useState, useEffect, useContext } from 'react';
import { DetailsWrapper } from './styles';
import Image from 'next/image';
import { toast } from 'sonner';
import { useRouter } from 'next/router';
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
import api from '../../../apis';
import { BASE_URL } from '../../../utility/constants';
import Cookies from 'js-cookie';

export default function Details({ data, incidentId }) {
  const [incidentModal, setIncidentModal] = useState(false);
  const [voidModal, setVoidModal] = useState(false);
  const [banksModal, setBanksModal] = useState(false);
  const [NPFModal, setNPFModal] = useState(false);
  const [arrestModal, setArrestModal] = useState(false);
  const [sunmitLoading, setSunmitLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [investigateMessage, setInvestigateMessage] = useState('')
  const [formAssign] = Form.useForm();
  const { user } = OverlayContext();
  const token = Cookies.get('token');
  const router = useRouter();



  const handleInputChange = (e) => {

    setInputValue(e.target.value);
  };


  const handleInvestigateChange = (e) => {

    setInvestigateMessage(e.target.value);
  };






  // console.log("ENTITY:", user.entity_id)
  // console.log(VigilantAssignOption)

  function generateRandom20DigitNumber() {
    let randomNumber = '';
    for (let i = 0; i < 20; i++) {
      randomNumber += Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9
    }
    return randomNumber;
  }

  const customerAssign = async values => {
    console.log(values);
    setSunmitLoading(true);
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Adjust content type if needed
    };
    const payload = {
      new_incident_status_id: values.entity,
    };
    try {
      const res = await api.post2(
        `${BASE_URL}/incident/update-incident-status/${incidentId}`,
        payload,
        headers
      );

      if (res) {
        toast.success(res.message)
        router.push('/dashboard');
      }

    } catch (error) {
      console.error(error);
    } finally {
      setSunmitLoading(false);
      setIncidentModal(false)
    }
  };

  const assignBank = async values => {
    console.log(values);
    setSunmitLoading(true);
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Adjust content type if needed
    };
    const payload = {
      new_incident_status_id: values.entity,
    };
    try {
      const res = await api.post2(
        `${BASE_URL}/incident/update-incident-status/${incidentId}`,
        payload,
        headers
      );

      if (res) {
        toast.success(res.message)
        router.push('/dashboard');
      }

    } catch (error) {
      console.error(error);
    } finally {
      setSunmitLoading(false);
      setBanksModal(false)
    }
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

  const proceedToArrest = async () => {

    setSunmitLoading(true);
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Adjust content type if needed
    };
    const payload = {
      "incident_id": `${incidentId}`,
      "sender_id": `${user.id}`,
      "post": inputValue
    };
    try {
      const res = await api.post2(
        `${BASE_URL}/incident/indicent-comments`,
        payload,
        headers
      );

      if (res) {
        toast.success(res.message)
        router.push('/dashboard');

      }

    } catch (error) {
      console.error(error);
    } finally {
      setSunmitLoading(false);
      setNPFModal(false)
    }
  };

  const proceedToInvestigate = async () => {
    console.log(values);
    setSunmitLoading(true);
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Adjust content type if needed
    };
    const payload = {
      "incident_id": `${incidentId}`,
      "sender_id": `${user.id}`,
      "post": investigateMessage
    };
    try {
      const res = await api.post2(
        `${BASE_URL}/incident/indicent-comments`,
        payload,
        headers
      );

      if (res) {
        toast.success(res.message)
        router.push('/dashboard');
      }

    } catch (error) {
      console.error(error);
    } finally {
      setSunmitLoading(false);
      setArrestModal(false)
    }
  };

  const proceedToVoid = async () => {

    setSunmitLoading(true);
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Adjust content type if needed
    };
    const payload = {
      "incident_id": `${incidentId}`,
      "sender_id": `${user.id}`,
      "post": ""
    };
    try {
      const res = await api.post2(
        `${BASE_URL}/incident/indicent-comments`,
        payload,
        headers
      );

      if (res) {
        toast.success(res.message)
      }

    } catch (error) {
      console.error(error);
    } finally {
      setSunmitLoading(false);
      setVoidModal(false)
    }
  };



  // console.log({ user });

  // console.log({ data });

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
                {data?.user?.first_name} {data?.user?.last_name}
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
        {user?.entity_id === 3 ||
          user?.entity_id === 4 ? (
          <button className="btn" onClick={() => user?.entity_id == 3 ? setIncidentModal(true) : user?.entity_id == 4 ? setBanksModal(true) : ""}>
            Assign
          </button>
        ) : (
          ''
        )}



        {user?.entity_id === 3 ||
          user?.entity_id === 4 ? (
          <button className="btn void" onClick={() => setVoidModal(true)}>Void</button>
        ) : (
          ''
        )}

        {/* {user?.entity_id === 3 ||
        user?.entity_id === 4 ? (
              <button className="btn void" onClick={()=>setVoidModal(true)}>Void</button>
        ): ""} */}

        {/* 
        user?.entity_id === 2 &&
        user?.role?.entity_id == 2 &&
        data?.incident?.incident_status_id == 18  */}

        {/* for NPF investigator  */}
        {data?.incident?.incident_status_id == 18 && user?.entity_id === 2 ? (
          <>
            <Button
              danger
              onClick={() => {
                setNPFModal(true);
              }}
            >
              Investigate
            </Button>

            <Button danger onClick={() => { setArrestModal(true) }}>
              Proceed to arrest
            </Button>
          </>
        ) : (
          ''
        )}
      </div>

      {/* assign modal  */}

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

        <Form layout="vertical" onFinish={customerAssign} form={formAssign}>
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
                {user?.entity_id == 3
                  // && user?.role?.entity_id == 2

                  ? VigilantAssignOption?.map((item, index) => (
                    <Radio value={item?.value} key={index}>
                      {item?.label}
                    </Radio>
                  ))
                  : user?.entity_id == 4
                    // && user?.role?.entity_id == 2

                    ? BankAssignOption?.map((item, index) => (
                      <Radio value={item?.value} key={index}>
                        {item?.label}
                      </Radio>
                    ))
                    : ''}
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

      {/* assign for bank modal  */}

      <Modal
        centered
        open={banksModal}
        onOk={() => setBanksModal(false)}
        onCancel={() => {
          setBanksModal(false);
        }}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Assign Incident</h4>
          <p>Fill the fields below to assign incident.</p>
        </div>
        <Form layout="vertical" onFinish={assignBank}>
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
                {user?.entity_id === 3
                  // && user?.role?.name === 'VIGILANT CUSTOMER SERVICE'
                  ? VigilantAssignOption?.map((item, index) => (
                    <Radio value={item?.value} key={index}>
                      {item?.label}
                    </Radio>
                  ))
                  : user?.entity_id == 4
                    // && user?.role?.entity_id == 2

                    ? BankAssignOption?.map((item, index) => (
                      <Radio value={item?.value} key={index}>
                        {item?.label}
                      </Radio>
                    ))
                    : ''}
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

      {/* proceed to investigate  */}

      <Modal
        centered
        open={NPFModal}
        onOk={() => setNPFModal(false)}
        onCancel={() => {
          setNPFModal(false);
        }}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Assign Incident</h4>
          <p>Please state why you are taking this action.</p>
        </div>
        <Form
          layout="vertical"
          onFinish={proceedToInvestigate}
        >
          <Form.Item
            name="reason"
            label="Reason for investigation"
            className=""
            rules={[
              {
                required: true,
                message: 'Please input a short note!',
              },
            ]}
          >
            <Input.TextArea placeholder="Enter note" row={9} value={investigateMessage} onChange={handleInvestigateChange} />
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
              loading={sunmitLoading}
              disabled={sunmitLoading}
            >
              {sunmitLoading ? (
                <Spin
                  className="white-spinner d-flex align-items-center justify-content-center"
                  style={{ color: 'white' }}
                />
              ) : (
                <>Proceed to Investigate</>
              )}
            </Button>
          </div>
        </Form>
      </Modal>

      {/* proceed to arrest  */}

      <Modal
        centered
        open={arrestModal}
        onOk={() => setArrestModal(false)}
        onCancel={() => {
          setArrestModal(false);
        }}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Assign Incident</h4>
          <p>Fill the fields below to proceed to arrest.</p>
        </div>
        <Form layout="vertical" onFinish={proceedToArrest} >
          <Form.Item
            name="reason"
            label="Reason for arrest"
            className=""
            rules={[
              {
                required: true,
                message: 'Please input a short note!',
              },
            ]}
          >
            <Input.TextArea placeholder="Enter note" row={9} value={inputValue} onChange={handleInputChange} />
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
              loading={sunmitLoading}
              disabled={sunmitLoading}
            >
              {sunmitLoading ? (
                <Spin
                  className="white-spinner d-flex align-items-center justify-content-center"
                  style={{ color: 'white' }}
                />
              ) : (
                <>Proceed to Investigate</>
              )}
            </Button>
          </div>
        </Form>
      </Modal>

      {/* void modal  */}

      <Modal
        centered
        open={voidModal}
        onOk={() => setVoidModal(false)}
        onCancel={() => {
          setVoidModal(false);
        }}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Assign Incident</h4>
          <p>Fill the fields below to void incident.</p>
        </div>
        <Form layout="vertical" onFinish={proceedToVoid}>
          <Form.Item
            name="reason"
            label="Reason for Voiding incident"
            className=""
            rules={[
              {
                required: true,
                message: 'Please input a short note!',
              },
            ]}
          >
            <Input.TextArea placeholder="Enter note" row={9} />
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
              loading={sunmitLoading}
              disabled={sunmitLoading}
            >
              {sunmitLoading ? (
                <Spin
                  className="white-spinner d-flex align-items-center justify-content-center"
                  style={{ color: 'white' }}
                />
              ) : (
                <>Void</>
              )}
            </Button>
          </div>
        </Form>
      </Modal>
    </DetailsWrapper>
  );
}