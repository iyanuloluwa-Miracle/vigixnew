import { Button } from 'antd';
import { AddIcon } from '../utility/svg';

export default function ExportAdd({ h4, add }) {
  return (
    <div className="container">
      <div className="row _tabs-wrapper">
        <div className="col-auto">
          <h4 className="_tabs">{h4}</h4>
        </div>
        <div className="col-auto">
          <Button
            icon={AddIcon}
            style={{ background: '#7D0003', color: '#fff' }}
          >
            Add new page
          </Button>
        </div>
      </div>
    </div>
  );
}
