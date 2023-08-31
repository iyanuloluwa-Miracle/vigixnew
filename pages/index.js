import React from 'react';
import Login from '../components/Login';
import Head from 'next/head';
import LoginUsername from '../components/LoginUsername';

export default function login() {
  return (
    <>
      <Head>
        <title>Vigilant|Login</title>
      </Head>
      {/* <Login /> */}
      <LoginUsername />
    </>
  );
}
