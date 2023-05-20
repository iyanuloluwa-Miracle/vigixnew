import React, { useState } from 'react';
import ExportZone from './ExportZone';
import AddIcon from './Vectors/AddIcon';
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
  Skeleton,
  Spin,
} from 'antd';
import {
  SearchIcon,
  FilterIcon,
  DirLeft,
  DirRight,
  CalenderIcon,
  BankDebit,
} from '../utility/svg';

const typeData = [
  {
    id: 1,
    transactionType: 'Bank Fraud',
    addedBy: 'Dammy',
    Status: 'Enabled',
    dateCreated: 'Sept 17, 2022 11:20',
  },
  {
    id: 2,
    transactionType: 'Wrong Transfer',
    addedBy: 'Jide Ola',
    Status: 'Disabled',
    dateCreated: 'Jun 12, 2020 22:15',
  },
  {
    id: 3,
    transactionType: 'Card Fraud',
    addedBy: 'Specter',
    Status: 'Enabled',
    dateCreated: 'May 8, 2021 18:30',
  },
  {
    id: 4,
    transactionType: 'Bank Fraud',
    addedBy: 'Dammy',
    Status: 'Enabled',
    dateCreated: 'Sept 17, 2022 11:20',
  },
  {
    id: 5,
    transactionType: 'Wrong Transfer',
    addedBy: 'Jide Ola',
    Status: 'Disabled',
    dateCreated: 'Jun 12, 2020 22:15',
  },
  {
    id: 6,
    transactionType: 'Card Fraud',
    addedBy: 'Specter',
    Status: 'Enabled',
    dateCreated: 'May 8, 2021 18:30',
  },
  {
    id: 7,
    transactionType: 'Bank Fraud',
    addedBy: 'Dammy',
    Status: 'Enabled',
    dateCreated: 'Sept 17, 2022 11:20',
  },
  {
    id: 8,
    transactionType: 'Wrong Transfer',
    addedBy: 'Jide Ola',
    Status: 'Disabled',
    dateCreated: 'Jun 12, 2020 22:15',
  },
  {
    id: 9,
    transactionType: 'Card Fraud',
    addedBy: 'Specter',
    Status: 'Enabled',
    dateCreated: 'May 8, 2021 18:30',
  },
  {
    id: 10,
    transactionType: 'Card Fraud',
    addedBy: 'Specter',
    Status: 'Enabled',
    dateCreated: 'May 8, 2021 18:30',
  },
];

const dateFormat = 'YYYY-MM-DD';

