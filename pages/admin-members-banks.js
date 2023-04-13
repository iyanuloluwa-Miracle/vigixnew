import React from 'react';
import AdminMembers from '../components/AdminMembers';
import AdminMembersBank from '../components/AdminMembersBank';
import BreadCrumb from '../components/BreadCrumb';
import Welcome from '../components/Welcome';

export default function adminmembers() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'adminMembers'}
        location={[{ link: '', location: 'Banks' }]}
      />
      <AdminMembersBank />
    </>
  );
}
