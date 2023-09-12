import React, { useState, useEffect } from 'react';
import { ArrowUp } from '../../../utility/svg';
import { Space, Table, Tag, Skeleton } from 'antd';
import Link from 'next/link';
import api from '../../../apis';
import { useRouter } from 'next/router';
import { OverlayContext } from '../../../components/Layout';

// styles
import { IncidentsWrapper } from './styles';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../../../utility/constants';

export default function HomeIncidents() {
  const [showButton, setShowButton] = useState(false);
  const [search_query, setSearchQuery] = useState(null);
  const [incidentsData, setIncidentsData] = useState([]);
  const router = useRouter();
  const { user } = OverlayContext();

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
      title: 'Incident ID',
      dataIndex: 'incidentID',
      key: 'incidentID',
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
      render: text => <span className={`status ${text}`}>{text}</span>,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: text => <span className="image-action">IMAGE</span>,
    },
  ];

  // const data = [
  //   {
  //     key: '1',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //   },
  //   {
  //     key: '2',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //   },
  //   {
  //     key: '3',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //   },
  //   {
  //     key: '4',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '5',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //   },
  //   {
  //     key: '6',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //   },
  //   {
  //     key: '7',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '8',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //   },
  //   {
  //     key: '9',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //   },
  //   {
  //     key: '10',
  //     TrackingID: 'ABC-1234',
  //     reportedby: 'Specter Damilare',
  //     datereported: 'Jan 11th, 2022 18:26',
  //     transactionType: 'Bank Debit',
  //     transactionReference: '12345678901234567890',
  //     status: 'Awaiting Confirmation',
  //   },
  // ];

  const handleRowClick = record => {
    router.push(`/incident-details/${record?.incidentID}`);
  };

  const rowProps = record => {
    return {
      onClick: () => handleRowClick(record),
    };
  };

  function generateRandom20DigitNumber() {
    let randomNumber = '';
    for (let i = 0; i < 20; i++) {
      randomNumber += Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9
    }
    return randomNumber;
  }

  const url = `${BASE_URL}/incident/police-incidents/18`;
  // const url = user `${BASE_URL}/incident/incidents`;

  // return api.fetchIncidents(null, { search_query });
  // return api.fetchNPFIncidents(null, { search_query });

  const { data: fetcIncidents, isLoading: loadingIncidents } = useQuery({
    queryKey: ['get_incidents', search_query],
    queryFn: () => {
      return user?.entity_id === 2
        ? api.fetchNPFIncidents(null, { search_query })
        : user?.entity_id === 3
        ? api.fetchIncidents(null, { search_query })
        : user?.entity_id === 4
        ? api.fetchBanksIncidents
        : '';
    },
    onSuccess: data => {
      setIncidentsData(
        data?.data?.map((incident, index) => ({
          key: index,
          incidentID: incident?.incident?.id,
          reportedby: `${incident?.user?.first_name} ${incident?.user?.last_name}`,
          datereported: incident?.incident?.created_at,
          transactionType: incident?.transaction?.name,
          transactionReference: generateRandom20DigitNumber(),
          status: incident?.incident?.status_name,
        }))
      );
    },
    onError: err => {
      console.log(err);
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
          {loadingIncidents ? (
            <Skeleton active paragraph={{ rows: 12 }} />
          ) : (
            <Table
              columns={columns}
              dataSource={incidentsData}
              onRow={rowProps}
            />
          )}
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
