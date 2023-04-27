import React, { useState } from 'react';
import ExportAdd from './ExportAdd';
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

export default function PageManagement() {
  const { Search } = Input;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddPage, setModalAddPage] = useState(false);
  const [editAction, setEditAction] = useState(true);
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
      title: ' ',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: text => (
        <div>
          <Checkbox onChange={onChange} />
        </div>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Page URL',
      dataIndex: 'pageurl',
      key: 'pageurl',
      responsive: ['lg'],
      render: text => <div className="page-url">{text}</div>,
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description',
      render: text => <div className="page-description">{text}</div>,
    },

    {
      title: 'Added By',
      dataIndex: 'AddedBy',
      key: 'AddedBy',
    },
    {
      title: 'Position',
      dataIndex: 'Position',
      key: 'Position',
      render: text => <div className="position">{text}</div>,
    },
    {
      title: 'Segment',
      dataIndex: 'Segment',
      key: 'Segment',
      render: text => <div>{text}</div>,
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
    },
    {
      title: 'Date Created',
      dataIndex: 'DateCreated',
      key: 'DateCreated',
      render: text => <div className="table-date">{text}</div>,
    },
    {
      title: ' ',
      dataIndex: 'edit',
      key: 'edit',
    },
  ];

  const data = [
    {
      key: '1',
      Title: 'Manage Users',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Sept 17, 2022',
      Position: 1,
      Segment: 'Users',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '2',
      Title: 'Logged-In Users',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Jun 12, 2020',
      Position: 2,
      Segment: 'Users',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => {
              setModalAddPage(true);
            }}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '3',
      Title: 'Transaction reports',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'May 8, 2021',
      Position: 3,
      Segment: 'Reports',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '4',
      Title: 'Pages',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Aug 16, 2020',
      Position: 4,
      Segment: 'Pages',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '5',
      Title: 'Members',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Sept 17, 2022',
      Position: 5,
      Segment: 'Members',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '6',
      Title: 'Roles',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Jun 12, 2020',
      Position: 1,
      Segment: 'Roles',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '7',
      Title: 'Send Sms',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Sept 17, 2022',
      Position: 2,
      Segment: 'Communications',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '8',
      Title: 'Send Email',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Sept 17, 2022',
      Position: 3,
      Segment: 'Communications',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '9',
      Title: 'App Notifications',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Sept 17, 2022',
      Position: 4,
      Segment: 'Notifications',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '10',
      Title: 'Admin Notifications',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Sept 17, 2022',
      Position: 5,
      Segment: 'Notifications',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '11',
      Title: 'App Configuration',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      AddedBy: 'Specter Damilare',
      DateCreated: 'Sept 17, 2022',
      Position: 1,
      Segment: 'Configuration',
      Status: (
        <div className="view-btn">
          <Switch defaultChecked onChange={checkChange} />
        </div>
      ),
      edit: (
        <div className="view-btn">
          <Button
            className="view-profile"
            onClick={() => setModalAddPage(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '12',
      Title: 'Web Configuration',
      pageurl: 'https://vigilant.com/dashboard/pagemanagement/page',
      Description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      phone: '+2348123456790',
      DateCreated: 'Sept 17, 2022',
      Position: 2,
      Segment: 'Configuration',
      Status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
          <Button className="view-profile">Edit</Button>
        </div>
      ),
    },
  ];

  return (
    <section className="page-management">
      <ExportAdd
        h4="Page Management"
        add="page-management"
        openModal={() => {
          setEditAction(false);
          setModalAddPage(true);
        }}
      />

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

      {/* filter modal  */}

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

          <Space direction="" className="flex-wrap">
            <Form.Item name="Segment" label="Segment:" className="range-filter">
              <Select
                defaultValue="All"
                style={{
                  width: 250,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'All',
                    label: 'All',
                  },
                  {
                    value: 'User',
                    label: 'User',
                  },
                  {
                    value: 'Reports',
                    label: 'Reports',
                  },
                  {
                    value: 'Pages',
                    label: 'Pages',
                  },
                  {
                    value: 'Members',
                    label: 'Members',
                  },
                  {
                    value: 'Roles',
                    label: 'Roles',
                  },
                  {
                    value: 'Communications',
                    label: 'Communications',
                  },
                  {
                    value: 'Notifications',
                    label: 'Notifications',
                  },
                ]}
              />
            </Form.Item>

            {/* <Form.Item name="Position" label="Position:" className="heights">
              <Input
                placeholder="position"
                style={{
                  width: 250,
                  height: '40px',
                }}
                onChange={handleChange}
              />
            </Form.Item> */}
          </Space>

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
        onCancel={() => {
          setModalAddPage(false);
          setEditAction(true);
        }}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4> {editAction ? 'Edit Page' : 'Add New Page'}</h4>
          <p>Fill the fields below to add a new page.</p>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="pageTitle" label="Page Title" className="heights">
            <Input placeholder="Enter page title" />
          </Form.Item>
          <Form.Item name="URL" label="URL" className="heights">
            <Input placeholder="Enter page URL" />
          </Form.Item>

          <Form.Item name="segment" label="Segment">
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
                  value: 'User',
                  label: 'User',
                },
                {
                  value: 'Reports',
                  label: 'Reports',
                },
                {
                  value: 'Pages',
                  label: 'Pages',
                },
                {
                  value: 'Members',
                  label: 'Members',
                },
                {
                  value: 'Roles',
                  label: 'Roles',
                },
                {
                  value: 'Communications',
                  label: 'Communications',
                },
                {
                  value: 'Notifications',
                  label: 'Notifications',
                },
              ]}
            />
          </Form.Item>

          <Form.Item name="Position" label="Position">
            <Select
              defaultValue="All"
              onChange={handleChange}
              options={[
                {
                  value: 'All',
                  label: 'All',
                },
                {
                  value: '1',
                  label: '1',
                },
                {
                  value: '2',
                  label: '2',
                },
                {
                  value: '3',
                  label: '3',
                },
                {
                  value: '4',
                  label: '4',
                },
                {
                  value: '5',
                  label: '5',
                },
              ]}
            />
          </Form.Item>

          <Form.Item name="Description" label="Description">
            <Input.TextArea placeholder="Enter page description" rows={3} />
          </Form.Item>

          <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 my-4"
          >
            {editAction ? 'Edit Page' : 'Add New Page'}
          </Button>
        </Form>
      </Modal>
    </section>
  );
}
