import { Button, Input, Select, Space } from 'antd';
import React from 'react';
import Exportzone from './Exportzone';
import { SearchIcon, FilterIcon } from '../utility/svg';

export default function Users() {
  const { Search } = Input;

  const onSearch = value => console.log(value);
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <section>
      <Exportzone h4="All Users" />
      <div className="container search-filter">
        <div className="row justify-content-between">
          <div className="col-md-auto d-flex">
            <div className="the-search">
              <Search
                prefix={SearchIcon}
                placeholder="Search by name..."
                onSearch={onSearch}
                className="searching"
              />
            </div>
            <div className="filter-btn-wrapper">
              <Button icon={FilterIcon}>Filter by:</Button>
              {/* <button className="btn">{FilterIcon} Filter by:</button> */}
            </div>
          </div>
          <div className="col-md-auto d-flex justify-content-end">
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
        </div>
      </div>
    </section>
  );
}
