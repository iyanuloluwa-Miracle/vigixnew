import React from 'react';
import Head from 'next/head';
import IncidentsDetails from '../../src/layouts/IncidentsDetails';
import { useRouter } from 'next/router';

export default function IncidentDetail() {
  const router = useRouter();
  const { incidentId } = router.query;

  return (
    <>
      <Head>
        <title>Vigilant|details</title>
      </Head>
      <IncidentsDetails incidentId={incidentId} />
    </>
  );
}
