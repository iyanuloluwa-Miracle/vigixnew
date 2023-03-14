import React from 'react';
import AdminMembers from '../components/AdminMembers';
import BreadCrumb from '../components/BreadCrumb';
import TransactionReports from '../components/TransactionReports';
import Welcome from '../components/Welcome';

export default function adminmembers() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'reports'}
        location={[{ link: '', location: 'Admin Members' }]}
      />
      <AdminMembers />
    </>
  );
}
