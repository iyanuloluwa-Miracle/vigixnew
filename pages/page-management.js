import React from 'react';
import Welcome from '../components/Welcome';
import BreadCrumb from '../components/BreadCrumb';
import PageManagement from '../components/PageManagement';

export default function pagemanagement() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'pageManagement'}
        location={[{ link: '#', location: 'Page Management' }]}
      />
      <PageManagement />
    </>
  );
}
