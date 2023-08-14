import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {emptyuser,emptycart} from '../action'
import { useDispatch } from 'react-redux'

const Logout = () => {
  const[toggle,setToggle]=useState(false);
    let dispatch=useDispatch();
   let nav=useNavigate();
    useEffect(()=>{
      setToggle(true);
         dispatch(emptyuser([]));
         dispatch(emptycart([]));
         setToggle(false);
          nav('/');
    },[])
    
  return (
    <>
    {toggle && <p>Logging out...</p>}
    </>
  )
}

export default Logout