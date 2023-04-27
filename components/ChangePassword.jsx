import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import api from '../apis';
import { jsonToHex } from '../apis/util';
import secureLocalStorage from 'react-secure-storage';
import { useRouter } from 'next/router';

export default function ChangePassword() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onFinish = async values => {
    setLoading(true);

    if (values.newPassword !== values.confirmPassword) {
      toast.error('New password does not match');
      setLoading(false);
      return;
    }

    console.log('Success:', values);

    const payload = { remote: jsonToHex(values) };
    console.log(payload);

    try {
      const res = await api.post(
        'https://safe.staging.vigilant.ng/manage/api/v1.0/change_password',
        payload,
        {
          Authorization: `Bearer ${JSON.parse(
            secureLocalStorage.getItem('Token')
          )}`,
          'x-api-key':
            '68457553374b4a676e2b574452596d4b4c3439724737707341434e3652423834466775463033674637624e636d526662614c6e697774646a394e42697473534e785878483852416d2b577551617434743453496137505664342b75776b546e5168313350653876343672666b4848674577626864792b77676b47734761356e456d59767632666b486b3342576a6e394945564364416d4f7a4e50576d5337726b4f443774617a662f7036616142784766685479655133696734446f6c684d6e6c4449377857486d794d6463614963497a386d755551474a7a417447367a34314b69456a4179516a79623262306a37477957332b74496f392f50393559505a6137537a62656e4d2b665a446644564957555872556351734d737269637651536746546b714f42656b674b61542f566165527346473031672b6f346238462f4c54694b6346514567354c682b5470566e65777770487553773d3d',
        }
      );

      if (res?.data?.code === 'OK') {
        toast.error(res?.data?.message[0]);
      } else if (res?.data?.code === 'RST_004') {
        toast.error(res?.data?.message[0]);
      } else if (res?.data?.code === 'RST_002') {
        toast.error(res?.data?.message[0]);
        router.push('/');
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {}, []);

  return (
    <div className="Login-page container-fluid change-password">
      <div className="row">
        <div className="col-auto">
          <Form
            name="basic"
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
              <Input.Password placeholder="Enter old password" />
            </Form.Item>

            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="Enter new password" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="Confirm new password" />
            </Form.Item>

            <Form.Item className="button-wrapper">
              <Button type="primary" htmlType="submit" disabled={false}>
                {loading ? (
                  <Spin className="white-spinner" style={{ color: 'white' }} />
                ) : (
                  <>Change Password </>
                )}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
