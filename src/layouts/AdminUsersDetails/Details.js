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

export default function Details() {
    return (
        <DetailsWrapper>
            <div className="contain">
                <div className="d-flex gap-5">
                    <h4>First name:</h4>
                    <p>Damilare</p>
                </div>

                <div className="d-flex gap-5">
                    <h4>Last name:</h4>
                    <p>Atanda</p>
                </div>

                <div className="d-flex gap-5">
                    <h4>Role access:</h4>
                    <p>Product designer</p>
                </div>

                <div className="d-flex gap-5">
                    <h4>Date created:</h4>
                    <p>June 17, 2022</p>
                </div>

                <div className="d-flex gap-5">
                    <h4>Status:</h4>
                    <p>• Active</p>
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