import React from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListItem">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email', headerName: 'Email', width: 180
        },
        {
            field: 'status', headerName: 'Status', width: 120,
        },
        {
            field: 'transaction', headerName: 'Transaction', width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="userListDelete" />
                    </>
                )
            }
        }
    ];

    return (

        <div className="userList">
            <DataGrid
                rows={userRows}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
