import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {zoomimg} from '../action'
const Zoom = () => {
    const data=useSelector((state)=>state.zoomImg)
    const dispatch=useDispatch();
    const ref = useRef();
    useEffect(() => {
        ref.current.click();
    }, [])
    const handleClose=()=>{
        dispatch(zoomimg([]));
        console.log(data)
    }
    
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop" style={{ display: 'none' }} ref={ref}>
                Launch
            </button>
{data.length >0 &&
 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" 
 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{data[0].title}-{data[0].price}Rs only</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{display:'none'}}></button>
                        </div>
                        <div className="modal-body">
                            <img src={data[0].img} alt='img' style={{width:'60%',height:'60%',marginLeft:'20%'}}></img>
                            <p><strong>{data[0].desc}</strong></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" 
                             data-bs-dismiss="modal" onClick={handleClose} >Close</button>
                        </div>
                    </div>
                </div>
            </div>
}
        </>
    )
}

export default Zoom