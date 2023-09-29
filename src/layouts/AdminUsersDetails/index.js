import BreadCrumb from "../../../components/BreadCrumb";
import Link from "next/link";
import React, { useEffect, useState, useContext } from 'react';
import { back } from "../../../utility/svg";
import { Tab, Button } from 'antd';
import { useRouter } from "next/router";
import { OverlayContext } from "../../../components/Layout";
import { IncidentsDetailsWrapper } from "../IncidentsDetails/styles";
import api from "../../../apis";
import { useQuery } from "@tanstack/react-query";


export default function AdminUsersDetails() {
    return (
        <>
        <IncidentsDetailsWrapper>
            
        </IncidentsDetailsWrapper>
        </>
    )
}
