import React, { useState, useEffect } from 'react';
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
import { SearchIcon, FilterIcon, DirLeft, DirRight } from '../utility/svg';
import secureLocalStorage from 'react-secure-storage';
import api from '../apis';

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
  const [transactiontypes, setTransactiontypes] = useState(null);
  const [sunmitLoading, setSubmitLoading] = useState(false);
  const [modalAddTransactionType, setModalAddTransactionType] = useState(false);
  const [modalEditTransactionType, setModalEditTransactionType] =
    useState(false);
  const [editTypeData, setEditTypeData] = useState(null);

  const [form] = Form.useForm();

  const onSearch = value => console.log(value);

  const lastPgae = () => {
    if (page <= 1) {
      console.log('no more page');
      return;
    } else {
      setPage(prevState => prevState - 1);
    }
  };

  const nextPgae = () => {
    if (page => transactiontypes?.pagination[0]?.totalPages) {
      console.log('no more pages');
      return;
    } else {
      setPage(prevState => prevState + 1);
      console.log(page);
    }
    console.log('yeah');
  };

  const addNewType = values => {
    console.log(`success in : ${values}`);
  };

  const addEditType = values => {
    console.log(`success in : ${values}`);
  };

  const handlePerPage = value => {
    console.log(`selected ${value}`);
    seRows(value);
  };

  const getTypes = async () => {
    setLoading(true);
    try {
      const res = await api.get(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/transaction_type?action=fetch',
        {
          Authorization: `Bearer ${JSON.parse(
            secureLocalStorage.getItem('Token')
          )}`,
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );
      console.log(res);
      setTransactiontypes(res?.data?.response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTypes();
  }, [rows, page]);

  const columns = [
    {
      title: 'Transaction Type',
      dataIndex: 'type',
      key: 'type',
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
      dataIndex: 'status',
      key: 'status',
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
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: ' ',
      dataIndex: 'edit',
      key: 'edit',
      render: (text, index) => (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => {
              setEditTypeData(index);
              setModalEditTransactionType(true);
              // console.log();
            }}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    // Set the form values after the data has been fetched
    form.setFieldsValue(editTypeData);
  }, [editTypeData, form]);

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
          </div>
          <div className="col-md-auto d-flex justify-content-end gap-lg-5 gap-4">
            {!loading && (
              <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
                <p className="det">
                  Page{' '}
                  <span className="our-color">
                    {transactiontypes?.pagination[0]?.pageNo}
                  </span>{' '}
                  of{' '}
                  <span className="our-color">
                    {transactiontypes?.pagination[0]?.totalPages}
                  </span>
                </p>
                <div className="dir">
                  <button
                    className="border-0"
                    onClick={() => lastPgae()}
                    disabled={transactiontypes?.pagination[0]?.pageNo <= 1}
                  >
                    <span className="">{DirLeft}</span>
                  </button>
                  <button
                    className="border-0"
                    onClick={() => nextPgae()}
                    disabled={
                      transactiontypes?.pagination[0]?.pageNo >=
                      transactiontypes?.pagination[0]?.totalPages
                    }
                  >
                    <span className="">{DirRight}</span>
                  </button>
                </div>
              </div>
            )}
            <div>
              <Space wrap>
                <Select
                  defaultValue="25"
                  style={{
                    width: 120,
                  }}
                  onChange={handlePerPage}
                  value={`${rows} per page`}
                  options={[
                    {
                      value: '25',
                      label: '25',
                    },
                    {
                      value: '100',
                      label: '100',
                    },
                    {
                      value: '1000',
                      label: '1000',
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
          {loading ? (
            <Skeleton active paragraph={{ rows: 12 }} />
          ) : (
            <Table
              columns={columns}
              dataSource={transactiontypes?.data}
              pagination={{ pageSize: rows }}
            />
          )}

          <div className="our-pagination d-flex justify-content-center">
            {!loading && (
              <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
                <p className="det">
                  Page{' '}
                  <span className="our-color">
                    {transactiontypes?.pagination[0]?.pageNo}
                  </span>{' '}
                  of{' '}
                  <span className="our-color">
                    {transactiontypes?.pagination[0]?.totalPages}
                  </span>
                </p>
                <div className="dir">
                  <button
                    className="border-0"
                    //   onClick={() => lastPgae()}
                    disabled={transactiontypes?.pagination[0]?.pageNo <= 1}
                  >
                    <span className="">{DirLeft}</span>
                  </button>
                  <button
                    className="border-0"
                    //   onClick={() => nextPgae()}
                    disabled={
                      transactiontypes?.pagination[0]?.pageNo >=
                      transactiontypes?.pagination[0]?.totalPages
                    }
                  >
                    <span className="">{DirRight}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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

        <Form layout="vertical" onFinish={addEditType} form={form}>
          <Form.Item
            name="type"
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
