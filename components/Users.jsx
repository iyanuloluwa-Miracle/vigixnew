import { Button } from 'antd';
import React from 'react';
import { ExportCsv } from '../utility/svg';

export default function Users() {
  return (
    <section>
      <div className="container">
        <div className="row _tabs-wrapper">
          <div className="col-auto">
            <h4 className="_tabs">All Users</h4>
          </div>
          <div className="col-auto">
            <Button icon={ExportCsv}>Export CSV</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
