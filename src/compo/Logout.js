import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emptyuser, emptycart } from '../action'
import { useDispatch } from 'react-redux'


const Logout = () => {
  const [toggle, setToggle] = useState(false);
  let dispatch = useDispatch();
  let nav = useNavigate();
  useEffect(() => {
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
      nav('/');
    }, 2000)
    dispatch(emptyuser([]));
    dispatch(emptycart([]));
  }, [])

  return (
    <>
      {toggle && <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
    </>
  )
}

export default Logout