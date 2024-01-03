import { Remove, Add } from '@mui/icons-material'
import { IconButton, Button } from '@mui/material'
import { adjustItemQuantity } from '../../../features/order/orderSlice'
import { useDispatch } from 'react-redux'

const InBag = ({item}) => {
  const dispatch = useDispatch()
    // console.log(item)
  return (
    <div className="item-card" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #d7d7d7', paddingBottom: '.25em', marginTop: ''}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <img height={'75'} width={'100'} style={{borderRadius: '8px'}} src={item.photos[0].files[0]} alt="" />
                
            </div>
            <div style={{marginLeft: '1.25em'}}>
                <p className="item-title" style={{marginTop: '1rem', fontFamily: 'darkpix'}} >{item.name}</p>
                <p style={{fontFamily: 'darkpix'}}>{item.selectedSize.size}</p>
                <div className="price" style={{display: 'flex'}}>

                    <IconButton  onClick={()=> dispatch(adjustItemQuantity({product: item, method: '-', quantity: 1}))} >
                        <Remove sx={{fontSize: '1.2rem'}} />
                    </IconButton>
                    <p className="item-quanity mt-2" style={{fontSize: '1rem'}}>{`${item.quantityInCart}`}</p>
                    <IconButton onClick={() => dispatch(adjustItemQuantity({product: item, method: '+', quantity: 1}))} >
                        <Add sx={{fontSize: '1.2rem'}} />  
                    </IconButton>
                </div>
            </div>
        </div>
        <div className="description" style={{display: 'flex', flexDirection: 'column'}}>
            <p className="item-total">${`${(Number(item.price) * Number(item.quantityInCart)).toFixed(2)}`}</p>
            <Button onClick={()=>dispatch(adjustItemQuantity({product: item, method: '-', quantity: 0}))}  sx={{color: '#131313'}}>REMOVE</Button>
        </div>
    </div>
  )
}

export default InBag