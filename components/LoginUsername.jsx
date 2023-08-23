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

export default function LoginUsername() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
    setLoading(false);
  };

  const onFinishFailed = errorInfo => {
    console.error('Failed:', errorInfo);
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
            <p>Enter username or email.</p>

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
                  <>Continue {ArrowRight}</>
                )}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
