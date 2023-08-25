import styled from 'styled-components';
import { device } from '../../../utility/device';

export const IncidentsDetailsWrapper = styled.div`
  background-color: inherit;
  .user-details-content {
    .ant-tabs-nav {
      margin-bottom: 2rem;
    }
  }
`;

export const CommentsWrapper = styled.div`
  .contain {
    border-radius: 9px;
    border: 1px solid #dadada;
    background: #fff;
    margin-bottom: 5rem;
    padding: 3rem 0px 2rem;

    @media (max-width: 1330px) {
      padding-top: 2.5rem;
      margin-bottom: 4rem;
    }

    .chat-wrapper {
      padding: 8px 2rem 1.5rem;
      border-bottom: 1px solid #dcdcdc;

      @media (max-width: 1330px) {
        padding: 8px 1.5rem 0.5rem;
      }

      &:last-child {
        border-bottom: none;
      }

      &.multi-reply {
        border-bottom: 0px;
        .chat {
          border: 1px solid #dadada;
        }

        .reply {
          padding: 1rem;
          border: none;
        }
      }

      .chat {
        padding: 1rem 8px;
        padding-right: 2rem;

        .chat-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 20px;
          @media (max-width: 1330px) {
            gap: 1rem;
            margin-bottom: 1rem;
          }

          h5 {
            color: #333;
            font-family: 'aeonik-medium';
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }

          .time {
            color: #858585;
            font-family: 'aeonik-regular';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }

        .details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;

          @media (max-width: 1330px) {
            gap: 2rem;
          }

          .share {
            button {
              border: none;
              background: inherit;
            }
          }
        }

        p {
          color: #1c1c1c;
          font-family: 'aeonik-regular';
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          @media (max-width: 1330px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

export const DetailsWrapper = styled.div`
  .contain {
    border-radius: 9px;
    border: 1px solid #dadada;
    background: #fff;
    padding: 32px 40px 40px 40px;
    @media (max-width: 1330px) {
      padding: 30px 36px;
    }

    h4 {
      color: #858585;
      font-family: 'aeonik-regular';
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 12px;
      @media (min-width: 1330px) {
        font-size: 1.1rem;
        margin-bottom: 14px;
      }
    }
    p {
      color: #333;
      font-family: 'aeonik-regular';
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      line-height: 20px;
      margin-bottom: 32px;
      @media (min-width: 1330px) {
        font-size: 1.1rem;
      }
    }
    .status {
      padding: 4px 8px;
      border-radius: 2px;
      background: #fff6ee;
      color: #f70;
      font-family: DM Sans;
      font-size: 11.52px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: fit-content;
    }
    .toggle-show {
      border-radius: 2px;
      background: #fff6ee;
      color: #7d0003;
    }
    .open-data {
      max-width: 100%;
      width: 390px;
      height: 56px;
      border-radius: 4px;
      background: #460102;
      color: white;
    }
  }

  .actions {
    display: flex;
    gap: 2rem;
    padding-left: 2.5rem;
    margin: 3rem 0px 5rem;

    .btn {
      border-radius: 4px;
      background: #7d0003;
      color: #fff;
      font-family: 'aeonik-regular';
      font-size: 1rem;
      font-weight: 400;
      line-height: 20px;
      padding: 1rem 2rem;

      &.void {
        background: #faeff0;
        color: #7d0003;
      }
    }
  }
`;

export const LogsWrapper = styled.div`
  .contain {
    border-radius: 9px;
    border: 1px solid #dadada;
    background: #fff;
    margin-bottom: 5rem;
    padding-bottom: 10rem;

    .headers {
      display: flex;
      padding: 1.5rem 3rem 1.25rem;
      border-bottom: 1px solid #dcdcdc;

      h5 {
        color: #000;
        font-family: DM Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    .logged-item {
      display: flex;
      padding: 1.5rem 3rem;
      border-bottom: 1px solid #dcdcdc;

      p {
        color: #1c1c1c;
        font-family: 'aeonik-regular';
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;

        @media (max-width: 1330px) {
          font-size: 15px;
        }

        .user-id {
          font-weight: 700;
        }
      }
    }
  }
`;

export const StatusWrapper = styled.div`
  .contain {
    border-radius: 9px;
    border: 1px solid #dadada;
    background: #fff;
    padding: 32px 40px 40px 40px;
    min-height: 60vh;
    margin-bottom: 7rem;
    @media (max-width: 1330px) {
      padding: 30px 36px;
    }

    h5 {
      color: #858585;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      margin-bottom: 12px;
    }

    .status {
      border-radius: 2px;
      padding: 4px 8px;
      background: #fff6ee;
      width: max-content;
      max-width: 100%;

      &.Investigation {
        color: #f70;
        font-family: DM Sans;
        font-size: 11.52px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .comment {
      color: #1c1c1c;
      font-family: 'aeonik-regular';
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 2.5rem;

      @media (max-width: 1330px) {
        font-size: 1rem;
      }
    }
  }
`;
