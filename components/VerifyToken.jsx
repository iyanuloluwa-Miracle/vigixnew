import React, { useState, useContext } from 'react';
import { Button, Form, Row, Col, message, Statistic } from 'antd';
import { useRouter } from 'next/router';
import OtpField from 'react-otp-field';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import api from '../apis';
import { jsonToHex } from '../apis/util';
import secureLocalStorage from 'react-secure-storage';

//components
import { OtpContainer, AuthenticationCoontainer } from './styles';
import { OverlayContext } from './Layout';

export default function VerifyAccountLayout() {
  const { Countdown } = Statistic;
  const router = useRouter();
  const [OTP, setOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [countdown, setCountdown] = useState(false);

  const { setUser, setProgressIndicator } = useContext(OverlayContext);

  const verifyAccount = useMutation({
    mutationFn: payload => api.verifyToken(payload, null),
    onSuccess: () => {},
  });

  // const resendCode = useMutation({
  //   mutationFn: payload => api.resendCode(payload),
  //   onSuccess: () => {},
  // });

  console.log(secureLocalStorage.getItem('Token'));

  const handleVerify = async () => {
    setLoading(true);

    if (OTP === '') {
      toast.error(`OTP is required`);
      setLoading(false);
      return;
    }

    const tokenData = {
      action: 'validateToken',
      token: OTP,
    };

    const payload = { remote: jsonToHex(tokenData) };
    console.log(payload);

    try {
      const res = await api.post(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/token',
        payload,
        {
          // 'Authorization': token
          Authorization: `Bearer ${JSON.parse(
            secureLocalStorage.getItem('Token')
          )}`,
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );

      if (res?.data?.code === 'OK') {
        // checking if it actually verified successfully
        if (res?.data?.response?.changePassword === 'Yes') {
          // see if it is a first timer
          toast.success(`${res?.data?.message[0]}, Please change password`);
          router.push('/change-password');
        } else {
          // not a first timer login, and route to home page
          toast.success(res?.data?.message[0]);
          router.push('/home');
        }
      } else if (res?.data?.code == 'VLT_003') {
        toast.error(res?.data?.message[0], 'Please resend token');
      } else if (res?.data?.code == 'VLT_004') {
        toast.error(`${res?.data?.message[0]}, Please resend token`);
      } else if (res?.data?.code == 'EXP_000') {
        toast.error(res?.data?.message[0]);
        setUser(res?.data?.response?.data?.profile);
        console.log(res?.data?.response?.data?.profile);
        setProgressIndicator(res?.data?.response?.data?.progressIndicator);
        console.log(res?.data?.response?.data?.progressIndicator);
        router.push('/');
      } else {
        // router.push('/');
        // do nothing
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    // try {
    //   // const res = await verifyAccount.mutateAsync(payload);
    //   const res = await api.post(
    //     'https://safe.staging.vigilant.ng/manage/api/v1.0/token',
    //     payload,
    //     {
    //       'x-api-key':
    //         '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
    //     }
    //   );

    // console.log( res );
    // if (res) {
    //   toast.success(res.data || 'Account verified successfully');
    //   // router.push('/home');
    //   setLoading(false);
    // }
    // }
    // catch (error) {
    //   // toast.error(error?.response?.data?.message || 'Error verifying account');
    //   console.log(error);
    //   setLoading(false);
    // } finally {
    //   setLoading(false);
    // }
  };

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
              onFinish={handleVerify}
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
