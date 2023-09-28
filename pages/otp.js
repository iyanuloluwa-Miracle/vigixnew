import React from 'react';
import Head from 'next/head';
import OTPField from '../components/OtpField';

export default function Otp() {
    return (
        <>
            <Head>
                <title>Vigilant|Login</title>
            </Head>
            <OTPField />
        </>
    )
}