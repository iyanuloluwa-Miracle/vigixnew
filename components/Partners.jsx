import React, { use, useEffect, useState } from 'react';
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
import moment from 'moment';
import AddIcon from './Vectors/AddIcon';
import secureLocalStorage from 'react-secure-storage';
import api from '../apis';
import { jsonToHex } from '../apis/util';
import { toast } from 'sonner';

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

export default function Partners() {
  const { Search } = Input;
  const [modalAddPartner, setModalAddPartner] = useState(false);
  const [sunmitLoading, setSubmitLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [rows, seRows] = useState(25);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalEditPartners, setModalEditPartners] = useState(false);
  const [partnersData, setPartnersData] = useState(null);
  const [editPartnerData, setEditPartnerData] = useState(null);

  const [form] = Form.useForm();

  const onSearch = value => {
    // setPage(1);
    // setSearch(value);
    console.log({ searchvalue: value });
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
      dataIndex: 'partnerName',
      key: 'partnerName',
    },
    {
      title: 'Logo url',
      dataIndex: 'logoURL',
      key: 'logoURL',
      render: text => (
        <div className="page-url">
          {'https://vigilant.com/dashboard/pagemanagement/page'}
        </div>
      ),
    },
    {
      title: 'Added by',
      dataIndex: 'partnerAddedBy',
      key: 'partnerAddedBy',
    },
    {
      title: 'Status',
      dataIndex: 'partnerStatus',
      key: 'partnerStatus',
      render: (text, index) => (
        <div className="view-btn">
          <Switch
            checked={text == 'Enabled' ? true : false}
            onChange={checked => {
              updatePartner(checked, index);
            }}
          />
        </div>
      ),
    },
    {
      title: 'Date created',
      dataIndex: 'partnerCreatedAt',
      key: 'partnerCreatedAt',
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
              setEditPartnerData(index);
              setModalEditPartners(true);
            }}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  const handlePerPage = value => {
    console.log(`selected ${value}`);
    seRows(value);
  };

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

  const addPartner = async values => {
    setSubmitLoading(true);
    const payload = {
      remote: jsonToHex({
        action: 'add',
        partnerName: values?.partnerName,
      }),
    };

    console.log({ payload });

    try {
      const res = await api.post(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/partners',
        payload,
        {
          Authorization: `Bearer ${JSON.parse(
            secureLocalStorage.getItem('Token')
          )}`,
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );

      console.log({ res });

      toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoading(false);
      setModalAddPartner(false);
      getParters();
    }
  };

  const editPartner = async values => {
    // console.log(values);
    setSubmitLoading(true);
    const payload = {
      remote: jsonToHex({
        action: 'edit',
        partnerID: editPartnerData?.partnerID,
        partnerName: values?.partnerName,
      }),
    };

    console.log({ payload });

    try {
      const res = await api.put(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/partners',
        payload,
        {
          Authorization: `Bearer ${JSON.parse(
            secureLocalStorage.getItem('Token')
          )}`,
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );

      console.log({ res });

      toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoading(false);
      setModalEditPartners(false);
      getParters();
    }
  };

  const updatePartner = async (checked, editData) => {
    //   setSubmitLoading(true);
    const payload = {
      remote: jsonToHex({
        action: 'updateStatus',
        partnerID: editData?.partnerID,
        partnerStatus: checked ? 'Enabled' : 'Disabled',
      }),
    };

    console.log({ payload });

    try {
      const res = await api.put(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/partners',
        payload,
        {
          Authorization: `Bearer ${JSON.parse(
            secureLocalStorage.getItem('Token')
          )}`,
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );

      console.log({ res });

      toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoading(false);
      setModalEditPartners(false);
      getParters();
    }
  };

  const getParters = async () => {
    setLoading(true);
    try {
      const res = await api.get(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/partners?action=fetch',
        {
          Authorization: `Bearer ${JSON.parse(
            secureLocalStorage.getItem('Token')
          )}`,
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );
      console.log(res);
      setPartnersData(res?.data?.response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   setTableData(
  //     partnersData?.data?.map((el, index) => ({
  //       ...el,
  //       bankStatus: (
  //         <div className="view-btn">
  //           <Switch
  //             checked={el?.bankStatus == 'Enabled' ? true : false}
  //             onChange={checked => checkChange(checked, el)}
  //           />
  //         </div>
  //       ),
  //       bankUpdatedAt: moment(el?.bankCreatedAt).format('Do MMM YYYY'),
  //       views: (
  //         <div className="view-btn">
  //           <Button
  //             className="view-report"
  //             onClick={() => {
  //               setEditBankData(el);
  //               setModalEditMember(true);
  //             }}
  //           >
  //             Edit
  //           </Button>
  //         </div>
  //       ),
  //     }))
  //   );
  // }, [tableData]);

  useEffect(() => {
    getParters();
  }, [rows, page]);

  useEffect(() => {
    // Set the form values after the data has been fetched
    form.setFieldsValue(editPartnerData);
  }, [editPartnerData, form]);

  console.log({ editPartnerData });

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
            {!loading && (
              <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
                <p className="det">
                  Page{' '}
                  <span className="our-color">
                    {partnersData?.pagination[0]?.pageNo}
                  </span>{' '}
                  of{' '}
                  <span className="our-color">
                    {partnersData?.pagination[0]?.totalPages}
                  </span>
                </p>
                <div className="dir">
                  <button
                    className="border-0"
                    onClick={() => lastPgae()}
                    disabled={partnersData?.pagination[0]?.pageNo <= 1}
                  >
                    <span className="">{DirLeft}</span>
                  </button>
                  <button
                    className="border-0"
                    onClick={() => nextPgae()}
                    disabled={
                      partnersData?.pagination[0]?.pageNo >=
                      partnersData?.pagination[0]?.totalPages
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
              dataSource={partnersData?.data}
              pagination={{ pageSize: rows }}
            />
          )}

          <div className="our-pagination d-flex justify-content-center">
            {!loading && (
              <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
                <p className="det">
                  Page{' '}
                  <span className="our-color">
                    {partnersData?.pagination[0]?.pageNo}
                  </span>{' '}
                  of{' '}
                  <span className="our-color">
                    {partnersData?.pagination[0]?.totalPages}
                  </span>
                </p>
                <div className="dir">
                  <button
                    className="border-0"
                    onClick={() => lastPgae()}
                    disabled={partnersData?.pagination[0]?.pageNo <= 1}
                  >
                    <span className="">{DirLeft}</span>
                  </button>
                  <button
                    className="border-0"
                    onClick={() => nextPgae()}
                    disabled={
                      partnersData?.pagination[0]?.pageNo >=
                      partnersData?.pagination[0]?.totalPages
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

        <Form layout="vertical" onFinish={editPartner} form={form}>
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
