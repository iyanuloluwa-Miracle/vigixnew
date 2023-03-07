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
} from 'antd';
import { SearchIcon, FilterIcon, DirLeft, DirRight } from '../utility/svg';

export default function PageManagement() {
  const { Search } = Input;

  const [modalOpen, setModalOpen] = useState(false);

  const onSearch = value => console.log(value);

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
      render: text => (
        <div style={{ fontSize: '13px' }}>
          <Checkbox onChange={onChange}>{text}</Checkbox>
        </div>
      ),
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
      title: 'Added by',
      dataIndex: 'AddedBy',
      key: 'AddedBy',
    },
    {
      title: 'Date created',
      dataIndex: 'DateCreated',
      key: 'DateCreated',
      render: text => <div className="table-date">{text}</div>,
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
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
          <Button className="view-profile">Edit</Button>
        </div>
      ),
    },
  ];
  return (
    <section className="page-management">
      <ExportAdd h4="Page Management" add="page-management" />
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
    </section>
  );
}
