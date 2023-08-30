import styled from 'styled-components';
import { device } from '../../../utility/device';

export const IncidentsWrapper = styled.div`
  .ant-table-row {
    cursor: pointer;
  }
  .ant-table-cell {
    .image-action {
      width: 72px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      border: 1px solid #7d0003;
      background: rgba(125, 0, 3, 0.2);
      color: #7d0003;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
