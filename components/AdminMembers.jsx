import React, { useState } from 'react';
import AddIcon from './Vectors/AddIcon';
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
  Switch,
} from 'antd';
import { SearchIcon, FilterIcon, DirLeft, DirRight } from '../utility/svg';

export default function AdminMembers() {
  const { Search } = Input;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddPage, setModalAddPage] = useState(false);
  const [value, setValue] = useState('all');

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onSearch = value => console.log(value);
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeCheck = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const columns = [
    {
      title: <span className="ps-3 ms-lg-1">Username</span>,
      dataIndex: 'username',
      key: 'username',
      render: text => (
        <div>
          <Checkbox onChange={onChange}>{text}</Checkbox>
        </div>
      ),
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      render: text => <span className="max-content">{text}</span>,
    },
    {
      title: 'Role access',
      dataIndex: 'role',
      key: 'role',
      render: text => <div className="max-content">{text}</div>,
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
      title: 'Date & Time',
      dataIndex: 'DateTime',
      key: 'DateTime',
    },
    {
      title: ' ',
      dataIndex: 'views',
      key: 'views',
    },
  ];

  const data = [
    {
      key: '1',
      fullName: 'Atanda Damilare',
      username: 'dammy',
      company: 'Vigilant',
      role: 'Customer support',
      DateTime: 'Sept 17, 2022 11:20',
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
    {
      key: '2',
      fullName: 'Jide Ola',
      username: 'Ola',
      company: 'CBN',
      role: 'Consumer protection',
      DateTime: 'Jun 12, 2020 22:15',
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
    {
      key: '3',
      fullName: 'Specter Omo',
      username: 'Specter',
      company: 'NPF',
      role: 'Inspector general',
      DateTime: 'May 8, 2021 18:30',
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
    {
      key: '4',
      fullName: 'Jesse Finn',
      username: 'Finn',
      company: 'E-tranzact',
      role: 'E-tranzact',
      DateTime: 'Aug 16, 2020 13:17',
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
    {
      key: '5',
      fullName: 'Atanda Damilare',
      username: 'Ola',
      company: 'Vigilant',
      role: 'Customer support',
      DateTime: 'Sept 17, 2022 11:20',
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
    {
      key: '6',
      fullName: 'Jide Ola',
      username: 'Damilare',
      company: 'CBN',
      role: 'Consumer protection',
      DateTime: 'Jun 12, 2020 22:15',
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
    {
      key: '7',
      fullName: 'Henry Etta',
      username: 'Omo',
      company: 'NPF',
      role: 'Inspector general',
      DateTime: 'May 8, 2021 18:30',
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
    {
      key: '8',
      fullName: 'Jesse Finn',
      username: 'Ola',
      company: 'E-tranzact',
      role: 'E-tranzact',
      DateTime: 'Aug 16, 2020 13:17',
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
    {
      key: '9',
      fullName: 'Specter Omo',
      username: 'Finn',
      company: 'Vigilant',
      role: 'Customer support',
      DateTime: 'Sept 17, 2022 11:20',
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
    {
      key: '10',
      fullName: 'Atanda Damilare',
      username: 'Etta',
      company: 'CBN',
      role: 'Consumer protection',
      DateTime: 'Jun 12, 2020 22:15',

      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link href={'/admin-details'} passHref>
            <Button className="view-profile">View details</Button>
          </Link>
          <Button className="view-report">Edit member</Button>
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row _tabs-wrapper">
          <div className="col-auto">
            <h4 className="_tabs">Admin Members</h4>
          </div>
          <div className="col-auto d-flex gap-4">
            <Button
              icon={<AddIcon />}
              style={{ background: '#7D0003', color: '#fff' }}
              onClick={() => setModalAddPage(true)}
            >
              Add member
            </Button>
            {/* <Button
              icon={<AddIcon color="#7D0003" />}
              style={{
                color: '#7D0003',
                background: '#fff',
                border: '1px solid #7D0003',
              }}
              onClick={() => openModal()}
            >
              Add multiple
            </Button> */}
          </div>
        </div>
      </div>

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
        title="Filter by:"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        className="our-modal"
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

          <Space direction="" className="flex-wrap">
            <Form.Item name="Company" label="Company:" className="range-filter">
              <Select
                defaultValue="All"
                style={{
                  width: 270,
                }}
                onChange={handleChange}
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
                    value: 'CBN',
                    label: 'CBN',
                  },
                  {
                    value: 'NPF',
                    label: 'NPF',
                  },
                  {
                    value: 'E-tranzact',
                    label: 'E-tranzact',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              name="Role"
              label="Role access:"
              className="range-filter"
            >
              <Select
                defaultValue="All"
                style={{
                  width: 270,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'All',
                    label: 'All',
                  },
                  {
                    value: 'Customer support',
                    label: 'Customer support',
                  },
                  {
                    value: 'Consumer protection',
                    label: 'Consumer protection',
                  },
                  {
                    value: 'Inspector general',
                    label: 'Inspector general',
                  },
                  {
                    value: 'E-tranzact',
                    label: 'E-tranzact',
                  },
                ]}
              />
            </Form.Item>
          </Space>

          <Form.Item
            name="dateCreated"
            label="Date created:"
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

      <Modal
        centered
        open={modalAddPage}
        onOk={() => setModalAddPage(false)}
        onCancel={() => setModalAddPage(false)}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Add New Member</h4>
          <p>Fill the fields below to add a new member.</p>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="fullName"
            label="Full Name (Optional)"
            className="heights"
          >
            <Input placeholder="Enter full name here" />
          </Form.Item>
          <Form.Item name="username" label="Username" className="heights">
            <Input placeholder="Enter username here" />
          </Form.Item>

          <Form.Item name="email" label="Email address" className="heights">
            <Input placeholder="Enter email here" type="email" />
          </Form.Item>

          <Form.Item name="company" label="Company">
            <Select
              defaultValue="All"
              style={{
                width: '100%',
              }}
              onChange={handleChange}
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
                  value: 'CBN',
                  label: 'CBN',
                },
                {
                  value: 'NPF',
                  label: 'NPF',
                },
                {
                  value: 'E-tranzact',
                  label: 'E-tranzact',
                },
              ]}
            />
          </Form.Item>

          <Form.Item name="Role access" label="Role access">
            <Select
              defaultValue="All"
              onChange={handleChange}
              options={[
                {
                  value: 'All',
                  label: 'All',
                },
                {
                  value: 'Customer support',
                  label: 'Customer support',
                },
                {
                  value: 'Consumer protection',
                  label: 'Consumer protection',
                },
                {
                  value: 'Inspector general',
                  label: 'Inspector general',
                },
                {
                  value: 'E-tranzact',
                  label: 'E-tranzact',
                },
              ]}
            />
          </Form.Item>

          <Form.Item name="password" label="Password" className="heights">
            <Input placeholder="Enter password here" />
          </Form.Item>

          <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 mt-4 mb-4"
          >
            Add Page
          </Button>
        </Form>
      </Modal>
    </section>
  );
}
