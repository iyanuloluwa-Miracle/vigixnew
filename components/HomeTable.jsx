import React, { useState, useEffect } from 'react';
import { shevronRight, ArrowUp } from '../utility/svg';
import { Space, Table, Tag } from 'antd';
import ScrollToTop from './Vectors/ScrollToTop';
import Link from 'next/link';

export default function HomeTable() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const columns = [
    {
      title: 'Tracking ID',
      dataIndex: 'TrackingID',
      key: 'TrackingID',
    },
    {
      title: 'Reported By',
      dataIndex: 'reportedby',
      key: 'reportedby',
    },

    {
      title: 'Transaction Type',
      dataIndex: 'transactionType',
      key: 'transactionType',
    },
    {
      title: 'Transaction Reference',
      dataIndex: 'transactionReference',
      key: 'transactionReference',
    },
    {
      title: 'Date Reported',
      dataIndex: 'datereported',
      key: 'datereported',
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
            <Link href="/transaction-reports">
              <p className="view-all">
                View all<span className="ms-1">{shevronRight}</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="table-wrapper pb-5">
          <Table columns={columns} dataSource={data} />
        </div>
        <button
          onClick={handleClick}
          className={
            showButton
              ? 'show-button scroll-to-top'
              : 'hide-button scroll-to-top'
          }
        >
          <div>{ArrowUp}</div>
          {/* <ScrollToTop /> */}
        </button>
      </div>
    </>
  );
}
