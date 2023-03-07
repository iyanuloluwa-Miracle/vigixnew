import { Button } from 'antd';
import React from 'react';
import { ExportCsv } from '../utility/svg';

export default function Exportzone({ h4, add }) {
  return (
    <div className="container">
      <div className="row _tabs-wrapper">
        <div className="col-auto">
          <h4 className="_tabs">{h4}</h4>
        </div>
        {/* {add == 'page-management' ? (
          <div className="col-auto">
            <Button icon={ExportCsv}>Add new page</Button>
          </div>
        ) : (
          <div className="col-auto">
            <Button icon={ExportCsv}>Export CSV</Button>
          </div>
        )} */}
        <div className="col-auto">
          <Button icon={ExportCsv}>Export CSV</Button>
        </div>
      </div>
    </div>
  );
}
