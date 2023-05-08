import React, { useState, useEffect } from 'react';
import AddIcon from './Vectors/AddIcon';
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
  Skeleton,
  DatePicker,
  Switch,
} from 'antd';
import { SearchIcon, FilterIcon, DirLeft, DirRight } from '../utility/svg';
import api from '../apis';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import secureLocalStorage from 'react-secure-storage';

export default function AdminMembersBank() {
  const { Search } = Input;
  const router = useRouter();
  const { query } = router;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddMember, setModalAddMember] = useState(false);
  const [modalEditMember, setModalEditMember] = useState(false);
  const [value, setValue] = useState('all');
  const [loading, setLoading] = useState(true);
  const [banksData, setBanksData] = useState(null);

  const onFinish = values => {
    console.log('Success:', values);
  };

  const addNewBank = values => {
    console.log('Success:', values);
    setModalAddMember(false);
  };

  const onSearch = value => console.log(value);
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeCheck = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const checkChange = checked => {
    console.log(`switch to ${checked}`);
  };

  const token = secureLocalStorage.getItem('Token');

  // const { data: fetchBanks, isLoading: fetchBanksLoading } = useQuery({
  //   queryKey: ['get_banks', query],
  //   queryFn: () => {
  //     return api.fetchBanks(token, {
  //       ...query,
  //     });
  //   },
  //   onSuccess: () => {},
  // });

  const columns = [
    {
      title: ' ',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: text => (
        <div>
          <Checkbox onChange={onChange} />
        </div>
      ),
    },
    {
      title: 'Bank name',
      dataIndex: 'bankName',
      key: 'bankName',
      render: text => <div className="max-content">{text}</div>,
    },
    {
      title: 'Bank code',
      dataIndex: 'bankCode',
      key: 'bankCode',
    },
    {
      title: 'Bank logo url',
      dataIndex: 'bankLogoUrl',
      key: 'bankLogoUrl',
      responsive: ['lg'],
      render: text => <div className="page-url">{text}</div>,
    },
    {
      title: 'Added by',
      dataIndex: 'bankAddedBy',
      key: 'bankAddedBy',
      render: text => <div className="max-content">{text}</div>,
    },
    {
      title: 'Status',
      dataIndex: 'bankStatus',
      key: 'bankStatus',
      render: text => (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
    },
    {
      title: 'Date Added',
      dataIndex: 'bankUpdatedAt',
      key: 'bankUpdatedAt',
    },
    {
      title: ' ',
      dataIndex: 'views',
      key: 'views',
      render: text => (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      bankName: 'Guarantee Trust Bank',
      bankCode: '1234',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Finn',
      DateTime: 'Sept 17, 2022 11:20',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '2',
      bankName: 'First Bank of Nigeria',
      bankCode: '5567',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Specter',
      DateTime: 'Jun 12, 2020 22:15',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '3',
      bankName: 'United Bank for Africa',
      bankCode: '3453',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Dammy',
      DateTime: 'May 8, 2021 18:30',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '4',
      bankName: 'Zenith Bank',
      bankCode: '6840',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Jide Ola',
      DateTime: 'Aug 16, 2020 13:17',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '5',
      bankName: 'Guarantee Trust Bank',
      bankCode: '3453',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Dan Fodio',
      DateTime: 'Sept 17, 2022 11:20',
      status: (
        <div className="view-btn">
          <Switch
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '6',
      bankName: 'First Bank of Nigeria',
      bankCode: '4598',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Specter',
      DateTime: 'Jun 12, 2020 22:15',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '7',
      bankName: 'United Bank for Africa',
      bankCode: '4622',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Dammy',
      DateTime: 'May 8, 2021 18:30',
      status: (
        <div className="view-btn">
          <Switch
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '8',
      bankName: 'Zenith Bank',
      bankCode: '4090',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Jide Ola',
      DateTime: 'Aug 16, 2020 13:17',
      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '9',
      bankName: 'Kuda',
      bankCode: '4564',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Atanda',
      DateTime: 'Sept 17, 2022 11:20',
      status: (
        <div className="view-btn">
          <Switch
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      key: '10',
      bankName: 'Palmpay',
      bankCode: '4535',
      logoUrl: 'https://vigilant.com/dashboard/pagemanagement/page',
      addedBy: 'Ronaldo',
      DateTime: 'Jun 12, 2020 22:15',

      status: (
        <div className="view-btn">
          <Switch
            defaultChecked
            onChange={checkChange}
            // style={{ height: '18px' }}
          />
        </div>
      ),
      views: (
        <div className="view-btn">
          <Button
            className="view-report"
            onClick={() => setModalEditMember(true)}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const getBanks = async () => {
      setLoading(true);
      try {
        const res = await api.get(
          'https://safe.staging.vigilant.ng/manage/api/v1.0/banks?action=fetch',
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

        setLoading(false);
        setBanksData(res?.data?.response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getBanks();
  }, [router]);

  return (
    <section>
      <div className="container">
        <div className="row _tabs-wrapper">
          <div className="col-auto">
            <h4 className="_tabs">Banks</h4>
          </div>
          <div className="col-auto d-flex gap-4">
            <Button
              icon={<AddIcon />}
              style={{ background: '#7D0003', color: '#fff' }}
              onClick={() => setModalAddMember(true)}
            >
              Add new bank
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
          {loading ? (
            <Skeleton active paragraph={{ rows: 12 }} />
          ) : (
            <Table columns={columns} dataSource={banksData?.data} />
          )}

          <div className="our-pagination d-flex justify-content-center">
            {!loading && (
              <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
                <p className="det">
                  Page{' '}
                  <span className="our-color">
                    {banksData?.pagination[0]?.pageNo}
                  </span>{' '}
                  of{' '}
                  <span className="our-color">
                    {banksData?.pagination[0]?.totalPages}
                  </span>
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
            )}
          </div>
        </div>
      </div>

      {/* filter by modal */}

      <Modal
        title="Filter by:"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        className="our-modal"
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="status" label="Status:">
            <Radio.Group onChange={onChangeCheck} value={value}>
              <Radio value={'all'}>All</Radio>
              <Radio value={'active'}>Active</Radio>
              <Radio value={'inactive'}>Inactive</Radio>
            </Radio.Group>
          </Form.Item>

          <Space direction="" className="flex-wrap">
            <Form.Item name="Company" label="Company:" className="range-filter">
              <Select
                defaultValue="All"
                style={{
                  width: 270,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'All',
                    label: 'All',
                  },
                  {
                    value: 'Vigilant',
                    label: 'Vigilant',
                  },
                  {
                    value: 'CBN',
                    label: 'CBN',
                  },
                  {
                    value: 'NPF',
                    label: 'NPF',
                  },
                  {
                    value: 'E-tranzact',
                    label: 'E-tranzact',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              name="Role"
              label="Role access:"
              className="range-filter"
            >
              <Select
                defaultValue="All"
                style={{
                  width: 270,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'All',
                    label: 'All',
                  },
                  {
                    value: 'Customer support',
                    label: 'Customer support',
                  },
                  {
                    value: 'Consumer protection',
                    label: 'Consumer protection',
                  },
                  {
                    value: 'Inspector general',
                    label: 'Inspector general',
                  },
                  {
                    value: 'E-tranzact',
                    label: 'E-tranzact',
                  },
                ]}
              />
            </Form.Item>
          </Space>

          <Form.Item
            name="dateCreated"
            label="Date created:"
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

      {/* add Bank modal */}

      <Modal
        centered
        open={modalAddMember}
        onOk={() => setModalAddMember(false)}
        onCancel={() => setModalAddMember(false)}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Add New Bank</h4>
          <p>Fill the fields below to add a new bank.</p>
        </div>
        <Form layout="vertical" onFinish={addNewBank}>
          <Form.Item name="bankName" label="Bank Name" className="heights">
            <Input placeholder="Enter bank name" required />
          </Form.Item>
          <Form.Item name="bankCode" label="Bank Code" className="heights">
            <Input placeholder="Enter bank code" required />
          </Form.Item>

          <Form.Item
            name="bankLogoURL"
            label="Bank Logo URL"
            className="heights"
          >
            <Input placeholder="Enter bank code url" required />
          </Form.Item>

          <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 mt-4 mb-4"
          >
            Add Bank
          </Button>
        </Form>
      </Modal>

      {/* edit member modal  */}

      <Modal
        centered
        open={modalEditMember}
        onOk={() => setModalEditMember(false)}
        onCancel={() => setModalEditMember(false)}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Edit Bank</h4>
          <p>Fill the fields below to edit bank.</p>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="bankName" label="Bank Name" className="heights">
            <Input placeholder="Enter bank name" />
          </Form.Item>
          <Form.Item name="bankCode" label="Bank Code" className="heights">
            <Input placeholder="Enter bank code" />
          </Form.Item>

          <Form.Item
            name="bankLogoURL"
            label="Bank Logo URL"
            className="heights"
          >
            <Input placeholder="Enter bank code url" />
          </Form.Item>

          <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 mt-4 mb-4"
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </section>
  );
}
