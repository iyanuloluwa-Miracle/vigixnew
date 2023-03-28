import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  Input,
  Select,
  Space,
  Checkbox,
  Table,
  Modal,
  Form,
  Radio,
  DatePicker,
  Switch,
  Collapse,
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export default function AppConfiguration({ admin, heading }) {
  const editorRef = useRef();
  const { Panel } = Collapse;
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [comment, setComment] = useState('');
  const { CKEditor, Editor } = editorRef.current || {};
  const [userFeeds, setUserFeeds] = useState([]);

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const onChange = key => {
    console.log(key);
  };

  function customItemRenderer(item) {
    const itemElement = document.createElement('span');
    const avatar = document.createElement('img');
    const userNameElement = document.createElement('span');
    const fullNameElement = document.createElement('span');

    itemElement.classList.add('mention__item');

    avatar.src = item.avatar;

    userNameElement.classList.add('mention__item__user-name');
    userNameElement.textContent = item.id;

    fullNameElement.classList.add('mention__item__full-name');
    fullNameElement.textContent = item.name;

    itemElement.appendChild(avatar);
    itemElement.appendChild(userNameElement);
    itemElement.appendChild(fullNameElement);

    return itemElement;
  }

  const editorConfig = {
    toolbar: [
      'bold',
      'italic',
      'strikethrough',
      '|',
      'link',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'code',
      'codeBlock',
    ],
    placeholder: 'Write legal policy here',
    mention: {
      feeds: [
        {
          marker: '@',
          feed: userFeeds,
          itemRenderer: customItemRenderer,
          minimumCharacters: 0,
        },
        {
          marker: '#',
          feed: [
            '#wireframing',
            '#blocker',
            '#digital',
            '#meeting',
            '#bug',
            '#completed',
            '#performance',
            '#debugging',
            '#debug',
          ],
          minimumCharacters: 1,
        },
      ],
    },
  };

  useEffect(() => {
    setTimeout(() => {
      editorRef.current = {
        CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, //Added .CKEditor
        Editor: require('../ckeditor5/build/ckeditor'),
      };
      setEditorLoaded(true);
    }, 1000);
  }, []);

  return (
    <section className="pb-5">
      <div className="container">
        <div className="row _tabs-wrapper">
          <div className="col-auto">
            <h4 className="_tabs">{heading}</h4>
          </div>
          <div className="col-auto d-flex gap-4">
            <Button
              style={{ background: '#7D0003', color: '#fff' }}
              onClick={() => setModalAddPage(true)}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="configuration">
          <Form layout="vertical">
            <Collapse
              defaultActiveKey={['1']}
              onChange={onChange}
              expandIconPosition={'end'}
            >
              <Panel header="Website" key="1">
                <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                  <div className="col">
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
                  </div>
                </div>
              </Panel>
              <Panel header="Vigilant Company’s socials" key="2">
                <div>
                  <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
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
                  </div>
                </div>
              </Panel>
              <Panel header="OTP Validity" key="3">
                <div>
                  <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                    <div className="col">
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
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="Sessions & Login" key="4">
                <div>
                  <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                    <div className="col">
                      <Form.Item
                        label="Session Logout time"
                        name="sessionLogout"
                        className="heights"
                      >
                        <Input placeholder="Enter session logout time here" />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item
                        label="Login failed blockout hours"
                        name="loginFailed"
                        className="heights"
                      >
                        <Input placeholder="Enter session logout time here" />
                      </Form.Item>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                    <div className="col">
                      <Form.Item
                        label="Maximum Login Attempts"
                        name="maxLogin"
                        className="heights mb-0"
                      >
                        <Input placeholder="Enter session logout time here" />
                      </Form.Item>
                    </div>
                    <div className="col" style={{ visibility: 'hidden' }}>
                      <Input placeholder="Enter OTP time here" />
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="Sms & Email" key="5">
                <div>
                  <div className="d-flex flex-wrap inner gap-lg-5 gap-4">
                    <div className="col">
                      <Form.Item
                        label="Email sender ID"
                        name="emailID"
                        className="heights mb-0"
                      >
                        <Input placeholder="Enter ID here" />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item
                        label="Sms sender ID"
                        name="smsID"
                        className="heights mb-0"
                      >
                        <Input placeholder="Enter ID here" />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </Panel>
              {!admin && (
                <Panel header="Legals" key="6">
                  <div className="legals">
                    <div className="mb-4">
                      <label htmlFor="">Privacy policy</label>
                      {editorLoaded && (
                        <CKEditor
                          editor={Editor}
                          config={editorConfig}
                          data={comment}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setComment(data);
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <label htmlFor="">Terms and conditions</label>
                      {editorLoaded && (
                        <CKEditor
                          editor={Editor}
                          config={editorConfig}
                          data={comment}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setComment(data);
                          }}
                        />
                      )}
                    </div>
                  </div>
                </Panel>
              )}
            </Collapse>
            <Form.Item className="mt-5 pt-lg-4 d-flex justify-content-center">
              <Button htmlType="submit" className="our-btn">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
}
