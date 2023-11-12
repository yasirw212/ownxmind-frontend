import React from 'react'
import InBag from './inBag/InBag'
import $ from 'jquery'
import {FaCcVisa} from 'react-icons/fa'
import {FaCcAmex} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa'
import {FaCcApplePay} from 'react-icons/fa'
import {FaCcDiscover} from 'react-icons/fa'
import { IconButton } from "@mui/material";
import { Close, DisplaySettings } from "@mui/icons-material";
import { selectItems, selectTotal, getTotal } from '../../features/order/orderSlice'
import { useSelector, useDispatch } from 'react-redux'
import './sidebar.css'

const SideBar = () => {
  const [order, setOrder] = React.useState([])
  const [cartEmpty, setCartEmpty] = React.useState(true)
  const [lineItems, setLineItems] = React.useState([])
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  let stripe = Stripe(
    "pk_live_51MuOGSKu1s29bXse3vikPjV8tIL9rq1N2ccFntq96Dl8NIVOtKnr8Ppu35LaB0i9ukzO8k9ChDqN8ILZGDUjiZu300ksLCSXrL"
   )

   
   function placeOrder(){
    
    let line_items = []
    items.forEach((item)=>{
        line_items.push(
            {
                price: item.productCode,
                quantity: item.quantityInCart
            }
        )
    })
    setTimeout(function(){
        stripe.redirectToCheckout({
            shippingAddressCollection: {
            allowedCountries: ['US', 'CA'],
            },
        
            lineItems: line_items,
            mode: "payment",
            successUrl: "https://ownxmind.netlify.app/",
            cancelUrl: "https://ownxmind.netlify.app/",
        }).then(function(result){
            alert(result)
        });
    },1000)
}

   React.useEffect(() => {
      setCartEmpty(items.length > 0 ? false: true)
      dispatch(getTotal())
   }, [items])

   $(document).ready(() => { 
    $('.close-sidebar').on('click', () => {
        $('.order-sidebar').fadeOut(400)
    })

    $('.add-item').on('click', () => {
      $('.order-sidebar').fadeIn(500)
    })
}) 

  return (
    <div className="order-sidebar">
            <div className="order-sidebar-header">
                <IconButton className="close-sidebar"  sx={{alignSelf: 'flex-end'}}  >
                    <Close />
                </IconButton>
                <h1 className="text-dark">OWN X MIND</h1>
                
            </div>
            
            <div className="order-sidebar-body">
            {cartEmpty ? '' : <h4 className="order-sidebar-body-header" style={{fontFamily: 'darkpix'}}>Your Items</h4>}
                {
                    cartEmpty ?
                    <div className="cart-empty" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh'}}>
                        <p className="text-muted" style={{fontSize: '3rem'}}><i className="bi bi-bag-x-fill"></i></p>
                        <h3>Your bag is empty</h3>
                    </div> 
                    :
                        <div className="order-items">
                            {items.map(item => <InBag item={item} />)}
                        </div>
                }
            </div>
            {
                cartEmpty ?
                    '' 
                :
                <div className="order-sidebar-footer">
                    <div className="taxes-container">
                        <p className="">Estimated Taxes: </p>
                        <p className="price">----</p>
                    </div>
                    <div className="shipping-container">
                        <p className="">Shipping: </p>
                        <p className="price">Free</p>
                    </div>
                    <div className="total-container">
                        <p className="">Estimated Total: </p>
                        <p className="price">{total.toFixed(2)}</p>
                    </div>
                    <button onClick={() => placeOrder()}  style={{color: '#fff', background:'#131313', fontSize: '1.1rem', padding: '.5em 1.75em', fontWeight: 'light'}} className="checkout-btn">Check Out <i className="bi bi-bag-fill  mx-3" style={{cursor:'pointer'}}></i></button>
                    <div style={{alignSelf: 'flex-start', marginTop: '1.5rem'}}>
                        <p style={{marginBottom: '.75em'}}>SECURE PAYMENT</p>
                        <FaCcVisa style={{fontSize: '2rem', margin: '0em .35em 0 0'}} />
                        <FaCcAmex style={{fontSize: '2rem', margin: '0em .35em 0 0'}} />
                        <FaCcMastercard style={{fontSize: '2rem', margin: '0em .35em 0 0'}} />
                        <FaCcDiscover style={{fontSize: '2rem', margin: '.0em .35em 0 0'}} />
                        <FaCcApplePay style={{fontSize: '2rem', margin: '0em .35em 0 0'}} />
                    </div>
                    {/* <div className="contact-container" style={{alignSelf: 'flex-start', marginTop: '.5em'}} >
                        <p style={{fontSize: '1rem', margin: '.5em 0 0 0'}}>CONTACT US</p>
                        <p style={{fontSize: '.85rem', margin: '.25em 0 0 0'}}>EMAIL: OWNMINDTM@ICLOUD.COM</p>
                        <p style={{fontSize: '.85rem', margin: '.25em 0 0 0'}}>INSTAGRAM: OWNMIND.1</p>
                    </div> */}
                </div>
            }
        </div>
  )
}

export default SideBar