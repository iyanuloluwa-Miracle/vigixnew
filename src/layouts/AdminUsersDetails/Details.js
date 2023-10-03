import { DetailsWrapper } from "../IncidentsDetails/styles"
import {
    Input,
    Select,
    Space,
    Checkbox,
    Table,
    Modal,
    Form,
    Radio,
    Skeleton,
    DatePicker,
    Popconfirm,
    Spin,
    Button,
    message,
} from 'antd';
import { toast } from 'sonner';
import { useRouter } from 'next/router';
import api from "../../../apis";
import { BASE_URL } from "../../../utility/constants";
import { approveAdminId } from "../../../apis";


async function fetchAdminData() {
    try {
      const adminData = await fetchAdminId(token, router.query?.adminId);
      setData(adminData.data);
    } catch (error) {
      console.error('Error fetching admin:', error);
    }
  }



export default function Details({ data }) {
    const statusValue = data[0]?.is_active === 1 ? "Active" : "Inactive";
    const statusColor = data[0]?.is_active === 1 ? "green" : "red";


    return (
        <DetailsWrapper>
            <div className="contain">
                <div className="d-flex gap-5">
                    <h4>First name:</h4>
                    <p>{data[0]?.first_name}</p>
                </div>

                <div className="d-flex gap-5">
                    <h4>Last name:</h4>
                    <p>{data[0]?.last_name}</p>
                </div>

                <div className="d-flex gap-5">
                    <h4>Email:</h4>
                    <p>{data[0]?.email}</p>
                </div>

                <div className="d-flex gap-5">
                    <h4>Role:</h4>
                    <p>{data[0]?.role?.name}</p>
                </div>


                <div className="d-flex gap-5">
                    <h4>Status:</h4>
                    <p style={{ color: statusColor }}>• {statusValue}</p>
                </div>

                <div className="d-flex gap-5">
                    <Button
                        danger
                        style={{ background: '#7D0003', color: '#FFF' }}
                    >
                        Approve User
                    </Button>

                    <Button
                        danger
                        style={{ background: '#7D0003', color: '#FFF' }}
                    >
                        Decline
                    </Button>
                </div>

            </div>

        </DetailsWrapper>
    )
}