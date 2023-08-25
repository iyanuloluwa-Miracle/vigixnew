import React, { useState, useEffect } from 'react';
import { ArrowUp } from '../../../utility/svg';
import { Space, Table, Tag } from 'antd';
import Link from 'next/link';
import api from '../../../apis';

// styles
import { IncidentsWrapper } from './styles';
import { useQuery } from '@tanstack/react-query';

export default function HomeIncidents() {
  const [showButton, setShowButton] = useState(false);
  const [search_query, setSearchQuery] = useState(null);
  const [incidentsData, setIncidentsData] = useState([]);

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
      title: 'Date Reported',
      dataIndex: 'datereported',
      key: 'datereported',
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
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: text => <span className="image-action">IMAGE</span>,
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

  const { fetcIncidents, loadingIncidents } = useQuery({
    queryKey: ['get_incidents', search_query],
    queryFn: () => {
      return api.fetchIncidents(null, { search_query });
    },
    onSuccess: data => {
      setIncidentsData(data);
    },
    retry: false,
    refetchInterval: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  return (
    <IncidentsWrapper>
      <div className="container tabling pb-5">
        <div className="row justify-content-between mb-4">
          <div className="col-auto">
            <h4 className="our-h4">Recent Incidents</h4>
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
        </button>
      </div>
    </IncidentsWrapper>
  );
}
