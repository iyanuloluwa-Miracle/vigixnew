import React, { useState } from 'react';
import Image from 'next/image';
import Exportzone from './Exportzone';
import {
  SearchIcon,
  FilterIcon,
  DirLeft,
  DirRight,
  CalenderIcon,
  BankDebit,
} from '../utility/svg';
import Link from 'next/link';
import {
  Button,
  Input,
  Select,
  Space,
  Checkbox,
  Table,
  Modal,
  Form,
  Radio,
  DatePicker,
} from 'antd';

export default function TransactionReports() {
  const { Search } = Input;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalReport, setModalReport] = useState(false);
  const [value, setValue] = useState('all');

  const defaultCheckedList = ['Pending'];
  const defaultCheckedList2 = ['All'];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkedList2, setCheckedList2] = useState(defaultCheckedList2);
  const [checkAll, setCheckAll] = useState(false);
  const [checkAll2, setCheckAll2] = useState(false);

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onFinish = values => {
    console.log('Success:', values);
  };
  const onSearch = value => console.log(value);

  const onChangeCheck = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChanges = checkedValues => {
    console.log('checked = ', checkedValues);
  };

  const [indeterminate, setIndeterminate] = useState(true);
  const [indeterminate2, setIndeterminate2] = useState(true);

  const options = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'Pending',
      value: 'Pending',
    },
    {
      label: 'On Tracking',
      value: 'On Tracking',
    },
    {
      label: 'Recovery',
      value: 'Recovery',
    },
    {
      label: 'Completed',
      value: 'Completed',
    },
  ];

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
      title: 'Reported by',
      dataIndex: 'reportedby',
      key: 'reportedby',
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
          <Button className="view-profle" onClick={() => setModalReport(true)}>
            View details
          </Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Omo',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Pending',
    },
    {
      key: '2',
      TrackingID: 'ABC-1234',
      reportedby: 'Atanda Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Wrong Transfer',
      transactionReference: '12345678901234567890',
      status: 'On Tracking',
    },
    {
      key: '3',
      TrackingID: 'ABC-1234',
      reportedby: 'Jide Ola',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Card Fraud',
      transactionReference: '12345678901234567890',
      status: 'Recovery',
    },
    {
      key: '4',
      TrackingID: 'ABC-1234',
      reportedby: 'Henry Etta',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Completed',
    },
    {
      key: '5',
      TrackingID: 'ABC-1234',
      reportedby: 'Jesse Finn',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Completed',
    },
    {
      key: '6',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Omo',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Pending',
    },
    {
      key: '7',
      TrackingID: 'ABC-1234',
      reportedby: 'Atanda Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Wrong Transfer',
      transactionReference: '12345678901234567890',
      status: 'On Tracking',
    },
    {
      key: '8',
      TrackingID: 'ABC-1234',
      reportedby: 'Jide Ola',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Card Fraud',
      transactionReference: '12345678901234567890',
      status: 'Recovery',
    },
    {
      key: '9',
      TrackingID: 'ABC-1234',
      reportedby: 'Henry Etta',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Completed',
    },
    {
      key: '10',
      TrackingID: 'ABC-1234',
      reportedby: 'Jesse Finn',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Completed',
    },
  ];

  return (
    <section>
      <Exportzone h4="All Users" />
      <div className="container search-filter">
        <div className="row justify-content-between gap-3">
          <div className="col-md-auto d-flex flex-wrap gap-3 me-lg-5">
            <div className="the-search">
              <Search
                prefix={SearchIcon}
                placeholder="Search by name..."
                onSearch={onSearch}
                className="searching"
              />
            </div>
            <div className="filter-btn-wrapper">
              <Button icon={FilterIcon} onClick={() => setModalOpen(true)}>
                Filter by:
              </Button>
            </div>
          </div>
          <div className="col-md-auto d-flex justify-content-end gap-lg-5 gap-4">
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
                  defaultValue="10 per page'"
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
                      value: '100',
                      label: '100 per page',
                    },
                    {
                      value: '1000',
                      label: '1000 per page',
                    },
                  ]}
                />
              </Space>
            </div>
          </div>
          <div className="select-all">
            {/* <Checkbox onChange={onChange}>Select All</Checkbox> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="table-wrapper ">
          <Table columns={columns} dataSource={data} />

          <div className="our-pagination d-flex justify-content-center">
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
          </div>
        </div>
      </div>

      <Modal
        title={<div className="text-center">Report Details</div>}
        centered
        open={modalReport}
        onOk={() => setModalReport(false)}
        className="our-modal"
        footer={null}
        onCancel={() => setModalReport(false)}
      >
        <div className="report-details-modal border-bottom ">
          <h4 className="mb-4">Transaction Details</h4>
          <div className="row">
            <div className="col-md-4 col-6">
              <h6>
                Transaction date <span>{CalenderIcon}</span>{' '}
              </h6>
              <p>Jan 11th, 2022</p>
            </div>
            <div className="col-md-4 col-6">
              <h6>Account number</h6>
              <p>0123456789</p>
            </div>
            <div className="col-md-4 col-6">
              <h6>Transaction type</h6>
              <p>{BankDebit} Bank Debit</p>
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
                <span>
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
                Report date <span>{CalenderIcon}</span>{' '}
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
            <p className="status pending">• Pending</p>
          </div>
        </div>
      </Modal>

      <Modal
        title="Filter by:"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        className="our-modal"
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="status" label="Status:" className="wrap-check-group">
            {/* <Checkbox.Group
              options={options}
              defaultValue={['Pear']}
              onChange={onChanges}
            /> */}
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
            label="Report date:"
            className="date-filter"
          >
            <Space direction="" className="flex-wrap">
              <DatePicker
                onChange={onChange}
                placeholder="From"
                style={{
                  width: 270,
                }}
              />
              <DatePicker
                onChange={onChange}
                placeholder="To"
                style={{
                  width: 270,
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
    </section>
  );
}
