import React from 'react';
import Head from 'next/head';
import AdminUsersDetails from '../../src/layouts/AdminUsersDetails';
import { useRouter } from 'next/router';

export default function AdminDetails() {
    const router = useRouter();
    const { incidentId } = router.query;


    return (
        <>
            <Head>
                <title>Admin Users|details</title>
            </Head>
            <AdminUsersDetails />
        </>
    );
}