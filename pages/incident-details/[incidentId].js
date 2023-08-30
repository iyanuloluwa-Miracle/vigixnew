import React from 'react';
import Head from 'next/head';
import IncidentsDetails from '../../src/layouts/IncidentsDetails';

export default function incidentDetails() {
  return (
    <>
      <Head>
        <title>Vigilant|details</title>
      </Head>
      <IncidentsDetails />
    </>
  );
}
