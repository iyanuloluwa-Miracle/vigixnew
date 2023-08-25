import Head from 'next/head';
import React from 'react';
import IncidentsDetails from '../src/layouts/IncidentsDetails';

export default function incidentdetails() {
  return (
    <>
      <Head>
        <title>Vigilant|details</title>
      </Head>
      <IncidentsDetails />
    </>
  );
}
