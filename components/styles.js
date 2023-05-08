import styled from 'styled-components';
import { device } from '../utility/device';

export const OtpContainer = styled.div`
  .otp-input-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    .otp-field {
      display: flex;
      justify-content: center;
      gap: 12px;
      width: 80%;

      input {
        width: 56px !important;
        height: 56px !important;
        font-size: 20px;
        box-sizing: border-box;
        text-align: center;
        color: #1c1c1c;
        background: #fffcfc;
        border: 2px solid #7d0003;
        border-radius: 6px;
        @media ${device.mobileL} {
          width: 48px !important;
          height: 48px !important;
        }
        &:focus-visible {
          box-shadow: none !important;
          border-color: 0 0 !important;
          outline: 0;
        }
      }
    }
  }
`;

export const AuthenticationCoontainer = styled.div`
  min-height: calc(100vh - 52px);
  height: auto;
  position: relative;
  padding: 1rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('/images/Login-bg.png');
  background-size: cover;
  > div {
    width: 100%;
  }

  @media ${device.laptop} {
    padding: 3rem 15px;
  }
  @media ${device.tablet} {
    padding: 4rem 15px;
  }
  .welcome {
    color: #1c1c1c;
    h3 {
      font-weight: 900;
      font-size: 1.7rem;
      margin-bottom: 8px;
      line-height: 40px;
      @media ${device.tablet} {
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 20px;
      line-height: 24px;
      font-family: 'dm-sans-medium';
    }
  }
  .auth-container {
    form {
      .ant-form {
        label {
          font-size: 13px;
          font-weight: 500;
          color: #000;
          color: #1c1c1c;
          pointer-events: none;
          transition: 0.2s ease all;
          z-index: 5;
        }
      }

      .ant-input {
        padding: 4px 12px 4px 11px;
        height: 52px;
        font-size: 16px;
        font-family: AvenirMedium;
        border-radius: 0px;
        background: #fafafa;
        border: none;
        ::placeholder {
          color: #757575;
          font-size: 14.4px;
          line-height: 20px;
        }
      }
      .ant-input-password {
        border: none;
        background: #fafafa;
        padding: 0px 12px 0px 0px;
        border-radius: 0px;
      }
      .ant-input-number-input {
        height: 59px;
        background: #ffffff;
        width: 100%;
        font-size: 16px;
        font-family: AvenirMedium;
        padding: 16px 12px 4px 11px;
      }
      .ant-input-number {
        width: 100%;
        /* border: 1px solid #dadada; */
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type='number'] {
        -moz-appearance: textfield;
      }
      .ant-input:focus,
      .ant-input:hover,
      .ant-input-focused,
      .ant-input-password:focus,
      .ant-input-affix-wrapper:hover,
      .ant-input-affix-wrapper:focus,
      .ant-input-affix-wrapper:focus-visible,
      input[type='checkbox']:focus,
      input[type='checkbox']:focus-visible {
        box-shadow: none !important;
        border-color: #d9d9d9;
        outline: 0 !important;
      }
      .form-agreement-note {
        color: #1c1c1c;
        font-weight: normal;
        font-size: 14px;
        font-weight: 500;
        a {
          color: #81af00;
          font-weight: 600;
          text-decoration: underline;
          &:hover {
            color: #81af00;
          }
        }
      }
      .forgot-password-note {
        span {
          color: #81af00;
          font-size: 14px;
          font-weight: 600;
        }
      }
      .ant-statistic-content-value {
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #757575;
        font-weight: 600;
      }
      .resend-link {
        color: #81af00;
        font-weight: 600;
        text-decoration: underline;
      }
      .isDisabled {
        color: currentColor;
        cursor: not-allowed;
        opacity: 0.5;
        text-decoration: none;
      }
      .form-button {
        width: 100%;
        height: 65px;
        background-color: #7d0003;
        border-radius: 5px;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
      }
      .ant-btn-primary:disabled {
        border-color: #d8d8d8;
        color: #fff;
        background-color: #d8d8d8;
        box-shadow: none;
      }
      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #81af00;
        border-color: #81af00;
      }
      .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
        .ant-checkbox-checked:not(.ant-checkbox-disabled)
        .ant-checkbox-inner {
        background-color: #81af00;
        border-color: #81af00;
      }
      .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
        .ant-checkbox-inner,
      .ant-checkbox:not(.ant-checkbox-disabled):hover .ant-checkbox-inner {
        border-color: #81af00;
      }
      .verify-btn {
        width: 450px;
        max-width: 90%;
        margin: auto;
        display: block;
      }
    }
  }
`;
