import React from 'react'
import {Box, Card, CardMedia, CardContent, CardActions, Typography, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adjustItemQuantity } from '../../features/order/orderSlice'
import './item.css'
import { useStyles } from './styles'
import $ from 'jquery'

const ItemCard = ({item, img, category, page}) => {
    const styles = useStyles()
    const dispatch = useDispatch()

    $(document).ready(() => { 
        $('.close-sidebar').on('click', () => {
            $('.order-sidebar').fadeOut(400)
        })
      
        $('.add-item').on('click', () => {
        $('.order-sidebar').fadeIn(500)
        })
      }) 

  return (
    <Card key={item.id} className='card-container' sx={{boxShadow: '0px 0px 5px #131313', background: item.category == 'hats' ? "#fff" : '', border: item.category == 'hats' ? '9px solid #fff' : ''}}>
        <CardMedia sx={{maxWidth: {xs: '375px'}}} >
            <img width={'100%'}   className={`card-img ${item.category == 'hats' ? 'hat-img' : 'product-img'}`} src={item.photos[0].files[0]} alt="" />
        </CardMedia>
        <CardContent sx={styles.cardContent}>
            <Typography sx={styles.contentTypography}>
                {item.name}
            </Typography>
            <Typography sx={styles.contentTypography}>
                ${item.price}
            </Typography>
        </CardContent>
        <CardActions sx={styles.cardActions}>
            {/* <Button sx={page == 'home' ? styles.homeButton : styles.button} className={'add-item'} onClick={() => dispatch(adjustItemQuantity({product: item, method: '+', quantity: 1}))} variant="contained"   >
                <Typography  sx={styles.buttonText}>
                    Add to cart
                </Typography>
            </Button> */}
            <Button sx={page == 'home' ? styles.homeButton : styles.button}  variant="contained" >
                <Link to={`/shop/${item.category}/${item.id}`} style={{textDecoration: 'none', padding: '0', color: '#fff'}}>   
                    <Typography  sx={styles.buttonText}color={''} >
                        View More
                    </Typography>
                </Link>
            </Button>
        </CardActions>
    </Card>
  )
}

export default ItemCard