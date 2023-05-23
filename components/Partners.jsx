import React, { useState } from 'react';
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
import AddIcon from './Vectors/AddIcon';

export default function Partners() {
  const { Search } = Input;
  const [modalAddPartner, setModalAddPartner] = useState(false);
  const [sunmitLoading, setSubmitLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [rows, seRows] = useState(25);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalEditPartners, setModalEditPartners] = useState(false);

  const onSearch = value => {
    // setPage(1);
    // setSearch(value);
  };

  const columns = [
    {
      title: ' ',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: text => (
        <>
          <Checkbox className="me-3" />
        </>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Logo url',
      dataIndex: 'logoURL',
      key: 'logoURL',
      render: text => <div className="page-url">{text}</div>,
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
              setModalEditPartners(true);
            }}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  const typeData = [
    {
      id: 1,
      name: 'Central Bank of Nigeria (CBN)',
      addedBy: 'Dammy',
      Status: 'Enabled',
      dateCreated: 'Sept 17, 2022 11:20',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
    {
      id: 2,
      name: 'The Nigeria Police Force (NPF)',
      addedBy: 'Jide Ola',
      Status: 'Disabled',
      dateCreated: 'Jun 12, 2020 22:15',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
    {
      id: 3,
      name: 'NIBSS',
      addedBy: 'Specter',
      Status: 'Enabled',
      dateCreated: 'May 8, 2021 18:30',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
    {
      id: 4,
      name: 'Central Bank of Nigeria (CBN)',
      addedBy: 'Dammy',
      Status: 'Enabled',
      dateCreated: 'Sept 17, 2022 11:20',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
    {
      id: 5,
      name: 'The Nigeria Police Force (NPF)',
      addedBy: 'Jide Ola',
      Status: 'Disabled',
      dateCreated: 'Jun 12, 2020 22:15',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
    {
      id: 6,
      name: 'NIBSS',
      addedBy: 'Specter',
      Status: 'Enabled',
      dateCreated: 'May 8, 2021 18:30',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
    {
      id: 7,
      name: 'Central Bank of Nigeria (CBN)',
      addedBy: 'Dammy',
      Status: 'Enabled',
      dateCreated: 'Sept 17, 2022 11:20',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
    {
      id: 8,
      name: 'The Nigeria Police Force (NPF)',
      addedBy: 'Jide Ola',
      Status: 'Disabled',
      dateCreated: 'Jun 12, 2020 22:15',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
    {
      id: 9,
      name: 'NIBSS',
      addedBy: 'Specter',
      Status: 'Enabled',
      dateCreated: 'May 8, 2021 18:30',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
    {
      id: 10,
      name: 'Central Bank of Nigeria (CBN)',
      addedBy: 'Specter',
      Status: 'Enabled',
      dateCreated: 'May 8, 2021 18:30',
      logoURL: 'https://vigilant.com/dashboard/pagemanagement/page',
    },
  ];

  const addPartner = values => {
    console.log(values);
  };

  const editPartner = values => {
    console.log(values);
  };
  return (
    <>
      <div className="container">
        <div className="row _tabs-wrapper">
          <div className="col-auto">
            <h4 className="_tabs">Partners </h4>
          </div>
          <div className="col-auto d-flex gap-4">
            <Button
              icon={<AddIcon />}
              style={{ background: '#7D0003', color: '#fff', width: 'auto' }}
              onClick={() => setModalAddPartner(true)}
            >
              Add new partner
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
                placeholder="Search by partner name..."
                onSearch={onSearch}
                className="searching"
              />
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

      {/* add partners  */}

      <Modal
        centered
        open={modalAddPartner}
        onOk={() => setModalAddPartner(false)}
        onCancel={() => setModalAddPartner(false)}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Add New Partner</h4>
          <p>Fill the fields below to add a new partner.</p>
        </div>
        <Form layout="vertical" onFinish={addPartner}>
          <Form.Item
            name="partnerName"
            label="Partner Name"
            className="heights"
            rules={[
              {
                required: true,
                message: 'Please input your partner name!',
              },
            ]}
          >
            <Input placeholder="Enter partner name" />
          </Form.Item>

          <Form.Item
            name="logoUrl"
            label="Logo URL"
            className="heights"
            rules={[
              {
                required: true,
                message: 'Please input your logo url!',
              },
            ]}
          >
            <Input placeholder="Enter logo url" />
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
              <>Add Bank</>
            )}
          </Button>
        </Form>
      </Modal>

      {/* edit partners  */}

      <Modal
        centered
        open={modalEditPartners}
        onOk={() => setModalEditPartners(false)}
        onCancel={() => setModalEditPartners(false)}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Add New Transaction Type</h4>
          <p>Fill the fields below to add a new transaction type.</p>
        </div>

        <Form layout="vertical" onFinish={editPartner}>
          <Form.Item
            name="partnerName"
            label="Partner Name"
            className="heights"
            rules={[
              {
                required: true,
                message: 'Please input your partner name!',
              },
            ]}
          >
            <Input placeholder="Enter partner name" />
          </Form.Item>

          <Form.Item
            name="logoUrl"
            label="Logo URL"
            className="heights"
            rules={[
              {
                required: true,
                message: 'Please input your logo url!',
              },
            ]}
          >
            <Input placeholder="Enter logo url" />
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
              <>Edit Partner</>
            )}
          </Button>
        </Form>
      </Modal>
    </>
  );
}

/* add Bank modal */
