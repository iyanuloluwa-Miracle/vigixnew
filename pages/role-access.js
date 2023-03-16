import React from 'react';
import Welcome from '../components/Welcome';
import BreadCrumb from '../components/BreadCrumb';
import CustomerSupport from '../components/CustomerSupport';

export default function customersupport() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'roles'}
        location={[
          { link: '', location: 'Roles' },
          { link: '', location: 'Vigilant' },
          { link: '', location: 'Customer Support' },
        ]}
      />
      <CustomerSupport />
    </>
  );
}
