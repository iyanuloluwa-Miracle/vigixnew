import React, { useState } from 'react';
import ExportAdd from './ExportAdd';
import AddIcon from './Vectors/AddIcon';
import { ExportCsv } from '../utility/svg';
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

export default function Roles() {
  const { Search } = Input;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddPage, setModalAddPage] = useState(false);
  const [value, setValue] = useState('all');

  const onSearch = value => console.log(value);

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const checkChange = checked => {
    console.log(`switch to ${checked}`);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
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
      title: <span className="ps-3 ms-lg-1">Role name</span>,
      dataIndex: 'role',
      key: 'role',
      render: text => <div className="max-content">{text}</div>,
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
      title: 'Added by',
      dataIndex: 'addedBy',
      key: 'addedBy',
      render: text => <span className="max-content">{text}</span>,
    },
    {
      title: 'Date created',
      dataIndex: 'lasteUpdate',
      key: 'lasteUpdate',
    },
    {
      title: 'Last Updated',
      dataIndex: 'lasteUpdate',
      key: 'lasteUpdate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
      company: 'Vigilant',
      addedBy: 'Specter',
      role: 'Customer support',
      lasteUpdate: 'Sept 17, 2022 11:20',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit </Button>
        </div>
      ),
    },
    {
      key: '2',
      fullName: 'Jide Ola',
      company: 'CBN',
      addedBy: 'Specter',
      role: 'Consumer protection',
      lasteUpdate: 'Jun 12, 2020 22:15',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit </Button>
        </div>
      ),
    },
    {
      key: '3',
      fullName: 'Specter Omo',
      company: 'NPF',
      addedBy: 'Specter',
      role: 'Inspector general',
      lasteUpdate: 'May 8, 2021 18:30',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),

      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit </Button>
        </div>
      ),
    },
    {
      key: '4',
      fullName: 'Jesse Finn',
      company: 'E-tranzact',
      addedBy: 'Specter',
      role: 'E-tranzact',
      lasteUpdate: 'Aug 16, 2020 13:17',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit </Button>
        </div>
      ),
    },
    {
      key: '5',
      fullName: 'Atanda Damilare',
      company: 'Vigilant',
      addedBy: 'Specter',
      role: 'Customer support',
      lasteUpdate: 'Sept 17, 2022 11:20',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),

      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit </Button>
        </div>
      ),
    },
    {
      key: '6',
      fullName: 'Jide Ola',
      company: 'CBN',
      addedBy: 'Specter',
      role: 'Consumer protection',
      lasteUpdate: 'Jun 12, 2020 22:15',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),

      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit </Button>
        </div>
      ),
    },
    {
      key: '7',
      fullName: 'Henry Etta',
      company: 'NPF',
      addedBy: 'Specter',
      role: 'Inspector general',
      lasteUpdate: 'May 8, 2021 18:30',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),

      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit</Button>
        </div>
      ),
    },
    {
      key: '8',
      fullName: 'Jesse Finn',
      company: 'E-tranzact',
      addedBy: 'Specter',
      role: 'E-tranzact',
      lasteUpdate: 'Aug 16, 2020 13:17',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit</Button>
        </div>
      ),
    },
    {
      key: '9',
      fullName: 'Specter Omo',
      company: 'Vigilant',
      addedBy: 'Specter',
      role: 'Customer support',
      lasteUpdate: 'Sept 17, 2022 11:20',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit </Button>
        </div>
      ),
    },
    {
      key: '10',
      fullName: 'Atanda Damilare',
      company: 'CBN',
      addedBy: 'Specter',
      role: 'Consumer protection',
      lasteUpdate: 'Jun 12, 2020 22:15',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Link href={'/role-access'} passHref>
            <Button className="view-profile">Fetch access </Button>
          </Link>
          <Button className="view-report">Edit </Button>
        </div>
      ),
    },
  ];

  return (
    <section className="page-management">
      <div className="container">
        <div className="row _tabs-wrapper">
          <div className="col-auto">
            <h4 className="_tabs">Roles</h4>
          </div>

          <div className="col-auto d-flex gap-4">
            <Button icon={ExportCsv}>Export CSV</Button>
            <Button
              icon={<AddIcon />}
              style={{ background: '#7D0003', color: '#fff' }}
              onClick={() => setModalAddPage(true)}
            >
              Add role
            </Button>
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
        <div className="table-wrapper  ">
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
          <h4>Add Role</h4>
          <p>Fill the fields below to add a new role.</p>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="roleName" label="Role Name" className="heights">
            <Input placeholder="Enter role name here" />
          </Form.Item>
          <Form.Item name="Company" label="Company" className="heights">
            <Input placeholder="Company" />
          </Form.Item>

          <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 mt-4"
          >
            Add Page
          </Button>
        </Form>
      </Modal>
    </section>
  );
}
