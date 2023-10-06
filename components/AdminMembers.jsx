import React, { useState, useEffect } from 'react';
import AddIcon from './Vectors/AddIcon';
import SettingsVector2 from './Vectors/settings2';
import Link from 'next/link';
import { toast } from 'sonner';
import {
  Button,
  Input,
  Select,
  Space,
  Checkbox,
  Spin,
  Table,
  Modal,
  Form,
  Radio,
  DatePicker,
  Switch,
} from 'antd';
import { SearchIcon, FilterIcon, DirLeft, DirRight } from '../utility/svg';
import api from '../apis';
import { BASE_URL } from '../utility/constants';

import { fetchAllAdminUsers } from "../apis"
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { OverlayContext } from './Layout';

export default function AdminMembers() {
  const { user } = OverlayContext();
  const { Search } = Input;
  //token
  const token = Cookies.get('token');
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [sunmitLoading, setSunmitLoading] = useState(false);
  const [modalAddMember, setModalAddMember] = useState(false);
  const [modalEditMember, setModalEditMember] = useState(false);
  const [value, setValue] = useState('all');
  const [data2, setData2] = useState([]);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [pagination, setPagination] = useState({
    pageSize: 100,
    current: 1,
  });




  const rolesArray = data2.map(item => item.role);
  const rolesArray2 = rolesArray.map(item => item.name)

  const rolesArray3 = rolesArray.map(item => item.role_statuses)
  const rolesArray4 = rolesArray3.map(item => item.created_at)








  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  };

  const handleLastName = (e) => {
    setLastName(e.target.value)
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onSearch = value => console.log(value);
  const handleChange = value => {
    console.log(`selected ${value}`);
    if (value === 'all') {

      setPagination({ pageSize: 9999 });
    } else {
      setPagination({ pageSize: parseInt(value, 10) });
    }
  };

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeCheck = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const bankData = await fetchAllAdminUsers(token);
        setData2(bankData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);


  const AddAdminUser = async (values) => {
    console.log(values.first_name, values.last_name, values.email, values.phone_number)

    setSunmitLoading(true);
    window.location.reload();
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Adjust content type if needed
    };
    const payload = {
      "first_name": values.first_name,
      "last_name": values.last_name,
      "email": values.email,
      "phone": values.phone_number,
      "password": "admin",
      "entity_id": values.entity_id,
      "role_id": values.role_id,
    }
    try {
      const res = await api.post2(
        `${BASE_URL}/user/register-admin`,
        payload,
        headers
      );

      if (res) {
        toast.success(res.message)
      }

    } catch (error) {
      console.error(error);
    } finally {
      setSunmitLoading(false);
      setModalAddMember(false)
    }
  };



  const generateViewsContent = (record) => (
    <div className="view-btn">
      <Link href={`/admin-details/${record.id}`} passHref>
        <Button className="view-profile">View details</Button>
      </Link>
      {/* <Button
        className="view-report"
        onClick={() => setModalEditMember(true)}
      >
        Edit member
      </Button> */}
    </div>
  );


  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      render: text => <span className="max-content">{text}</span>,
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
      render: text => <span className="max-content">{text}</span>,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: text => <span className="max-content">{text}</span>,
    },

    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => <span className="max-content">{text}</span>,
    },

    {
      title: 'status',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (text) => {
        const statusText = text === 1 ? 'Active' : 'Inactive';
        const statusColor = text === 1 ? 'green' : 'red';

        return (
          <span className="max-content" style={{ color: statusColor }}>
            {statusText}
          </span>
        );
      },
    },

    {
      title: ' ',
      dataIndex: 'views',
      key: 'views',
      render: (_, record) => generateViewsContent(record),
    },


  ]

  // const columns = [
  //   {
  //     title: 'Username',
  //     dataIndex: 'username',
  //     key: 'username',
  //   },
  //   {
  //     title: 'Company',
  //     dataIndex: 'company',
  //     key: 'company',
  //     render: text => <span className="max-content">{text}</span>,
  //   },
  //   {
  //     title: 'Role Access',
  //     dataIndex: 'role',
  //     key: 'role',
  //     render: text => <div className="max-content">{text}</div>,
  //   },
  //   {
  //     title: 'Status',
  //     dataIndex: 'status',
  //     key: 'status',
  //     render: text => (
  //       <div>
  //         <span className={`user-status ${text}`}>{text}</span>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: 'Date Created',
  //     dataIndex: 'DateTime',
  //     key: 'DateTime',
  //   },
  //   {
  //     title: ' ',
  //     dataIndex: 'views',
  //     key: 'views',
  //   },
  // ];



  const handleRowClick = record => {
    router.push(`/admin-details/${record?.id}`);
  };

  const rowProps = record => {
    return {
      onClick: () => handleRowClick(record),
    };
  };


  const combinedData = data2.map((item, index) => {
    return {
      ...item,
      role: rolesArray2[index], // Assuming rolesArray2 and data2 have the same length
    };
  });

  console.log(user?.role_id)




  return (
    <section>
      <div className="container">
        <div className="row _tabs-wrapper">
          <div className="col-auto">
            <h4 className="_tabs">Admin Users</h4>
          </div>
          <div className="col-auto d-flex gap-4">
            <Button
              icon={<SettingsVector2 color="#7D0003" />}
              style={{
                color: '#7D0003',
                background: '#fff',
                border: '1px solid #7D0003',
              }}
            // onClick={() => openModal()}
            >
              Manage Roles
            </Button>


            {
              user?.role_id === 11 || user?.role_id === 13 ? (<Button
                icon={<AddIcon />}
                style={{ background: '#7D0003', color: '#fff' }}
                onClick={() => setModalAddMember(true)}
              >
                Add Users
              </Button>) : (null)
            }


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
        <div className="table-wrapper">
          <Table columns={columns} dataSource={combinedData} pagination={pagination} onRow={rowProps} className='cursor-pointer' />
          <div className="our-pagination d-flex justify-content-center">
            {/* <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
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
            </div> */}
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
                  width: 250,
                  maxWidth: '100%',
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
                  width: 250,
                  maxWidth: '100%',
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
                  width: 250,
                  maxWidth: '100%',
                }}
              />
              <DatePicker
                onChange={onChange}
                placeholder="To"
                style={{
                  width: 250,
                  maxWidth: '100%',
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

      {/* add user modal */}

      <Modal
        centered
        open={modalAddMember}
        onOk={() => setModalAddMember(false)}
        onCancel={() => setModalAddMember(false)}
        className="our-modal add-page-modal"
        footer={null}
      >
        <div className="headings text-center">
          <h4>Add New User</h4>
          <p>Fill the fields below to add a new user.</p>
        </div>
        <Form layout="vertical" onFinish={AddAdminUser}>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <Form.Item name="first_name" label="First Name" className="heights">
              <Input placeholder="Enter full name" value={firstName} onChange={handleFirstName} />
            </Form.Item>

            <Form.Item name="last_name" label="Last Name" className="heights">
              <Input placeholder="Enter full name" value={lastName} onChange={handleLastName} />
            </Form.Item>
          </div>

          <Form.Item name="phone_number" label="Personal Phone Number" className="heights">
            <Input placeholder="Enter Personal Phone Number" value={phoneNumber} onChange={setPhoneNumber} />
          </Form.Item>

          <Form.Item name="email" label="Email address" className="heights">
            <Input placeholder="Enter email" type="email" value={email} onChange={setEmail} />
          </Form.Item>

          <Form.Item name="entity_id" label="Entity">
            <Select
              style={{
                width: '100%',
              }}
              onChange={handleChange}
              options={[
                {
                  value: 1,
                  label: 'CBN',
                },
                {
                  value: 2,
                  label: 'NPF',
                },
                {
                  value: 3,
                  label: 'VIGILANT',
                },
                {
                  value: 4,
                  label: 'BANK',
                },
              ]}
            />
          </Form.Item>

          <Form.Item name="role_id" label="Role access">
            <Select
              onChange={handleChange}
              options={[
                {
                  value: 1,
                  label: 'CBN',
                },
                {
                  value: 2,
                  label: 'Vigilant Customer Service',
                },
                {
                  value: 3,
                  label: 'NPF investigator',
                },
                {
                  value: 4,
                  label: 'Bank Fraud Desk',
                },
                {
                  value: 5,
                  label: 'Bank Treasury',
                },
                {
                  value: 6,
                  label: 'Bank Internal Control',
                },
                {
                  value: 7,
                  label: 'Bank Risk',
                },
                {
                  value: 8,
                  label: 'Bank Account',
                },
                {
                  value: 9,
                  label: 'Bank Internal Audit',
                },
                {
                  value: 10,
                  label: 'NPF prosecutor',
                },
                {
                  value: 10,
                  label: 'Bank Internal Control',
                },
              ]}
            />
          </Form.Item>

          <div className="pt-lg-5 pt-4">
            <Button
              htmlType="submit"
              style={{ background: '#7D0003', color: '#FFF' }}
              className={
                sunmitLoading
                  ? 'our-btn-fade w-100 mt-4 mb-4'
                  : 'w-100 mt-4 mb-4'
              }
              // loading={sunmitLoading}
              disabled={sunmitLoading}
            >
              {sunmitLoading ? (
                <Spin
                  className="white-spinner d-flex align-items-center justify-content-center"
                  style={{ color: 'white' }}
                />
              ) : (
                <> Add Member</>
              )}
            </Button>
          </div>

          {/* <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 mt-4 mb-4"
          >
            Add Member
          </Button> */}
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
          <h4>Edit Member</h4>
          <p>Fill the fields below to add a new member.</p>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="fullName"
            label="Full Name (Optional)"
            className="heights"
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
          <Form.Item name="username" label="Username" className="heights">
            <Input placeholder="Enter username" />
          </Form.Item>

          <Form.Item name="email" label="Email address" className="heights">
            <Input placeholder="Enter email" type="email" />
          </Form.Item>

          <Form.Item name="company" label="Company">
            <Select
              defaultValue="All"
              style={{
                width: '100%',
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

          <Form.Item name="Role access" label="Role access">
            <Select
              defaultValue="All"
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
