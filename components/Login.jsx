import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { ArrowRight } from '../utility/svg';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import api from '../apis';

export default function Login() {
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
    const payload = {
      remote:
        '55476877636e463063324658616b647a576c5a32545768344d6b6c324b324e4b646d394a536c6452656c4135625864444d6b6c7357473548626c4e76566e6442554842565532526e5a5856354e48465555324e6e62673d3d:516b43795547735576644146707a31715933467a696775615671557157646a386c79776637756c6354455146456a654336395a705642574a4f2f787951437876437851307744496b64684e7a4a33686d47345262544f624a5254636d4c4470676e53723538427455647679534f325879544541433955534f6956375a736164767532584a676e44482b726c5767537454584f336b524b70397a59505777514d5769564e6b65303176786c476a68472b762b484d49774463717330676d3461737a447133332b4e43444f504f585449496755627741763052752f4433597739616569674c386b46424b526161764e386f3743527235526642685672554a4e58586e7a4c4b6661716c563545446c4f315a553152704c6b4c74466c5274414c714e4b65614d334a6b6c374d51354e4c59416574492b2f6f5559654c726762366a78364748703968526a416b357265733571716634394257673d3d:504c646c54477a38425a502f51774c5345453671474d464c375357383666327456356151474c6742504c4c746a39686d6f77794448445671553770384b354b674b62726e5178767973385273395762466e334633592b2b385262637269556c61796f7a3447456676394b387862376d7372595134375a546672656748334b6b547a7641314a3867754d387a6449794e774e733352377376713279776a783332637766672f674475523042414532516f6c42556b487570682b77724a594273376536544a756d37727073757739304734784b754f34536644374f746570345341386b437a48506943344363564a4353554a485932764656565871756a764a4a5a39676a546c694e324247576f3672324e6f69456d6130397032686b68786f6f395931305730324769487a31476e305a6f6269754956533579373036656371454163712b6538644a7464427a6c434f3579674961447931513d3d',
    };

    try {
      const res = await loginAccount.mutateAsync(payload);
      console.log(res);
      if (res) {
        toast.success('Login successful');
        setLoading(false);
      }
      setTimeout(() => {
        setLoading(false);
        router.push('/home');
      }, 1500);
    } catch (error) {
      console.log(error);
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
                {loading ? (
                  <Spin className="white-spinner" style={{ color: 'white' }} />
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
