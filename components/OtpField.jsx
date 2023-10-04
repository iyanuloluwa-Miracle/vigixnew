import React, { useState, useRef, useEffect } from "react";
import {
    Input,
    Select,
    Space,
    Checkbox,
    Table,
    Modal,
    Form,
    Radio,
    Skeleton,
    DatePicker,
    Popconfirm,
    Spin,
    Button,
    message,
} from 'antd';

function CreateRef() {
    return useRef(null);
}

const OTPField = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [recoveryCodeModal, setRecoveryCodeModel] = useState(false);
    const [sunmitLoading, setSunmitLoading] = useState(false);
    const [useRecoveryCode, setUseRecoveryCode] = useState(false);


    // const inputRefs = Array.from({ length: 6 }, () => useRef(null));



    const inputRefs = Array.from({ length: 6 }, CreateRef);


    const handleOnChange = ({ target }, index) => {
        const { value } = target;
        const newOTP = [...otp];
        newOTP[index] = value.substring(value.length - 1);
        setOtp(newOTP);

        if (value) {
            setActiveOTPIndex((prevIndex) =>
                prevIndex < otp.length - 1 ? prevIndex + 1 : prevIndex
            );


            if (index === otp.length - 1) {
                setLoading(true);

            }
        }
    };

    const handleOnKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            setActiveOTPIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : 0
            );
            setOtp((prevOTP) => {
                const newOTP = [...prevOTP];
                newOTP[index] = "";
                return newOTP;
            });
            if (inputRefs[index - 1]) {
                inputRefs[index - 1].current.focus();
            }
        }
    };

    useEffect(() => {
        if (inputRefs[activeOTPIndex]) {
            inputRefs[activeOTPIndex].current.focus();
        }
    }, [activeOTPIndex]);

    return (
        <div className="Login-page container-fluid">
            <div className="row">
                <div className="col-auto">
                    <h5 className="text-center token">Enter Token</h5>
                    {otp.map((_, index) => (
                        <React.Fragment key={index}>
                            <input
                                ref={inputRefs[index]}
                                className={`custom-input ${otp[index] ? 'input-with-value' : 'input-without-value'}`}
                                type="number"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "8px",
                                    outline: "none",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: "24px",
                                    transition: "border-color 0.3s, color 0.3s",
                                    marginRight: "12px",
                                }}
                                onChange={(e) => handleOnChange(e, index)}
                                onKeyDown={(e) => handleOnKeyDown(e, index)}
                                value={otp[index]}
                            />
                            {index === otp.length - 1 ? null : (
                                <span
                                    style={{
                                        width: "10px",
                                        padding: "2px 0",
                                        backgroundColor: "#ccc",
                                    }}
                                />
                            )}
                        </React.Fragment>
                    ))}

                    {loading && (
                        <div className="d-flex align-items-center justify-content-center mt-3" style={{ gap: '10px' }}>
                            <Spin style={{ color: 'white' }} />
                        </div>
                    )}


                    {/* <p className="text-center no-otp">
                        Didn’t receive token? <span className="no-otp-snap">00:59</span>
                    </p> */}
                    <div className="d-flex justify-content-center item-content-center">
                        <Radio
                            checked={useRecoveryCode}
                            onChange={() => setUseRecoveryCode(!useRecoveryCode)}
                        >
                            Use Recovery Code
                        </Radio>
                    </div>





                </div>
            </div>

            <Modal
                centered
                open={recoveryCodeModal || useRecoveryCode}
                onOk={() => setRecoveryCodeModel(false)}
                onCancel={() => {
                    setRecoveryCodeModel(false);
                    setUseRecoveryCode(false);
                }}
                className="our-modal add-page-modal"
                footer={null}
            >
                <div className="headings text-center">
                    <h4>Use Recovery Code</h4>
                </div>
                <Form layout="vertical">
                    <Form.Item
                        name="Recovery Code"
                        label="Input Recovery Code"
                        className=""
                        rules={[
                            {
                                required: true,
                                message: 'Please input your recovery code!',
                            },
                        ]}
                    >
                        <Input.TextArea placeholder="Enter note" row={9} />
                    </Form.Item>

                    <div className="pt-lg-5 pt-4">
                        <Button
                            htmlType="submit"
                            style={{ background: '#7D0003', color: '#FFF' }}
                            className={
                                sunmitLoading
                                    ? 'our-btn-fade w-100 mt-4 mb-4'
                                    : 'w-100 mt-4 mb-4'
                            }
                            loading={sunmitLoading}
                            disabled={sunmitLoading}
                        >
                            {sunmitLoading ? (
                                <Spin
                                    className="white-spinner d-flex align-items-center justify-content-center"
                                    style={{ color: 'white' }}
                                />
                            ) : (
                                <>Verify</>
                            )}
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

export default OTPField;
