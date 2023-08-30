import React from 'react';
import { StatusWrapper } from './styles';

export default function Status({ data }) {
  return (
    <StatusWrapper>
      <div className="contain">
        <div>
          <h5>Status</h5>
          <p className={`status ${data?.status_name}`}>Under Investigation</p>

          <p className="comment">Awaiting data from Bank</p>
        </div>
      </div>
    </StatusWrapper>
  );
}
