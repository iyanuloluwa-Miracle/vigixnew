import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ExportZone from './ExportZone';
import { ArrowUp } from '../utility/svg';
import {
  SearchIcon,
  FilterIcon,
  DirLeft,
  DirRight,
  CalenderIcon,
  BankDebit,
} from '../utility/svg';
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
  Skeleton,
  Pagination,
} from 'antd';
import api from '../apis';
import { useQuery } from '@tanstack/react-query';
import secureLocalStorage from 'react-secure-storage';
import { useRouter } from 'next/router';
import moment from 'moment';



const dateFormat = 'YYYY-MM-DD';

export default function TransactionReports() {
  const { Search } = Input;
  const [showButton, setShowButton] = useState(false);
  const [incidentsData, setIncidentsData] = useState([]);
  const [paginatedIncidentsData, setPaginatedIncidentsData] = useState([]);
  const [search_query, setSearchQuery] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);



  const [filterForm] = Form.useForm();
  const [rows, seRows] = useState(null);




  const router = useRouter();




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
      render: text => <span className="image-action">Veiw</span>,
    },
  ];

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

  const { data: fetchIncidents, isLoading: loadingIncidents } = useQuery({
    queryKey: ['get_incidents', search_query],
    queryFn: () => {
      return api.fetchAllIncidents(null, { search_query });
    },
    onSuccess: data => {
      const mappedIncidents = data?.data?.map((incident, index) => ({
        key: index,
        incidentID: incident?.incident?.id,
        reportedby: `${incident?.user?.first_name} ${incident?.user?.last_name}`,
        datereported: incident?.incident?.created_at,
        transactionType: incident?.transaction?.name,
        transactionReference: generateRandom20DigitNumber(),
        status: incident?.incident?.status_name,
      }));
      setIncidentsData(mappedIncidents); // Update incidentsData here
      setPaginatedIncidentsData(mappedIncidents); // Initialize paginatedIncidentsData
    },
    onError: err => {
      console.log(err);
    },
    retry: false,
    refetchInterval: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  const [pagination, setPagination] = useState({
    current: 1, // Current page number
    pageSize: 10, // Number of items per page
    total: 0, // Total number of items (you can update this when you fetch data)
    showSizeChanger: true, // Allow changing the number of items per page
    pageSizeOptions: ['10', '25', '50', '100'], // Available page sizes
  });

  const handleTableChange = async (pagination, filters, sorter) => {
    const { current, pageSize } = pagination;
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    // Fetch data for the new page based on the startIndex and endIndex
    const paginatedData = incidentsData.slice(startIndex, endIndex);
  
    setPaginatedIncidentsData(paginatedData);
  
    setPagination({
      ...pagination,
      current,
      pageSize,
    });
  };



  return (
    <section>
      <ExportZone h4="Incidents" />

      <div className="container search-filter">
        <div className="row justify-content-between gap-3">
          <div className="col-md-auto d-flex flex-wrap gap-3 me-lg-5">
            <div className="the-search">
              <Search
                prefix={SearchIcon}
                placeholder="Search by Username, tracking ID, reference..."
                // onSearch={onSearch}
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

            <div>
              <Space className="pagination-control" align="center">
                <Pagination
                  {...pagination}
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                  }
                  onChange={(page, pageSize) =>
                    setPagination({ ...pagination, current: page, pageSize })
                  }
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
          {loadingIncidents ? (
            <Skeleton active paragraph={{ rows: 12 }} />
          ) : (
            <Table
              columns={columns}
              dataSource={paginatedIncidentsData}
              onRow={rowProps}
              pagination={pagination} // Add the pagination configuration here
              onChange={handleTableChange} // Handle pagination changes
            />
          )}

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
      </div>


    </section>
  );
}
