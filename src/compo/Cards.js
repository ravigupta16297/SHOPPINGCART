import React, { useState, useEffect } from 'react'
import { PlusSquare, DashCircle } from 'bootstrap-icons-react'
import { useSelector } from 'react-redux'
import Zoom from './Zoom'
import { useDispatch } from 'react-redux'
import { zoomimg } from '../action'
const Cards = (props) => {

  const val = useSelector((state) => state.addremove);
  const [clicked, setClicked] = useState('white');
  const [zoo, setZoo] = useState(false)
  const [img, setImg] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    let res = val.find((ele) => ele.id === props.id)
    if (res) {
      setClicked('green');
    }
    else
      setClicked('white')
  }, [val, props.id])

  const handleimg = (e) => {
    e.preventDefault();
    dispatch(zoomimg({ img: props.img, title: props.title, price: props.price, desc: props.desc }));
    setZoo(true);
  }
  return (
    <div className='col-md-3 my-3 mx-4'>
      {zoo && <Zoom img={img} />}
      <div className="card" style={{ width: '18rem', marginLeft: '18%' }}>
        <img src={props.img} className="card-img-top" alt="..." style={{ width: '18rem', height: '8rem' }} onClick={handleimg} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"><strong>{props.price}Rs</strong></p>
          <p className="card-text">{props.desc.slice(0, 30) + "..."}</p>
          <span>
           
          <span data-toggle="tooltip" title="Click to add item to cart!">
              <PlusSquare data-toggle="tooltip" title="Some tooltip text!" onClick={() => { props.handleClick(props.id) }}
                style={{ backgroundColor: clicked }} disabled={clicked === 'white' ? false : true} /></span>
            

           
            <span data-toggle="tooltip" title="Click to remove item from cart!"><strong> <DashCircle onClick={() => {
                props.handleMinus(props.id)
                setClicked('white');
              }} /></strong></span>
          
            
          </span>
        </div>
      </div>
    </div>

  )
}

export default Cards;