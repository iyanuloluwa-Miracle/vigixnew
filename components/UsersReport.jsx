import React from 'react';
import { shevronRight } from '../utility/svg';
import { Space, Table, Tag, Button } from 'antd';
import Link from 'next/link';

export default function UsersReport() {
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
          <Link href={'/user-details'} passHref>
            <Button className="view-profile">View profile</Button>
          </Link>
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
      status: 'Pending',
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
      <div className="container ">
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
