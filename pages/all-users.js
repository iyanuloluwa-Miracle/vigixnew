import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Users from '../components/Users';
import Welcome from '../components/Welcome';

export default function users() {
  return (
    <>
      <Welcome />
      <BreadCrumb tab={'users'} />
      <Users />
    </>
  );
}
