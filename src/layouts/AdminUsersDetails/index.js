import BreadCrumb from "../../../components/BreadCrumb";
import Link from "next/link";
import React, { useEffect, useState, useContext } from 'react';
import { back } from "../../../utility/svg";
import { Tabs, Button } from 'antd';
import { useRouter } from "next/router";
import { OverlayContext } from "../../../components/Layout";
import { IncidentsDetailsWrapper } from "../IncidentsDetails/styles";
import Details from "./Details";
import Logs from "./activityLog";
import { useQuery } from '@tanstack/react-query';
import api from "../../../apis";
import Cookies from 'js-cookie';
import { fetchAdminId } from "../../../apis";


export default function AdminUsersDetails() {
    const router = useRouter();
    const { defaultUserTab } = OverlayContext();
    const [search_query, setSearchQuery] = useState(null);
    const [data, setData] = useState([]);
    const token = Cookies.get('token');

    console.log(token)
    console.log(data)


    // const { data: fetcIncident, isLoading: loadingIncident } = useQuery({
    //     queryKey: ['get_users', search_query],
    //     queryFn: () => {
    //         return api.fetchSingleUser(token, router.query?.adminId);
    //     },
    //     onSuccess: data => {
    //         setData(data?.data[0]);
    //     },
    //     onError: err => {
    //         console.log(err);
    //     },
    // });

    useEffect(() => {
        if (router.query?.adminId) {
          async function fetchAdmin() {
            try {
              const adminData = await fetchAdminId(token, router.query?.adminId);
             
              setData(adminData.data);
            } catch (error) {
              console.error('Error fetching admin:', error);
            }
          }
    
          fetchAdmin();
        }
      }, [router.query?.adminId, token]);



    return (
        <>
            <IncidentsDetailsWrapper>
                <BreadCrumb />
                <section>
                    <div className="container">
                        <div className="row justify-content-between details-header">
                            <div className="col-auto go-back">
                                <Button onClick={() => router.back()}>
                                    {back}
                                    <span>Go back</span>
                                </Button>
                            </div>
                            <div className="col-auto">
                                <h4 className="_tabs">Users Details</h4>
                            </div>
                            <div className="col-auto go-back d-none d-lg-block">
                                <Link href={'/'} style={{ visibility: 'hidden' }}>
                                    {back}
                                    <span>Go back</span>
                                </Link>
                            </div>
                        </div>

                        <div className="user-details-content">

                            <Tabs defaultActiveKey={defaultUserTab}>
                                <Tabs.TabPane tab="Details" key="1">
                                    <Details data={data} />
                                </Tabs.TabPane>


                                <Tabs.TabPane tab="Activity Logs" key="2">
                                    <Logs />
                                </Tabs.TabPane>
                            </Tabs>
                        </div>
                    </div>
                </section>

            </IncidentsDetailsWrapper>
        </>
    )
}
