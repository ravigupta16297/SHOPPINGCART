import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { user } from '../action';
const Login = () => {
    let upcase=/[A-Z]/
    const dispatch = useDispatch();
    const [item, setItem] = useState({ uname: '', pass: '' });
    const [err, setErr] = useState({});
    const [cred, setCred] = useState([])
    let hist = useNavigate();
    const handleChange = (e) => {
        let { name, value } = e.target;
        setItem({ ...item, [name]: value });
    }
    const handleClick = (e) => {
        
        if (item.uname !== '' || item.pass !== '') {
            let newdata = { id: new Date().getTime().toString(), item }
            setCred((prev) => [...prev, newdata]);
            dispatch(user(newdata));
            hist('/home')
        }
        else {
            hist('/')
        }
    }
    useEffect(() => {
        setErr({});

        if (!item.uname) {
            setErr((prev)=>({...prev,name: 'name is required*' }))
        }
        else if(item.uname.trim().length <= 6)
        setErr((prev)=>({...prev,name:'User name must be greater than six characters'}))
        if (!item.pass)
            setErr((prev)=>({...prev,pass:'Password is required*'}))
        else if(!upcase.test(item.pass))
        {
            setErr((prev)=>({...prev,pass:'Password must contain uppercase'}))
        }

    }, [item])
    return (
        <>
            <div className='contain'>
                <h2>Login</h2>
                <input type="text" name='uname' onChange={handleChange} placeholder='Enter User-Name*' />
                {err && <p><strong>{err.name}</strong></p>}
                <input type="password" name='pass' onChange={handleChange} placeholder='Enter Password*' /><br />
                {err && <p><strong>{err.pass}</strong></p>}
                <button className='btn btn-danger' onClick={handleClick} 
                disabled={Object?.keys(err)?.length >0?true:false}>Login</button>
            </div>

        </>
    )
}

export default Login