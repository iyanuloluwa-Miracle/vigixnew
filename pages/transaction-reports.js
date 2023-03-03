import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import TransactionReports from '../components/TransactionReports';
import Welcome from '../components/Welcome';

export default function reports() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'reports'}
        location={[{ link: '#', location: 'reports' }]}
      />
      <TransactionReports />
    </>
  );
}