export default function TransactionType() {
  const { Search } = Input;

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [rows, seRows] = useState(25);
  const [sunmitLoading, setSubmitLoading] = useState(false);
  const [modalAddTransactionType, setModalAddTransactionType] = useState(false);
  const [modalEditTransactionType, setModalEditTransactionType] =
    useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [filterForm] = Form.useForm();

  const onSearch = value => console.log(value);

  const columns = [
    {
      title: 'Transaction Type',
      dataIndex: 'transactionType',
      key: 'transactionType',
      render: text => (
        <>
          <Checkbox className="me-3" /> {text}
        </>
      ),
    },
    {
      title: 'Added by',
      dataIndex: 'addedBy',
      key: 'addedBy',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: text => (
        <div className="view-btn">
          <Switch
            checked={text == 'Enabled' ? true : false}
            // onChange={checked => checkChange(checked, el)}
          />
        </div>
      ),
    },
    {
      title: 'Date created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
    },
    {
      title: ' ',
      dataIndex: 'edit',
      key: 'edit',
      render: text => (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => {
              //   setEditBankData(el);
              setModalEditTransactionType(true);
            }}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  //   const lastPgae = () => {
  //     console.log('yeah');
  //     if (page <= 1) {
  //       return;
  //     } else {
  //       setPage(prevState => prevState - 1);
  //     }
  //   };

  //   const nextPgae = () => {
  //     if (page == reportData?.pagination[0]?.totalPages) {
  //       return;
  //     } else {
  //       setPage(prevState => prevState + 1);
  //       console.log(page);
  //     }
  //     console.log('yeah');
  //   };

  const addNewType = values => {
    console.log(`success in : ${values}`);
  };

  const addEditType = values => {
    console.log(`success in : ${values}`);
  };

  const onFinish = values => {
    console.log(`success in : ${values}`);
  };

  const handleClearForm = () => {
    console.log('yeahhhhh');
    // filterForm.resetFields();
    filterForm.resetFields();
  };

  return (
    <div>
      <div className="container">
        <div className="row _tabs-wrapper">
          <div className="col-auto">
            <h4 className="_tabs">Transaction type</h4>
          </div>
          <div className="col-auto d-flex gap-4">
            <Button
              icon={<AddIcon />}
              style={{ background: '#7D0003', color: '#fff', width: 'auto' }}
              onClick={() => setModalAddTransactionType(true)}
            >
              Add new transaction type
            </Button>
          </div>
        </div>
      </div>

      <div className="container search-filter">
        <div className="row justify-content-between gap-3">
          <div className="col-md-auto d-flex flex-wrap gap-3 me-lg-5">
            <div className="the-search">
              <Search
                prefix={SearchIcon}
                placeholder="Search by transaction type..."
                onSearch={onSearch}
                className="searching"
              />
            </div>
            <div className="filter-btn-wrapper">
              <Button icon={FilterIcon} onClick={() => setFilterModal(true)}>
                Filter by:
              </Button>
            </div>
          </div>
          <div className="col-md-auto d-flex justify-content-end gap-lg-5 gap-4">
            <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
              <p className="det">
                Page{' '}
                <span className="our-color">
                  2{/* {reportData?.pagination[0]?.pageNo} */}
                </span>{' '}
                of{' '}
                <span className="our-color">
                  0{/* {reportData?.pagination[0]?.totalPages} */}
                </span>
              </p>
              <div className="dir">
                <button
                  className="border-0"
                  //   onClick={() => lastPgae()}
                  //   disabled={reportData?.pagination[0]?.pageNo <= 1}
                >
                  <span className="">{DirLeft}</span>
                </button>
                <button
                  className="border-0"
                  //   onClick={() => nextPgae()}
                  //   disabled={
                  //     reportData?.pagination[0]?.pageNo >=
                  //     reportData?.pagination[0]?.totalPages
                  //   }
                >
                  <span className="">{DirRight}</span>
                </button>
              </div>
            </div>
            <div>
              <Space wrap>
                <Select
                  defaultValue="25"
                  style={{
                    width: 120,
                  }}
                  //   onChange={handlePerPage}
                  options={[
                    {
                      value: '25',
                      label: '25 per page',
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
          <div className="select-all"></div>
        </div>
      </div>

      <div className="container">
        <div className="table-wrapper ">
          {!loading ? (
            <Skeleton active paragraph={{ rows: 12 }} />
          ) : (
            <Table
              columns={columns}
              dataSource={typeData}
              pagination={{ pageSize: rows }}
            />
          )}

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

            {/* {!loading && (
              <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
                <p className="det">
                  Page{' '}
                  <span className="our-color">
                    {reportData?.pagination[0]?.pageNo}
                  </span>{' '}
                  of{' '}
                  <span className="our-color">
                    {reportData?.pagination[0]?.totalPages}
                  </span>
                </p>
                <div className="dir">
                  <button
                    className="border-0"
                    onClick={() => lastPgae()}
                    disabled={reportData?.pagination[0]?.pageNo <= 1}
                  >
                    <span className="">{DirLeft}</span>
                  </button>
                  <button
                    className="border-0"
                    onClick={() => nextPgae()}
                    disabled={
                      reportData?.pagination[0]?.pageNo >=
                      reportData?.pagination[0]?.totalPages
                    }
                  >
                    <span className="">{DirRight}</span>
                  </button>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* filter modal  */}

      <Modal
        title="Filter by:"
        centered
        open={filterModal}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        className="our-modal filter-transaction"
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish} form={filterForm}>
          <Form.Item name="status" label="Status:" className="wrap-check-group">
            <Radio.Group>
              <Radio value="Approved">Approved</Radio>
              <Radio value="Awaiting Confirmation">Awaiting Confirmation</Radio>
              <Radio value="Declined">Declined</Radio>
              <Radio value="Failed">Failed</Radio>
              <Radio value="Processed">Processed</Radio>
              <Radio value="Initiated">Initiated</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="transactionType"
            label="Transaction type:"
            className="wrap-check-group"
          >
            <Radio.Group>
              <Radio value={'1'}>Bank debit</Radio>
              <Radio value={'2'}>Wrong Transfer</Radio>
              <Radio value={'3'}>Card Fraud</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item className="date-filter" name="startDate">
            <DatePicker
              // defaultValue={null}
              format={dateFormat}
              placeholder="From"
              style={{
                width: 270,
              }}
            />
          </Form.Item>

          <Form.Item className="date-filter" name="endDate">
            <DatePicker
              // defaultValue={null}
              format={dateFormat}
              placeholder="To"
              style={{
                width: 270,
              }}
            />
          </Form.Item>

          <Space direction="" className="flex-wrap"></Space>

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
              onClick={() => handleClearForm()}
              style={{ background: '#FFF', color: '#1C1C1C' }}
            >
              Clear
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* add type modal  */}

      <Modal
        centered
        open={modalAddTransactionType}
        onOk={() => setModalAddTransactionType(false)}
        onCancel={() => setModalAddTransactionType(false)}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Add New Transaction Type</h4>
          <p>Fill the fields below to add a new transaction type.</p>
        </div>

        <Form layout="vertical" onFinish={addNewType}>
          <Form.Item
            name="transactionType"
            label="Transaction Type"
            className="heights"
            rules={[
              {
                required: true,
                message: 'Please input Transaction Type!',
              },
            ]}
          >
            <Input placeholder="Enter partner name" />
          </Form.Item>

          <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className={
              sunmitLoading ? 'our-btn-fade w-100 mt-4 mb-4' : 'w-100 mt-4 mb-4'
            }
            loading={sunmitLoading}
            disabled={sunmitLoading}
          >
            {sunmitLoading ? (
              <Spin
                className="white-spinner d-flex align-items-center justify-content-center"
                style={{ color: 'white' }}
              />
            ) : (
              <>Add Transaction Type</>
            )}
          </Button>
        </Form>
      </Modal>

      {/* edit type modal  */}

      <Modal
        centered
        open={modalEditTransactionType}
        onOk={() => setModalEditTransactionType(false)}
        onCancel={() => setModalEditTransactionType(false)}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Add New Transaction Type</h4>
          <p>Fill the fields below to add a new transaction type.</p>
        </div>

        <Form layout="vertical" onFinish={addEditType}>
          <Form.Item
            name="transactionType"
            label="Transaction Type"
            className="heights"
            rules={[
              {
                required: true,
                message: 'Please input Transaction Type!',
              },
            ]}
          >
            <Input placeholder="Enter partner name" />
          </Form.Item>

          <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className={
              sunmitLoading ? 'our-btn-fade w-100 mt-4 mb-4' : 'w-100 mt-4 mb-4'
            }
            loading={sunmitLoading}
            disabled={sunmitLoading}
          >
            {sunmitLoading ? (
              <Spin
                className="white-spinner d-flex align-items-center justify-content-center"
                style={{ color: 'white' }}
              />
            ) : (
              <>Add Transaction Type</>
            )}
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
