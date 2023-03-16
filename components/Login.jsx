import Image from 'next/image';
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { ArrowRight } from '../utility/svg';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const onFinish = values => {
    console.log('Success:', values);
    router.push('/');
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
            // labelCol={{
            //   span: 8,
            // }}
            // wrapperCol={{
            //   span: 16,
            // }}
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
            <p>Fill the fields below to login to your admin dashboard.</p>

            <Form.Item
              label="Usename / Email address"
              className={'username-input'}
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="Input email or username here" />
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
              <Input.Password placeholder="Input password here" />
            </Form.Item>

            <Form.Item className="button-wrapper">
              <Button type="primary" htmlType="submit">
                Login {ArrowRight}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
