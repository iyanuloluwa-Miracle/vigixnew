import React from 'react';
import { shevronRight } from '../utility/svg';
import { Space, Table, Tag, Button, Checkbox } from 'antd';
import Link from 'next/link';

export default function AdminMemberReport() {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
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
        </div>
      ),
    },
  ];

  return (
    <div className="tabling mb-5 pb-5">
      <div className="container">
        <div className="row justify-content-between mb-4">
          <div className="col-auto">
            <h4 className="our-h4">All Reports - 4</h4>
          </div>
        </div>
        <div className="table-wrapper ">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}
