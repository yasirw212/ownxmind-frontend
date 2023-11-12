import React from 'react'
import {Box, Card, CardMedia, CardContent, CardActions, Typography, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adjustQuantityInCart } from '../../features/order/orderSlice'
import './item.css'
import { useStyles } from './styles'
import hatImg from '../../assets/olivexblack1.png'

const ItemCard = ({item, img, category, page}) => {
    const styles = useStyles()
    const dispatch = useDispatch()

  return (
    <Card className='card-container' sx={{boxShadow: '0px 0px 5px #131313', background: item.category == 'hats' ? "#eaeaea" : '', border: item.category == 'hats' ? '7px solid #eaeaea' : ''}}>
        <CardMedia sx={{maxWidth: {xs: '375px'}}}  /*sx={{backgroundImage: `url(${item.photos[0].file})`, backgroundSize: '100% 100%', height: page == 'home' ? '' : '200px', backgroundColor: '#eaeaea'}} */  >
            <img width={'100%'}  height={item.category == 'hats' ? '150px' : '100%'} className='card-img' src={item.photos[0].file} alt="" />
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
            <Button sx={page == 'home' ? styles.homeButton : styles.button} className={'add-item'} onClick={() => dispatch(adjustQuantityInCart({product: item, method: '+', quantity: 1}))} variant="contained"   >
                <Typography  sx={styles.buttonText}>
                    Add to cart
                </Typography>
            </Button>
            <Button sx={page == 'home' ? styles.homeButton : styles.button}  variant="outlined" >
                <Link to={`/shop/${item.category}/${item.id}`} style={{textDecoration: 'none', padding: '0', color: '#131313'}}>   
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