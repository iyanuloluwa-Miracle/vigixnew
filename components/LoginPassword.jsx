import Image from 'next/image';
import React, { useState, useContext, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { ArrowRight } from '../utility/svg';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import api from '../apis';
import { jsonToHex } from '../apis/util';
import secureLocalStorage from 'react-secure-storage';
import { useQuery } from '@tanstack/react-query';
import { OverlayContext } from './Layout';
// import axios from '../apis/axiosConfig';
import axios from 'axios';
import Cookies from 'js-cookie';

const progressData = {
  recoveries: {
    guage: 'Positive',
    percentage: 54,
    totalReportsForToday: 38,
    totalRecoveries: 203,
  },
  admin: {
    guage: 'Negative',
    percentage: 20,
    totalReportsForToday: 74,
    totalAdminMembers: 1000,
  },
  reports: {
    guage: 'Negative',
    percentage: 13,
    totalReportsForToday: 92,
    totalReports: 3041,
  },
  users: {
    guage: 'Positive',
    percentage: 60,
    totalUsersForToday: 12,
    totalUsers: 101,
  },
};

export default function LoginPassword() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');
  const { setUserData, useData, setUser, setProgressIndicator } =
    OverlayContext();

  const loginAccount = useMutation({
    mutationFn: payload => api.login(payload),
    onSuccess: () => {
      router.push('/dashboard');
    },
  });

  const onFinish = async values => {
    setLoading(true);

    const payload = {
      email: JSON.parse(secureLocalStorage.getItem('email')).email,
      password: values.password,
    };

    try {
      const res = await api.post(
        'https://sea-turtle-app-7ta2e.ondigitalocean.app/api/user/login-admin',
        payload
      );
      if (res) {
        console.log(res);
        Cookies.set('token', res?.token);
        setUser(res?.data);
        secureLocalStorage.setItem('user', JSON.stringify(res?.data));
        setProgressIndicator(progressData);
        secureLocalStorage.setItem(
          'progressIndicator',
          JSON.stringify(progressData)
        );

        toast.success('Login successful');

        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

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
                quality={100}
                priority={true}
              />
            </div>
            <p>Enter password.</p>

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
              <Input.Password
                placeholder="Input password"
                autoComplete="current-password"
              />
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
