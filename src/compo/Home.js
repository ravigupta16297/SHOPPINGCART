import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from './Cards';
import { additem, removeitem } from '../action';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  let dispatch = useDispatch();
  let nav=useNavigate();
  const [datas, setData] = useState([])
  const val = useSelector((state) => state.addremove);
const user=useSelector((val)=>val.user);
  const fetchdata = async () => {
    let data = await fetch('https://dummyjson.com/products')
    let res = await data.json();
    setData(res.products);
    localStorage.setItem('items', JSON.stringify(res.products))
  }
  useEffect(() => {
if(!user[0]?.item?.uname)
nav('/');
else{
    if (localStorage.getItem('items')) {
      setData(JSON.parse(localStorage.getItem('items')));
    }
    fetchdata();
  }
  }, [user])

  const handleClick = (id) => {
    let common = val.find((ele) => ele.id === id)
    if (!common) {
      let adddata = datas.find((ele) => ele.id === id);
      dispatch(additem(adddata));
    }
  }
  const handleMinus = (id) => {
    dispatch(removeitem(id));
  }

  return (
    <>
      <div className='row my-4 mx-4' style={{ alignItems: 'center' }}>

        {
          datas?.map((ele, id) => {
            return <Cards key={id} title={ele.title} img={ele.images[0]}
              price={ele.price} desc={ele.description} id={ele.id} handleClick={handleClick} handleMinus={handleMinus} />
          })
        }
      </div>
    </>
  )
}

export default Home