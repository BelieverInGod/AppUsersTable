import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import UserServices from '../../services/UsersService'

const columns = [
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'gender', headerName: 'Gender', width: 300 },
  { field: 'status', headerName: 'Status', width: 300}
];

export default function UsersList() {
  const [userInfo, setUserInfo] = useState([{ name: null, email: null, gender: null, status: null, }]);  
  const [loading, setLoading] = useState(false);
  const users = new UserServices();
  let navigate = useNavigate();

  useEffect(() => {
    users.getAllUsers().then(res => {
      console.log(typeof res.data)
      setUserInfo(res.data)
      setLoading(true)
    });
  }, [])

  function linkRedirect(id) {
    navigate(`user/${id}`)
  }
  
  const table =  loading 
    ? <DataGrid
      sx={{ minWidth: 700 }}
      onRowClick={(row) => {linkRedirect(row.id)}}
      rows={userInfo}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
    /> 
    : null;
  
  return (
    <div style={{ height: 630, width: '100%' }}>
      {table}
    </div> 
  );
}