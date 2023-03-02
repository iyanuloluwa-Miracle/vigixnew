import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import ManageUsers from '../components/ManageUsers';
import Welcome from '../components/Welcome';

export default function manageusers() {
  return (
    <>
      <Welcome />
      <BreadCrumb tab={'users'} />
      <ManageUsers />
    </>
  );
}
