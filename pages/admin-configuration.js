import React from 'react';
import Welcome from '../components/Welcome';
import BreadCrumb from '../components/BreadCrumb';
import AppConfiguration from '../components/AppConfiguration';

export default function configuration() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'configurations'}
        location={[{ link: '', location: 'App Configuration' }]}
      />

      <AppConfiguration admin={true} heading={'Admin Configuration'} />
    </>
  );
}
