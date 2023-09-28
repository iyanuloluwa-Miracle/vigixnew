import React from "react";
import AdminRoles from "../components/adminRoles";
import BreadCrumb from "../components/BreadCrumb";
import Welcome from "../components/Welcome";

export default function adminroles() {
    return(
        <>
            <Welcome />
            <BreadCrumb
                tab={'adminMembers'}
                location={[{ link: '', location: 'Roles & Access' }]}
            />
            <AdminRoles />
        </>
    )
}