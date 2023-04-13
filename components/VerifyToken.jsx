import React, { useState } from 'react';
import { Button, Form, Row, Col, message, Statistic } from 'antd';
import { useRouter } from 'next/router';
import OtpField from 'react-otp-field';

//components
import { OtpContainer, AuthenticationCoontainer } from './styles';

export default function VerifyAccountLayout() {
  const { Countdown } = Statistic;
  const router = useRouter();
  const [OTP, setOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [countdown, setCountdown] = useState(false);

  //   const verifyAccount = useMutation({
  //     mutationFn: payload => api.verifyAccount(payload),
  //     onSuccess: () => {},
  //   });

  //   const resendCode = useMutation({
  //     mutationFn: payload => api.resendCode(payload),
  //     onSuccess: () => {},
  //   });

  //   const handleVerify = async () => {
  //     setLoading(true);
  //     const getUser = secureLocalStorage.getItem('userObject');
  //     const userData = JSON.parse(getUser);
  //     if (OTP === '') {
  //       toast.error(`OTP is required`, {
  //         autoClose: 2500,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         pauseOnHover: true,
  //         position: 'top-right',
  //       });
  //       setLoading(false);
  //       return;
  //     }
  //     const payload = {
  //       code: OTP,
  //       email: userData.email,
  //     };
  //     try {
  //       const res = await verifyAccount.mutateAsync(payload);
  //       if (res) {
  //         toast.success(res.data || 'Account verified successfully', {
  //           autoClose: 2500,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           pauseOnHover: true,
  //           position: 'top-right',
  //         });
  //         router.push('/account-verification');
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       toast.error(error?.response?.data?.message || 'Error verifying account', {
  //         autoClose: 2500,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         pauseOnHover: true,
  //         position: 'top-right',
  //       });
  //       setLoading(false);
  //     }
  //   };

  //   const handleResendCode = async () => {
  //     setIsClicked(!isClicked);
  //     const getUser = secureLocalStorage.getItem('userObject');
  //     const userData = JSON.parse(getUser);
  //     const payload = {
  //       email: userData.email,
  //     };
  //     try {
  //       const res = await resendCode.mutateAsync(payload);
  //       if (res) {
  //         toast.success(res.data || 'Code resent successfully', {
  //           autoClose: 2500,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           pauseOnHover: true,
  //           position: 'top-right',
  //         });
  //       }
  //     } catch (error) {
  //       toast.error(error?.response?.data?.message || 'Error resending code', {
  //         autoClose: 2500,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         pauseOnHover: true,
  //         position: 'top-right',
  //       });
  //     }
  //   };

  return (
    <AuthenticationCoontainer>
      <Row wrap={false} className="auth-container" justify="center">
        <Col className="" xs={24} sm={24} md={16} lg={12}>
          <React.Fragment>
            <div className="welcome">
              <p className="text-center">Enter Token</p>
            </div>

            <Form
              name="existing-login"
              className="mt-5"
              //   onFinish={handleVerify}
            >
              <OtpContainer>
                <div className="otp-input-wrapper">
                  <OtpField
                    value={OTP}
                    onChange={setOTP}
                    numInputs={6}
                    onChangeRegex={/^([0-9]{0,})$/}
                    autoFocus
                    isTypeNumber
                    inputProps={{
                      className: 'otp-field__input',
                      disabled: false,
                    }}
                  />
                </div>
              </OtpContainer>
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="form-button verify-btn"
                  loading={loading}
                  disabled={OTP.length < 6 ? true : false}
                >
                  Verify Token
                </Button>
              </div>

              <div className="d-flex justify-content-center mt-lg-3 mt-2">
                <div className="d-flex">
                  <div
                    className="form-agreement-note me-1"
                    style={{ textAlign: 'center' }}
                  >
                    Didn’t receive token?
                  </div>
                  {countdown ? (
                    <Countdown
                      value={isClicked && Date.now() + 10 * 6000}
                      format="mm:ss"
                      className="timer-value"
                    />
                  ) : (
                    <span
                      style={{
                        color: '#7D0003',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontWeight: '700',
                      }}
                    >
                      Resend token
                    </span>
                  )}
                </div>
              </div>
            </Form>
          </React.Fragment>
        </Col>
      </Row>
    </AuthenticationCoontainer>
  );
}
