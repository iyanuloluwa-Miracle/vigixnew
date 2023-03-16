import React from 'react';
import Welcome from '../components/Welcome';
import BreadCrumb from '../components/BreadCrumb';
import Roles from '../components/Roles';

export default function roles() {
  return (
    <>
      <Welcome />
      <BreadCrumb tab={'roles'} location={[{ link: '', location: 'Roles' }]} />
      <Roles />
    </>
  );
}
