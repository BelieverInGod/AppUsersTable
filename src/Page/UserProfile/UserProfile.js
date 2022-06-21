import * as React from 'react';
import { useState,  useEffect } from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UserServices from '../../services/UsersService';
import '../UserProfile/UserProfile.css'
import Button from '@mui/material/Button';
import OptionsInput from '../OptionsInput/OptionsInput'

const inputConfig = {
  gender: {
    label: 'Gender',
    options: ['male', 'female'],
  }, 
  status: {
    label: 'Status',
    options: ['inactive', 'active'],
  }
};

export default function UserProfile() {
  const users = new UserServices();
  const navigate = useNavigate();
  const { id } = useParams();
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userStatus, setUserStatus] = useState('')

  useEffect(() => {
    users.getUser(id).then(res => {
      setUserName(res.name)
      setUserEmail(res.email)
      setUserGender(res.gender)
      setUserStatus(res.status)
    });
  }, [])

  function linkRedirect() {
    navigate(`/`)
  }
  
  return (
    <div className='parent'>
      <div  className='container'>
      <TextField
        id="input-with-icon-textfield"
        label="User-Name" variant="standard" value={userName} 
        onChange={(event) => {setUserName(event.target.value)}}
        sx={{ width: 250 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }} 
        />
        <TextField 
          variant="standard" value={userEmail}
          label="Email" 
          sx={{ width: 250 }}
          onChange={(event) => {setUserEmail(event.target.value);}}
        />
        {userGender && <OptionsInput option={userGender} setOption={setUserGender} options={inputConfig.gender.options} label={inputConfig.gender.label}/>}
        {userStatus && <OptionsInput option={userStatus} setOption={setUserStatus} options={inputConfig.status.options} label={inputConfig.status.label} />}
      </div>
      <div className='but'>
        <Button 
          variant="contained" 
          sx={{ width: 250 }}
          size={'large'} onClick={() => {users.updateUser(id, {name: userName, email: userEmail, gender: userGender, status: userStatus});
          linkRedirect()}}>update</Button>
      </div>
    </div>
  );
}