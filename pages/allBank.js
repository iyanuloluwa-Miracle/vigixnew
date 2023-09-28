import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Welcome from '../components/Welcome';
import AllBanks from '../components/allBanks';

export default function allBanks() {
    return (
        <>
            <Welcome />
            <BreadCrumb
                tab={'settings'}
                location={[{ link: '', location: 'Banks' }]}
            />

            <AllBanks />
        </>
    )
}
