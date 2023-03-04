
import React, { useMemo, useEffect, useState } from 'react'
import { Table ,Button ,  ButtonGroup} from 'react-bootstrap'
import {MdRemoveShoppingCart} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { cartActions } from '../store/reducers'

// useMemo(() => {}, [id])
const CardDetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.carts)
  const [data,setData] = useState([])
  const [limit,setLimit] = useState(false);
  const history = useNavigate()
  const handleRemove = (e)=>{
    history("/")
    dispatch(cartActions.DLT(e)
    );
  }
  const getItemsData  = ()=>{
    let item = Array.from(cartItems).filter(item => item.id == id);
    setData(item);
    // console.log(item);
  }
  useEffect(()=>{
    getItemsData();
  },[id,cartItems])


  const handleDecrement = (e) => {
    if(e.qnty === 1){
      dispatch(cartActions.DLT(e))
      history('/')
    }
    dispatch(cartActions.REMOVE(e))
    setLimit(false);    
  }
  
  const handleIncrement = (e) => {
    if(e.qnty+1 == 16){
      setLimit(true);
        return;
    }
    setLimit(false);
    dispatch(cartActions.ADD(e))
  }

  return (
    <>
     <div className='container mt-2'>
      <h2 className='text-center'>Items Details Page</h2>
      <section className='container mt-3'>
        <div className='iteamsdetails'>

        {
          data.map((ele,index)=>{return(
            <div key={ele.id} className='d-flex flex-column flex-md-row w-100 justify-content-md-between justify-content-around p-1 p-md-2'>
              
        <div className='items_png align-self-center' >
          <img src={`${ele.imgdata}`} width={200} alt={`food image`}/>
        </div>

        <div className='details'>
          <Table>
          <tbody>
          
            
            <tr>
              <td>
                <p><strong>Restaurant</strong> {`${ele.rname}`} </p>
                <p><strong>Price</strong> {`${ele.price}`} </p>
                <p><strong>Dishes</strong> : {`${ele.address}`} </p>
                <p><strong>Total</strong> : {`${ele.price * ele.qnty}`} </p>
                <ButtonGroup aria-label="Basic example">
      <Button variant="primary" onClick={()=>handleDecrement(ele)}>-</Button>
      <Button variant="primary" aria-valuemin={0} aria-valuemax={15} disabled={true} value={ele.qnty}>{ele.qnty}</Button>
      <Button variant="primary" onClick={()=>handleIncrement(ele)}>+</Button>
    </ButtonGroup>
            
              </td>
              <td>
                <p>
                  <strong>Ratings: </strong>
                  <span>
                  {`${ele.rating} ⭐`}
                  </span>
                </p>
                <p>
                  <strong>Order Review : </strong>
                  <span>
                    {`${ele.somedata}`}
                  </span>
                </p>
                <p>
                  <strong>Remove </strong>
                  <span>
                    <MdRemoveShoppingCart onClick={()=>handleRemove(ele)} className='text-danger fs-3'/>
                  </span>
                </p>
              </td>
            </tr>
          

          </tbody>
          </Table>
{limit &&  <strong className='text-danger text-decoration-underline font-bold font-hubballi'> ⚠ limit of cart : 15</strong>}
        </div>
            </div>
          )})
        }
        </div>
      </section>
     </div> 
    </>
  )
}

export default CardDetails
