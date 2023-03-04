import React,  {useState,useEffect} from 'react'
import Menu from '@mui/material/Menu';
import {NavLink, useNavigate} from 'react-router-dom'
import Badge from '@mui/material/Badge'
import {BsCart} from 'react-icons/bs'
import {IoCloseSharp} from 'react-icons/io5';
import classes from './CartMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { cartActions } from "../store/reducers/index";
import { MdOutlineDelete } from "react-icons/md";
const CartMenu = () => {
    const history = useNavigate()
    const getData = useSelector(state => state.carts);
    const totalPrice = useSelector(state => state.totalPrice);
    const dispatch = useDispatch();
    useEffect(()=>{
      console.log(getData);
    },[getData])

    const deleteItemHandler = (e) => {
      dispatch(cartActions.DLT(e));
      history('/')

    }

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <Badge badgeContent={getData.length} color="primary"
    id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
    >
      <BsCart className='text-light fs-4'/>
  </Badge>
  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        
         { (getData.length!==0)?<div className='card_details'>
              <Table className='cartMenu'>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant</th>
                  </tr>
                </thead>
                <tbody>
                {
                  getData.map((e,index)=>{
                    return (
                        <tr key={e.id}>
                          <td>
                          <NavLink to={`/cart/${e.id}`} >
                            <img src={e.imgdata} width={120} height={120} alt="img" onClick={handleClose}/>

                          </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>price : {e.price}</p>
                            <p>quantity : {e.qnty}</p>
                            <p>
                              <MdOutlineDelete className='bin' fontWeight={2} onClick={()=>deleteItemHandler(e)}/>
                            </p>
                          </td>
                        </tr>
                    )
                  })
                }
                </tbody>
                  
              </Table>
                <p className='ps-3 text-capitalize fw-bold'>{`Total : ${totalPrice}`}</p>
          </div>
          
          :

      <div className='card_details d-flex justify-content-center align-items-center  p-2'>

        <IoCloseSharp className={`${classes.crossIcon}`} onClick={handleClose}/>
        <p className='fs-4'>Your cart is empty like your DMs</p>
      </div>
      }
        
      </Menu>
    </>
  )
}

export default CartMenu