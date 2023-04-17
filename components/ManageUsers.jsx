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
import React, { useState, useEffect, useContext } from 'react';
import ExportZone from './ExportZone';
import {
  SearchIcon,
  FilterIcon,
  DirLeft,
  DirRight,
  listIcon,
} from '../utility/svg';
import Link from 'next/link';
import axios from 'axios';
import NodeRSA from 'node-rsa';
import CryptoJS from 'crypto-js';
import { OverlayContext } from './Layout';

const key = new NodeRSA({ b: 256 });

export default function ManageUsers() {
  const { setDefaultUSerTab } = useContext(OverlayContext);
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState('all');

  // rsa start

  const [plaintext, setPlaintext] = useState('');
  const [encrypted, setEncrypted] = useState('');
  const [decrypted, setDecrypted] = useState('');

  const [key, setKey] = useState('');
  const [iv, setIv] = useState('');

  // const generateRandomNumber = () => {
  //   const randomBytes = CryptoJS.lib.WordArray.random(16);
  //   console.log(randomBytes);
  //   const randomHex = randomBytes.toString(CryptoJS.enc.Hex);
  //   console.log(randomHex);
  //   const random16Digits = randomHex.substr(0, 16);
  //   console.log(random16Digits);
  //   setKey(random16Digits);
  // };

  const handleEncrypt = () => {
    // const encryptedData = key.encrypt(plaintext, 'base64');
    // setEncrypted(encryptedData);

    console.log({ key: key, iv: iv });

    const encrypted = CryptoJS.AES.encrypt(inputText, key, {
      iv: iv,
    }).toString();
    setOutputText(encrypted);
    console.log(encrypted);
  };

  const handleDecrypt = () => {
    // const decryptedData = key.decrypt(encrypted, 'utf8');
    // setDecrypted(decryptedData);

    console.log({ key: key, iv: iv });
    console.log(outputText);

    const decrypted = CryptoJS.AES.decrypt(outputText, key, {
      iv: iv,
    }).toString(CryptoJS.enc.Utf8);
    setOutputText(decrypted);
    console.log(decrypted);
  };

  // rsa end

  const onSearch = value => console.log(value);
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onChangeCheck = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

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
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: text => <span className="last-name">{text}</span>,
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'phone',
      key: 'phone',
    },

    {
      title: 'Total Reports',
      dataIndex: 'report',
      key: 'report',
      render: text => <span className="report">{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: text => (
        <div>
          <span className={`user-status ${text}`}>{text}</span>
        </div>
      ),
    },
    {
      title: 'Date registered',
      dataIndex: 'dateRegistered',
      key: 'dateRegistered',
    },
    {
      title: ' ',
      dataIndex: 'views',
      key: 'views',
    },
  ];

  const data = [
    {
      key: '1',
      fullName: 'Atanda Damilare',
      username: 'dammy',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Sept 17, 2022',
      report: 45,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link
            href={'/user-details'}
            onClick={() => setDefaultUSerTab('1')}
            passHref
          >
            <Button className="view-profile">View profile</Button>
          </Link>

          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
    {
      key: '2',
      fullName: 'Jide Ola',
      username: 'Ola',
      email: 'jideola@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Jun 12, 2020',
      report: 2,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link
            href={'/user-details'}
            onClick={() => setDefaultUSerTab('1')}
            passHref
          >
            <Button className="view-profile">View profile</Button>
          </Link>
          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
    {
      key: '3',
      fullName: 'Specter Omo',
      username: 'Specter Damilare',
      email: 'Specter@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'May 8, 2021',
      report: 10,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/user-details'} passHref>
            <Link
              href={'/user-details'}
              onClick={() => setDefaultUSerTab('1')}
              passHref
            >
              <Button className="view-profile">View profile</Button>
            </Link>
          </Link>
          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
    {
      key: '4',
      fullName: 'Jesse Finn',
      username: 'Finn',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Aug 16, 2020',
      report: 22,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link href={'/user-details'} passHref>
            <Link
              href={'/user-details'}
              onClick={() => setDefaultUSerTab('1')}
              passHref
            >
              <Button className="view-profile">View profile</Button>
            </Link>
          </Link>

          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
    {
      key: '5',
      fullName: 'Atanda Damilare',
      username: 'Ola',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Sept 17, 2022',
      report: 45,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/user-details'} passHref>
            <Link
              href={'/user-details'}
              onClick={() => setDefaultUSerTab('1')}
              passHref
            >
              <Button className="view-profile">View profile</Button>
            </Link>
          </Link>
          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
    {
      key: '6',
      fullName: 'Jide Ola',
      username: 'Damilare',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Jun 12, 2020',
      report: 2,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link href={'/user-details'} passHref>
            <Link
              href={'/user-details'}
              onClick={() => setDefaultUSerTab('1')}
              passHref
            >
              <Button className="view-profile">View profile</Button>
            </Link>
          </Link>
          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
    {
      key: '7',
      fullName: 'Henry Etta',
      username: 'Omo',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'May 8, 2021',
      report: 10,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/user-details'} passHref>
            <Link
              href={'/user-details'}
              onClick={() => setDefaultUSerTab('1')}
              passHref
            >
              <Button className="view-profile">View profile</Button>
            </Link>
          </Link>
          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
    {
      key: '8',
      fullName: 'Jesse Finn',
      username: 'Ola',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'May 8, 2021',
      report: 22,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link href={'/user-details'} passHref>
            <Link
              href={'/user-details'}
              onClick={() => setDefaultUSerTab('1')}
              passHref
            >
              <Button className="view-profile">View profile</Button>
            </Link>
          </Link>
          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
    {
      key: '9',
      fullName: 'Specter Omo',
      username: 'Finn',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'May 8, 2021',
      report: 42,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/user-details'} passHref>
            <Link
              href={'/user-details'}
              onClick={() => setDefaultUSerTab('1')}
              passHref
            >
              <Button className="view-profile">View profile</Button>
            </Link>
          </Link>
          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
    {
      key: '10',
      fullName: 'Atanda Damilare',
      username: 'Etta',
      email: 'henryetta@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'May 8, 2021',
      report: 2,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Link href={'/user-details'} passHref>
            <Link
              href={'/user-details'}
              onClick={() => setDefaultUSerTab('1')}
              passHref
            >
              <Button className="view-profile">View profile</Button>
            </Link>
          </Link>
          <Link
            href={'/user-details?defaultpage=2'}
            onClick={() => setDefaultUSerTab('2')}
            passHref
          >
            <Button className="view-report">View reports</Button>
          </Link>
        </div>
      ),
    },
  ];

  const FetchJoke = async () => {
    const url = 'https://icanhazdadjoke.com';

    try {
      const { data } = await axios(url, {
        headers: { Accept: 'application/json' },
      });
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    FetchJoke();
    // generateRandomNumber();
    setKey(CryptoJS.lib.WordArray.random(16));
    setIv(CryptoJS.lib.WordArray.random(16));
  }, []);

  const [inputText, setInputText] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [outputText, setOutputText] = useState('');

  return (
    <section>
      <ExportZone h4="All Users" />

      {/* <div>
        <input
          type="text"
          value={plaintext}
          onChange={e => setPlaintext(e.target.value)}
        />
        <button onClick={handleEncrypt}>Encrypt</button>
        <button onClick={handleDecrypt}>Decrypt</button>
        <br />
        <br />
        <div>Encrypted: {encrypted}</div>
        <div>Decrypted: {decrypted}</div>
      </div> */}

      {/* <div>
        <h1>AES Encryption/Decryption</h1>
        <label htmlFor="input-text">Input Text:</label>
        <input
          id="input-text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <label htmlFor="passphrase">Passphrase:</label>
        <input
          id="passphrase"
          value={passphrase}
          onChange={e => setPassphrase(e.target.value)}
        />
        <button onClick={handleEncrypt}>Encrypt</button>
        <button onClick={handleDecrypt}>Decrypt</button>
        <label htmlFor="output-text">Output Text:</label>
        <input
          id="output-text"
          value={outputText}
          onChange={e => setOutputText(e.target.value)}
        />
      </div> */}

      <div className="container search-filter">
        <div className="row justify-content-between gap-3">
          <div className="col-md-auto d-flex flex-wrap gap-3 me-lg-5">
            <div className="the-search">
              <Search
                prefix={SearchIcon}
                placeholder="Search by username, email address, phone number"
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
                      value: '10 per page',
                      label: '10 ',
                    },
                    {
                      value: '25',
                      label: '25 ',
                    },
                    {
                      value: '50',
                      label: '50 ',
                    },
                    {
                      value: '100',
                      label: '100 ',
                    },
                    {
                      value: '250',
                      label: '250 ',
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
          <Table columns={columns} dataSource={data} />
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
          <Form.Item
            name="rangeFilter"
            label="Date range:"
            className="date-filter"
          >
            <Space direction="" className="flex-wrap" style={{ width: '100%' }}>
              <DatePicker
                onChange={() => onChange(e)}
                placeholder="From"
                style={{
                  width: '250px',
                }}
              />
              <DatePicker
                onChange={() => onChange(e)}
                placeholder="To"
                style={{
                  width: '250px',
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
