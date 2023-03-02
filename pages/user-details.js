import React from 'react';
import Welcome from '../components/Welcome';
import BreadCrumb from '../components/BreadCrumb';
import UserDetails from '../components/UserDetails';

export default function userprofile() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'users'}
        location={[
          { link: '/manage-users', location: 'Users' },
          { link: '', location: 'Users details' },
        ]}
      />
      <UserDetails />
    </>
  );
}
