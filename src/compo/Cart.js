import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

    const val = useSelector((state) => state.addremove);
    
    const user = useSelector((state) => state.user);
    const nav = useNavigate();
    useEffect(() => {
        let auth = user[0]?.item?.uname;
        if (!auth) {
            nav('/')
        }
    }, []);

    let sum = 0;

    return (
        <>
        {val .length > 0 ? <div>   <ul className="list-group mt-2">
                {
                    val?.map((ele, id) => {
                        sum += ele.price;
                        return <div key={id}>
                            <li className="list-group-item">
                                <img className='m-2' src={ele.images[0]} alt="myimg" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                <strong>{ele.title} - {ele.description}</strong>
                                <span style={{ float: 'right', marginRight: '9%' }}><strong>{ele.price} Rs</strong></span></li></div>
                    })
                }
                <li className='list-group-item mt-2'><span style={{ float: 'right', marginRight: '9%' }}>
                    <strong>Total-Price: {sum} Rs</strong></span></li>
            </ul>
            <div className='pay mt-2' onClick={() => console.log(sum)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button className='btn btn-success'>Click Here To Proceed To Payment</button>
            </div></div>:<h2 style={{textAlign:'center'}}>Add Cart Items first</h2>}
        </>
    )
}

export default Cart;