import { Button } from 'antd';
import React from 'react';
import { ExportCsv } from '../utility/svg';

function ExportZone({ h4 }) {
  return (
    <div className="container">
      <div className="row _tabs-wrapper">
        <div className="col-auto">
          <h4 className="_tabs">{h4}</h4>
        </div>

        <div className="col-auto">
          <Button icon={ExportCsv}>Export CSV</Button>
        </div>
      </div>
    </div>
  );
}

export default ExportZone;
