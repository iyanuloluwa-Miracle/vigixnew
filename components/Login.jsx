import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { ArrowRight } from '../utility/svg';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import api from '../apis';
import { jsonToHex } from '../apis/util';
import secureLocalStorage from 'react-secure-storage';
import { useQuery } from '@tanstack/react-query';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // const jsonToHex = json => {
  //   const jsonString = JSON.stringify(json);
  //   const buffer = Buffer.from(jsonString, 'utf8');
  //   const hexString = buffer.toString('hex');
  //   return hexString;
  // };

  const loginAccount = useMutation({
    mutationFn: payload => api.loginAccount(payload),

    onSuccess: () => {
      router.push('/dashboard');
    },
  });

  const onFinish = async values => {
    setLoading(true);

    console.log('Success:', values);

    const binaryData = jsonToHex(values);

    const payload = {
      remote: binaryData,
    };

    try {
      // const res = await loginAccount.mutateAsync(payload);

      const res = await api.post(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/login',
        payload,
        {
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );
      if (res) {
        secureLocalStorage.setItem(
          'Token',
          JSON.stringify(res?.data?.response?.token)
        );
        setLoading(false);
      }
      if (res?.data?.code === 'LOGIN_OK') {
        toast.success(`${res?.data?.message}, ${res?.data?.response?.message}`);
        router.push('/verify-token');
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.error(error);
      if (error?.response?.data?.data?.message[0]) {
        toast.error(error?.response?.data?.data?.message[0]);
      } else {
        toast.error('Login unsuccessful');
      }
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="Login-page container-fluid">
      <div className="row">
        <div className="col-auto">
          <Form
            name="basic"
            style={{
              maxWidth: '100%',
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <div className="logo-wrapper d-flex justify-content-center">
              <Image
                src={'/favicon/logo3.png'}
                width={168}
                height={80}
                alt="Vigilant Logo"
                objectFit="cover"
                quality={100}
                priority={true}
              />
            </div>
            <p>Fill the fields to login.</p>

            <Form.Item
              label="Username / Email address"
              className={'username-input'}
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="Input email or username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="Input password" />
            </Form.Item>

            <Form.Item className="button-wrapper">
              <Button
                type="primary"
                htmlType="submit"
                disabled={loading}
                className={loading ? 'our-btn-fade' : ''}
                loading={loading}
                style={{ paddingTop: '6px' }}
              >
                {loading ? (
                  <Spin
                    className="white-spinner d-flex align-items-center justify-content-center"
                    style={{ color: 'white' }}
                  />
                ) : (
                  <>Login {ArrowRight}</>
                )}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
