import React, { useState } from 'react';
import { shevronRight } from '../utility/svg';
import {
  Space,
  Table,
  Tag,
  Button,
  Select,
  Modal,
  DatePicker,
  Form,
  Checkbox,
} from 'antd';
import {
  SearchIcon,
  FilterIcon,
  DirLeft,
  DirRight,
  CalenderIcon,
  BankDebit,
} from '../utility/svg';

import Link from 'next/link';
import Image from 'next/image';

export default function UsersReport() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalReport, setModalReport] = useState(false);

  const defaultCheckedList = ['Pending'];
  const defaultCheckedList2 = ['All'];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkedList2, setCheckedList2] = useState(defaultCheckedList2);
  const [checkAll, setCheckAll] = useState(false);
  const [checkAll2, setCheckAll2] = useState(false);

  const [indeterminate, setIndeterminate] = useState(true);
  const [indeterminate2, setIndeterminate2] = useState(true);

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const plainOptions = ['Pending', 'On Tracking', 'Recovery', 'Completed'];

  const transactionOptions = ['Bank debit', 'Wrong Transfer', 'Card Fraud'];

  const onChanged = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onChanged2 = list => {
    setCheckedList(list);
    setIndeterminate2(!!list.length && list.length < transactionOptions.length);
    setCheckAll2(list.length === transactionOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onCheckAllChange2 = e => {
    setCheckedList(e.target.checked ? transactionOptions : []);
    setIndeterminate2(false);
    setCheckAll2(e.target.checked);
  };

  const columns = [
    {
      title: 'Tracking ID',
      dataIndex: 'TrackingID',
      key: 'TrackingID',
    },
    {
      title: 'Date reported',
      dataIndex: 'datereported',
      key: 'datereported',
    },

    {
      title: 'Transaction type',
      dataIndex: 'transactionType',
      key: 'transactionType',
    },
    {
      title: 'Transaction reference',
      dataIndex: 'transactionReference',
      key: 'transactionReference',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: text => <span className={`status ${text}`}>{text}</span>,
    },
    {
      title: ' ',
      dataIndex: 'details',
      key: 'details',
      render: text => (
        <div className="view-btn">
          <Button className="view-profile" onClick={() => setModalReport(true)}>
            View details
          </Button>
        </div>
      ),
    },
  ];

  //change to view details and the button is suppose to open a modal

  const data = [
    {
      key: '1',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
    {
      key: '2',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Wrong Transfer',
      transactionReference: '12345678901234567890',
      status: 'On Tracking',
    },
    {
      key: '3',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Card Fraud',
      transactionReference: '12345678901234567890',
      status: 'Recovery',
    },
    {
      key: '4',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Completed',
    },
  ];

  return (
    <div className="tabling mb-5 pb-5">
      <div className="container pb-4">
        <div className="row justify-content-between mb-4 pb-md-3">
          <div className="col-auto">
            <h4 className="our-h4">All Reports - 4</h4>
          </div>
          <div className="col-md-auto d-flex justify-content-end gap-lg-5 gap-4">
            <div className="filter-btn-wrapper">
              <Button
                icon={FilterIcon}
                onClick={() => setModalOpen(true)}
                className="small-btn"
              >
                Filter by:
              </Button>
            </div>

            <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
              <p className="det">
                Page <span className="our-color">2</span> of{' '}
                <span className="our-color">1000</span>
              </p>
              <div className="dir">
                <a href="">
                  <span className="">{DirLeft}</span>
                </a>
                <a href="">
                  <span className="">{DirRight}</span>
                </a>
              </div>
            </div>
            <div>
              <Space wrap>
                <Select
                  defaultValue="10 per page"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: '10',
                      label: '10 per page',
                    },
                    {
                      value: '25',
                      label: '25 per page',
                    },
                    {
                      value: '50',
                      label: '50 per page',
                    },
                    {
                      value: '100',
                      label: '100 per page',
                    },
                    {
                      value: '250',
                      label: '250 per page',
                    },
                  ]}
                />
              </Space>
            </div>
          </div>
        </div>
        <div className="table-wrapper ">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>

      <Modal
        title={<div className="text-center">Report Details</div>}
        centered
        open={modalReport}
        onOk={() => setModalReport(false)}
        className="our-modal report-modal"
        footer={null}
        onCancel={() => setModalReport(false)}
      >
        <div className="report-details-modal border-bottom ">
          <h4 className="mb-4">Transaction Details</h4>
          <div className="row">
            <div className="col-md-4 col-6">
              <h6>
                Transaction date <span className="ms-1">{CalenderIcon}</span>{' '}
              </h6>
              <p>Jan 11th, 2022</p>
            </div>
            <div className="col-md-4 col-6">
              <h6>Account number</h6>
              <p>0123456789</p>
            </div>
            <div className="col-md-4 col-6">
              <h6>Transaction type</h6>
              <p>
                <span className="me-1">{BankDebit}</span> Bank Debit
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 col-6">
              <h6>Transaction reference</h6>
              <p>0123456789</p>
            </div>
            <div className="col-md col-6">
              <h6>Bank Name</h6>
              <p>
                {' '}
                <span className="me-1">
                  <Image
                    src={'/icons/Bank_logo.png'}
                    alt="bank logo"
                    width={22}
                    height={22}
                  />
                </span>{' '}
                Guarantee Trust Bank
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-6">
              <h6>Tracking ID </h6>
              <p>ABC-12345</p>
            </div>
            <div className="col-md col-6">
              <h6>
                Report date <span className="ms-1">{CalenderIcon}</span>{' '}
              </h6>
              <p>Jan 11th, 2022</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h6>Reported by</h6>
              <p className="our-primary-color text-decoration-underline">
                Atanda Damilare
              </p>
            </div>
          </div>
        </div>
        <div className="report-details-modal pb-4">
          <div className="row">
            <div>
              <h4 className="bold">Tracking Details</h4>
            </div>
          </div>
          <div className="row">
            <h6>Report status</h6>
            <p className="status pending">• Processed</p>
          </div>
          <div className="notes">
            <h6>Notes</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        title="Filter by:"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        className="our-modal filter-transaction "
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="status" label="Status:" className="wrap-check-group">
            <>
              <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
                className="me-3"
              >
                All
              </Checkbox>

              <Checkbox.Group
                options={plainOptions}
                value={checkedList}
                onChange={onChanged}
              />
            </>
          </Form.Item>

          <Form.Item
            name="transactionType:"
            label="Transaction type:"
            className="wrap-check-group"
          >
            <>
              <Checkbox
                indeterminate={indeterminate2}
                onChange={onCheckAllChange2}
                checked={checkAll2}
                className="me-3"
              >
                All
              </Checkbox>

              <Checkbox.Group
                options={transactionOptions}
                value={checkedList}
                onChange={onChanged2}
              />
            </>
          </Form.Item>
          <Form.Item
            name="rangeFilter"
            label="Date range:"
            className="date-filter"
          >
            <Space direction="" className="flex-wrap">
              <DatePicker
                onChange={onChange}
                placeholder="From"
                style={{
                  width: 250,
                }}
              />
              <DatePicker
                onChange={onChange}
                placeholder="To"
                style={{
                  width: 250,
                }}
              />
            </Space>
          </Form.Item>

          <Form.Item className="buttons">
            <Button
              // type="primary"
              onClick={() => setModalOpen(false)}
              htmlType="submit"
              className="me-3"
              style={{ background: '#7D0003', color: '#fff' }}
            >
              Apply
            </Button>
            <Button
              type="primary"
              onClick={() => setModalOpen(false)}
              style={{ background: '#FFF', color: '#1C1C1C' }}
            >
              Clear
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
