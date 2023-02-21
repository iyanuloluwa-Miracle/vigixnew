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
import React, { useState } from 'react';
import Exportzone from './Exportzone';
import { SearchIcon, FilterIcon, DirLeft, DirRight } from '../utility/svg';

export default function Users() {
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState('all');

  const onSearch = value => console.log(value);
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onChangeCheck = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      render: text => (
        <div>
          <Checkbox onChange={onChange}>{text}</Checkbox>
        </div>
      ),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      render: text => <span className="last-name">{text}</span>,
    },
    {
      title: 'Email Adress',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Date registered',
      dataIndex: 'dateRegistered',
      key: 'dateRegistered',
    },
    {
      title: 'Total Reports',
      dataIndex: 'report',
      key: 'report',
      render: text => <span className="report">{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: text => (
        <div>
          <span className={`user-status ${text}`}>{text}</span>
        </div>
      ),
    },
    {
      title: ' ',
      dataIndex: 'views',
      key: 'views',
      render: text => (
        <div className="view-btn">
          <Button className="view-profle">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      firstName: 'Specter',
      lastName: 'omojo',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Sept 17, 2022',
      report: 45,
      status: 'Active',
    },
    {
      key: '2',
      firstName: 'Atanda',
      lastName: 'Damilare',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Jun 12, 2020',
      report: 2,
      status: 'Inactive',
    },
    {
      key: '3',
      firstName: 'Jide',
      lastName: 'Specter Damilare',
      email: 'jideola@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'May 8, 2021',
      report: 10,
      status: 'Active',
    },
    {
      key: '4',
      firstName: 'Henry',
      lastName: 'Etta',
      email: 'henryetta@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Aug 16, 2020',
      report: 22,
      status: 'Inactive',
    },
    {
      key: '5',
      firstName: 'Jesse',
      lastName: 'Ola',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Sept 17, 2022',
      report: 45,
      status: 'Active',
    },
    {
      key: '6',
      firstName: 'Atanda',
      lastName: 'Damilare',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Jun 12, 2020',
      report: 2,
      status: 'Inactive',
    },
    {
      key: '7',
      firstName: 'Specter',
      lastName: 'Omo',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: '12345678901234567890',
      report: 10,
      status: 'Active',
    },
    {
      key: '8',
      firstName: 'Jide',
      lastName: 'Ola',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: '12345678901234567890',
      report: 22,
      status: 'Inactive',
    },
    {
      key: '9',
      firstName: 'Jesse',
      lastName: 'Finn',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: '12345678901234567890',
      report: 42,
      status: 'Active',
    },
    {
      key: '10',
      firstName: 'Henry',
      lastName: 'Etta',
      email: 'henryetta@gmail.com',
      phone: '+2348123456790',
      dateRegistered: '12345678901234567890',
      report: 2,
      status: 'Inactive',
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
            <Checkbox onChange={onChange}>Select All</Checkbox>
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
        title="Filter by:"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        className="filter-by"
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="status" label="Status:">
            <Radio.Group onChange={onChangeCheck} value={value}>
              <Radio value={'all'}>All</Radio>
              <Radio value={'active'}>Active</Radio>
              <Radio value={'inactive'}>Inactive</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="rangeFilter"
            label="Date joined:"
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
          <Form.Item
            name="rangeFilter"
            label="No of reports:"
            className="range-filter"
          >
            <Space wrap>
              <Select
                defaultValue="10 per page'"
                style={{
                  width: 270,
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
          </Form.Item>

          <Form.Item>
            <Button
              // type="primary"
              onClick={() => setModalOpen(false)}
              htmlType="submit"
            >
              Apply
            </Button>
            <Button type="primary" onClick={() => setModalOpen(false)}>
              Clear
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </section>
  );
}
