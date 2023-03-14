import React from 'react';
import Welcome from '../components/Welcome';
import BreadCrumb from '../components/BreadCrumb';
import UserDetails from '../components/UserDetails';
import AdminDetails from '../components/AdminDetails';

export default function adminDetails() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'reports'}
        location={[{ link: '', location: 'Admin Members' }]}
      />
      <AdminDetails />
    </>
  );
}
