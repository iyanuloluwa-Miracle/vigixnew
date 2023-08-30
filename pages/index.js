import React from 'react';
import Login from '../components/Login';
import Head from 'next/head';

export default function login() {
  return (
    <>
      <Head>
        <title>Vigilant|Login</title>
      </Head>
      <Login />
    </>
  );
}
