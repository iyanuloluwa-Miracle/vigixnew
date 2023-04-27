import React, { useState } from 'react';
import Image from 'next/image';
import ExportZone from './ExportZone';
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
} from 'antd';
import api from '../apis';
import secureLocalStorage from 'react-secure-storage';
import { useRouter } from 'next/router';

export default function TransactionReportAuthorized() {
  const { Search } = Input;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalReport, setModalReport] = useState(false);
  const [modalsignature, setModalSignature] = useState(false);
  const [value, setValue] = useState('all');
  const [reportData, setReportData] = useState(null);

  const router = useRouter();

  const defaultCheckedList = ['Pending'];
  const defaultCheckedList2 = ['All'];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkedList2, setCheckedList2] = useState(defaultCheckedList2);
  const [checkAll, setCheckAll] = useState(false);
  const [checkAll2, setCheckAll2] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('Awaiting Confirmation');

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onFinish = values => {
    console.log('Success:', values);
  };
  const onSearch = value => console.log(value);

  const onChangeCheck = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChanges = checkedValues => {
    console.log('checked = ', checkedValues);
  };

  const [indeterminate, setIndeterminate] = useState(true);
  const [indeterminate2, setIndeterminate2] = useState(true);

  const options = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'Pending',
      value: 'Pending',
    },
    {
      label: 'On Tracking',
      value: 'On Tracking',
    },
    {
      label: 'Recovery',
      value: 'Recovery',
    },
    {
      label: 'Completed',
      value: 'Completed',
    },
  ];

  const plainOptions = [
    'Approved',
    'Awaiting Confirmation',
    'Declined',
    'Failed',
    'Processed',
    'Initiated',
  ];

  const transactionOptions = ['Bank debit', 'Wrong Transfer', 'Card Fraud'];

  const onChanged = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onChanged2 = list => {
    setCheckedList(list);
    setIndeterminate2(!!list.length && list.length < transactionOptions.length);
    setCheckAll2(list.length === transactionOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onCheckAllChange2 = e => {
    setCheckedList(e.target.checked ? transactionOptions : []);
    setIndeterminate2(false);
    setCheckAll2(e.target.checked);
  };

  // const columns = [
  //   {
  //     title: 'Tracking ID',
  //     dataIndex: 'TrackingID',
  //     key: 'TrackingID',
  //   },
  //   {
  //     title: 'Username',
  //     dataIndex: 'Username',
  //     key: 'Username',
  //   },
  //   {
  //     title: 'Transaction Type',
  //     dataIndex: 'transactionType',
  //     key: 'transactionType',
  //   },
  //   {
  //     title: 'Transaction Reference',
  //     dataIndex: 'transactionReference',
  //     key: 'transactionReference',
  //   },

  //   {
  //     title: 'Status',
  //     dataIndex: 'status',
  //     key: 'status',
  //     render: text => <span className={`status ${text}`}>{text}</span>,
  //   },
  //   {
  //     title: 'Date Reported',
  //     dataIndex: 'datereported',
  //     key: 'datereported',
  //   },
  //   {
  //     title: ' ',
  //     dataIndex: 'details',
  //     key: 'details',
  //     render: text => (
  //       <div className="view-btn">
  //         <Button className="view-profile" onClick={() => setModalReport(true)}>
  //           View details
  //         </Button>

  //         <Button
  //           className="view-report"
  //           onClick={() => setModalSignature(true)}
  //         >
  //           Signatures
  //         </Button>
  //       </div>
  //     ),
  //   },
  // ];

  const columns = [
    {
      title: 'Tracking ID',
      dataIndex: 'trackID',
      key: 'trackID',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Transaction Type',
      dataIndex: 'transactionType',
      key: 'transactionType',
    },
    {
      title: 'Transaction Reference',
      dataIndex: 'referenceID',
      key: 'referenceID',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: text => <span className={`status ${text}`}>{text}</span>,
    },
    {
      title: 'Date Reported',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: ' ',
      dataIndex: 'details',
      key: 'details',
      render: text => (
        <div className="view-btn">
          <Button className="view-profile" onClick={() => setModalReport(true)}>
            View details
          </Button>

          <Button
            className="view-report"
            onClick={() => setModalSignature(true)}
          >
            Signatures
          </Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      TrackingID: 'ABC-1234',
      Username: 'Specter',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
    {
      key: '2',
      TrackingID: 'ABC-1234',
      Username: 'Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Wrong Transfer',
      transactionReference: '12345678901234567890',
      status: 'Failed',
    },
    {
      key: '3',
      TrackingID: 'ABC-1234',
      Username: 'Jideola',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Card Fraud',
      transactionReference: '12345678901234567890',
      status: 'Processed',
    },
    {
      key: '4',
      TrackingID: 'ABC-1234',
      Username: 'Henry',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Approved',
    },
    {
      key: '5',
      TrackingID: 'ABC-1234',
      Username: 'Finn',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Declined',
    },
    {
      key: '6',
      TrackingID: 'ABC-1234',
      Username: 'Specter',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Initiated',
    },
    {
      key: '7',
      TrackingID: 'ABC-1234',
      Username: 'Damilare',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Wrong Transfer',
      transactionReference: '12345678901234567890',
      status: 'Awaiting Confirmation',
    },
    {
      key: '8',
      TrackingID: 'ABC-1234',
      Username: 'Jideola',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Card Fraud',
      transactionReference: '12345678901234567890',
      status: 'Failed',
    },
    {
      key: '9',
      TrackingID: 'ABC-1234',
      Username: 'Henry',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Processed',
    },
    {
      key: '10',
      TrackingID: 'ABC-1234',
      Username: 'Finn',
      datereported: 'Jan 11th, 2022 18:26',
      transactionType: 'Bank Debit',
      transactionReference: '12345678901234567890',
      status: 'Approved',
    },
  ];

  const getReports = async () => {
    setLoading(true);
    try {
      const res = await api.get(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/transaction_report_history?action=fetch',
        {
          Authorization: `Bearer ${JSON.parse(
            secureLocalStorage.getItem('Token')
          )}`,
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );

      console.log(res);
      if (
        res?.data?.code === 'EXP_000' ||
        res?.data?.code === 'EXP_001' ||
        res?.data?.code === 'EXP_002' ||
        res?.data?.code === 'EXP_003' ||
        res?.data?.code === 'EXP_004' ||
        res?.data?.code === 'EXP_005' ||
        res?.data?.code === 'EXP_006' ||
        res?.data?.code === 'EXP_007' ||
        res?.data?.code === 'EXP_008'
      ) {
        router.push('/');
      }
      // let tableData = res?.data?.response?.data?.map((item, index)=>{
      //   return {...}
      // })
      setLoading(false);
      setReportData(res?.data?.response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <section>
      <ExportZone h4="Authorized Transaction Reports" />

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
        <div className="table-wrapper ">
          <Table columns={columns} dataSource={reportData} />

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

      {/* view details modals  */}

      <Modal
        title={<div className="text-center">Report Details</div>}
        centered
        open={modalReport}
        onOk={() => setModalReport(false)}
        className="our-modal report-modal"
        footer={null}
        onCancel={() => setModalReport(false)}
      >
        <div className="report-details-modal border-bottom ">
          <h4 className="mb-4">Transaction Details</h4>
          <div className="row">
            <div className="col-md-4 col-6">
              <h6>
                Transaction date <span>{CalenderIcon}</span>{' '}
              </h6>
              <p>Jan 11th, 2022</p>
            </div>
            <div className="col-md-4 col-6">
              <h6>Account number</h6>
              <p>0123456789</p>
            </div>
            <div className="col-md-4 col-6">
              <h6>Transaction type</h6>
              <p>{BankDebit} Bank Debit</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 col-6">
              <h6>Transaction reference</h6>
              <p>0123456789</p>
            </div>
            <div className="col-md col-6">
              <h6>Bank Name</h6>
              <p>
                {' '}
                <span>
                  <Image
                    src={'/icons/Bank_logo.png'}
                    alt="bank logo"
                    width={22}
                    height={22}
                  />
                </span>{' '}
                Guarantee Trust Bank
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-6">
              <h6>Tracking ID </h6>
              <p>ABC-12345</p>
            </div>
            <div className="col-md col-6">
              <h6>
                Report date <span>{CalenderIcon}</span>{' '}
              </h6>
              <p>Jan 11th, 2022</p>
            </div>
          </div>
        </div>

        <div className="report-details-modal pb-4">
          <div className="row">
            <div>
              <h4 className="bold">Tracking Details</h4>
            </div>
          </div>
          <div className="row">
            <h6>Report status</h6>
            <p className={`statuses ${currentStatus}`}>• {currentStatus}</p>
          </div>

          <div className="row notes">
            <h6
              className="mb-2"
              style={{ color: '#000000', fontWeight: 'bold' }}
            >
              Notes
            </h6>

            <div>
              <Input.TextArea
                rows={6}
                placeholder="what did you notice"
                maxLength={8}
              />
            </div>
          </div>

          <Form.Item className="buttons">
            <Button
              // type="primary"
              onClick={() => setModalOpen(false)}
              htmlType="submit"
              className="me-3"
              style={{ background: '#7D0003', color: '#fff' }}
            >
              Process
            </Button>
            <Button
              // type="primary"
              onClick={() => setModalOpen(false)}
              style={{
                background: '#FAEFF0',
                color: '#7D0003',
              }}
            >
              Decline
            </Button>
          </Form.Item>
        </div>
      </Modal>

      {/* signature modal  */}

      <Modal
        title={<div className="text-center">Signatures</div>}
        centered
        open={modalsignature}
        onOk={() => setModalSignature(false)}
        className="our-modal report-modal"
        footer={null}
        onCancel={() => setModalSignature(false)}
      >
        <div className="report-details-modal signature-modal">
          <div className="separation">
            <h4>Processing Details</h4>

            <div className="row">
              <div className="col-sm-6 col-6">
                <h6>Processing Details</h6>
                <p>Atanda Specter</p>
              </div>
              <div className="col-sm-6 col-6">
                <h6>
                  Process date <span className="ms-1">{CalenderIcon}</span>
                </h6>
                <p>Jan 11th, 2022 15:20</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h6>
                  Report date to Process Interval{' '}
                  <span className="ms-1">{CalenderIcon}</span>
                </h6>
                <p>1 year : 4months : 100 days : 15hrs : 40mins : 23 secs</p>
              </div>
            </div>
          </div>

          <div className="separation">
            <h4>Initiation Details</h4>

            <div className="row">
              <div className="col-sm-6 col-6">
                <h6>Initiated by</h6>
                <p>Atanda Specter</p>
              </div>
              <div className="col-sm-6 col-6">
                <h6>
                  Initiate date <span className="ms-1">{CalenderIcon}</span>
                </h6>
                <p>Jan 11th, 2022 15:20</p>
              </div>
            </div>

            <div className="row ">
              <div className="col-12">
                <h6>
                  Process date to Initaite Interval{' '}
                  <span className="ms-1">{CalenderIcon}</span>
                </h6>
                <p>1 year : 4months : 100 days : 15hrs : 40mins : 23 secs</p>
              </div>
            </div>
          </div>

          <div>
            <h4>Recovery Details</h4>

            <div className="row">
              <div className="col-sm-6 col-6">
                <h6>Initiated by</h6>
                <p>Atanda Specter</p>
              </div>
              <div className="col-sm-6 col-6">
                <h6>
                  Process date <span className="ms-1">{CalenderIcon}</span>
                </h6>
                <p>Jan 11th, 2022 15:20</p>
              </div>
            </div>

            <div className="row pb-lg-5 pb-4">
              <div className="col-12">
                <h6>
                  Report date to Process Interval{' '}
                  <span className="ms-1">{CalenderIcon}</span>
                </h6>
                <p>1 year : 4months : 100 days : 15hrs : 40mins : 23 secs</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* filter modal  */}

      <Modal
        title="Filter by:"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        className="our-modal filter-transaction"
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="status" label="Status:" className="wrap-check-group">
            <>
              <div>
                <Checkbox
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  checked={checkAll}
                  className="me-3"
                >
                  All
                </Checkbox>
              </div>

              <Checkbox.Group
                options={plainOptions}
                value={checkedList}
                onChange={onChanged}
              />
            </>
          </Form.Item>

          <Form.Item
            name="transactionType:"
            label="Transaction type:"
            className="wrap-check-group"
          >
            <>
              <Checkbox
                indeterminate={indeterminate2}
                onChange={onCheckAllChange2}
                checked={checkAll2}
                className="me-3"
              >
                All
              </Checkbox>

              <Checkbox.Group
                options={transactionOptions}
                value={checkedList}
                onChange={onChanged2}
              />
            </>
          </Form.Item>
          <Form.Item
            name="rangeFilter"
            label="Date range:"
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
              // type="primary"
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
    </section>
  );
}
