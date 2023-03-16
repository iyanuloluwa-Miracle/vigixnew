import React from 'react';
import { Tabs, Button, Collapse, Form, Checkbox } from 'antd';
import Link from 'next/link';
import { back } from '../utility/svg';
import { useRouter } from 'next/router';

export default function CustomerSupport() {
  const { Panel } = Collapse;
  const router = useRouter();

  const onChange = key => {
    console.log(key);
  };

  const onChangeCheck = value => {
    console.log(value);
  };

  const usersPanel = (tag, actions) => (
    <div>
      <Checkbox onChange={() => actions()}>{tag}</Checkbox>
    </div>
  );

  return (
    <section>
      <div className="container">
        <div className="row justify-content-between details-header">
          <div className="col-auto go-back">
            <Button onClick={() => router.back()}>
              {back}
              <span>Go back</span>
            </Button>
          </div>
          <div className="col-auto">
            <h4 className="_tabs">Customer Support - Vigilant</h4>
          </div>
          <div className="col-auto go-back d-none d-lg-block">
            <Link href={''} style={{ visibility: 'hidden' }}>
              {back}
              <span>Go back</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="configuration mb-5">
          <Form layout="vertical">
            <Collapse
              defaultActiveKey={['1']}
              onChange={onChange}
              expandIconPosition={'end'}
            >
              <Panel header={usersPanel('user', onChangeCheck)} key="1">
                <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                  {/* <div className="col">
                    <Form.Item
                      label="Site URL"
                      name="siteURL"
                      className="heights mb-0"
                    >
                      <Input placeholder="Enter site url here" />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item
                      label="Site Description"
                      name="siteDescription"
                      className="mb-0"
                    >
                      <Input.TextArea
                        placeholder="Enter site description here"
                        row={5}
                      />
                    </Form.Item>
                  </div> */}
                </div>
              </Panel>
              <Panel header={usersPanel('Reports', onChangeCheck)} key="2">
                <div>
                  {/* <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                    <div className="col">
                      <Form.Item
                        label="Mobile Number 1"
                        name="mobile1"
                        className="heights"
                      >
                        <Input placeholder="Enter mobile number 1 here" />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item
                        label="Mobile Number 2"
                        name="mobile2"
                        className="heights"
                      >
                        <Input placeholder="Enter mobile number 2 here" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                    <div className="col">
                      <Form.Item
                        label="Email address"
                        name="email"
                        className="heights"
                        rules={[
                          {
                            type: 'email',
                          },
                        ]}
                      >
                        <Input placeholder="Enter email address" />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item
                        label="Facebook"
                        name="facebook"
                        className="heights"
                      >
                        <Input placeholder="Enter facebook link" />
                      </Form.Item>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                    <div className="col">
                      <Form.Item
                        label="Instagram"
                        name="Instagram"
                        className="heights"
                      >
                        <Input placeholder="Enter IG link" />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item
                        label="LinkedIn"
                        name="LinkedIn"
                        className="heights"
                      >
                        <Input placeholder="Enter LinkedIn link" />
                      </Form.Item>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                    <div className="col">
                      <Form.Item
                        label="Twitter"
                        name="Twitter"
                        className="heights"
                      >
                        <Input placeholder="Enter twitter link" />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item
                        label="Tiktok"
                        name="Tiktok"
                        className="heights"
                      >
                        <Input placeholder="Enter tintok link" />
                      </Form.Item>
                    </div>
                  </div> */}
                </div>
              </Panel>
              <Panel
                header={usersPanel('Page Management', onChangeCheck)}
                key="3"
              >
                <div>
                  <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                    {/* <div className="col">
                      <Form.Item
                        label="Email verification OTP"
                        name="emailOTP"
                        className="heights mb-0"
                      >
                        <Input placeholder="Enter OTP time here" />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item
                        label="Forgot Password OTP"
                        name="passwordOTP"
                        className="heights mb-0"
                      >
                        <Input placeholder="Enter OTP time here" />
                      </Form.Item>
                    </div> */}
                  </div>
                </div>
              </Panel>
              <Panel
                header={usersPanel('Admin Members', onChangeCheck)}
                key="4"
              >
                <div></div>
              </Panel>
              <Panel header={usersPanel('Roles', onChangeCheck)} key="5">
                <div></div>
              </Panel>
              <Panel
                header={usersPanel('Communications', onChangeCheck)}
                key="6"
              >
                <div></div>
              </Panel>
              <Panel
                header={usersPanel('Notifications', onChangeCheck)}
                key="7"
              >
                <div></div>
              </Panel>
              <Panel
                header={usersPanel('Configurations', onChangeCheck)}
                key="8"
              >
                <div></div>
              </Panel>
            </Collapse>
          </Form>
        </div>
      </div>
    </section>
  );
}
