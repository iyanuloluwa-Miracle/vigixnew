import React, { useState, useEffect } from 'react';
import AddIcon from './Vectors/AddIcon';
import SettingsVector2 from './Vectors/settings2';
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
    Switch,
} from 'antd';
import { SearchIcon, FilterIcon, DirLeft, DirRight } from '../utility/svg';
import Image from 'next/image';
import axios from 'axios';
import Cookies from 'js-cookie';


import { fetchAllBanks } from "../apis"

export default function AllBanks() {
    const { Search } = Input;
    const token = Cookies.get('token');


    const [modalOpen, setModalOpen] = useState(false);
    const [modalAddMember, setModalAddMember] = useState(false);
    const [modalEditMember, setModalEditMember] = useState(false);
    const [value, setValue] = useState('all');
    const [data, setData] = useState([]);
    console.log(data)



    const onFinish = values => {
        console.log('Success:', values);
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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const bankData = await fetchAllBanks(token);
                setData(bankData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [token]);



    const columns = [
        {
          title: 'S/N',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Bank Name',
          dataIndex: 'bank_name',
          key: 'bank_name',
          render: text => <span className="max-content">{text}</span>,
        },
        {
          title: 'Bank Code',
          dataIndex: 'bank_code',
          key: 'bank_code',
          render: text => <div className="max-content">{text}</div>,
        },
        {
          title: 'Bank Logo',
          dataIndex: 'bank_logo_url',
          key: 'bank_logo_url',
          render: text => (
            <div>
              <Image src={text} alt='img' width={100} height={100} />
            </div>
          ),
        },
        {
          title: 'Date Created',
          dataIndex: 'created_at',
          key: 'created_at',
        },
      ];
      





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
                            Add User
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






        </section>
    )
}