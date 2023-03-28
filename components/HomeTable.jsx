import React from 'react';
import { shevronRight } from '../utility/svg';
import { Space, Table, Tag } from 'antd';

export default function HomeTable() {
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
      render: text => (
        <span
          className={text == 'Awaiting Confirmation' ? 'pending status' : ''}
        >
          {text}
        </span>
      ),
    },
  ];

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
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
    {
      key: '3',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
    {
      key: '4',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '5',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
    {
      key: '6',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
    {
      key: '7',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '8',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
    {
      key: '9',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
    {
      key: '10',
      TrackingID: 'ABC-1234',
      reportedby: 'Specter Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
  ];
  return (
    <>
      <div className="container tabling pb-5 ">
        <div className="row justify-content-between mb-4">
          <div className="col-auto">
            <h4 className="our-h4">Recent Reports</h4>
          </div>
          <div className="col-auto">
            <p className="view-all">
              View all<span className="ms-1">{shevronRight}</span>
            </p>
          </div>
        </div>
        <div className="table-wrapper pb-5">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
}
