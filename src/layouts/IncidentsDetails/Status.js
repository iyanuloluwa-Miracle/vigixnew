import React from 'react';
import { StatusWrapper } from './styles';

export default function Status() {
  return (
    <StatusWrapper>
      <div className="contain">
        <div>
          <h5>Status</h5>
          <p className="status Investigation">Under Investigation</p>

          <p className="comment">Awaiting data from Bank</p>
        </div>
      </div>
    </StatusWrapper>
  );
}
