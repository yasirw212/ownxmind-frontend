import React from 'react'
import './product.css'
import { Box, List, ListItem, ListItemText, Typography, Button  } from '@mui/material'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { selectProducts } from '../../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { adjustQuantityInCart } from '../../features/order/orderSlice'
import { useStyles } from './styles'
import { getProducts } from '../../features/products/productsSlice'
import { Accordion, AccordionDetails, AccordionSummary }from '@mui/material'
import { ExpandMore, MailOutline, Instagram } from '@mui/icons-material'


const Product = () => {
    const [product, setProduct] = React.useState({photos: []})
    const [relatedItems, setRelatedItems] = React.useState([])
    const [count, setCount] = React.useState(0)
    const products = useSelector(selectProducts)
    const params = useParams()
    const styles = useStyles()
    const dispatch = useDispatch()

    const addToBag = () => {
        dispatch(adjustQuantityInCart({product: product, method: '+', quantity: 1}))
    }

    const handleScreenPos = () => {
        if(window.scrollY > 65){
            document.getElementById('button-div').style.position = 'relative'
        }
    }

    window.addEventListener('scroll', () => {
        if(window.scrollY < 250 && window.innerWidth < 900 ){
            document.getElementById('button-div').style.position = 'relative'
        }
        if(window.scrollY < 200 && window.innerWidth < 900){
            document.getElementById('button-div').style.position = 'fixed'
        }
    })

    window.addEventListener('resize', () => {
        if(window.innerWidth > 900 ){
            document.getElementById('button-div').style.position = 'relative'
        } else if(window.scrollY < 200 && window.innerWidth < 900){
            document.getElementById('button-div').style.position = 'fixed'
        }
    })

    const getProduct = async () => {
        if(params.category == 'hats'){ 
            await setProduct(products.hats.find(p => p.id == params.id))
            
           setRelatedItems(products.hats.filter(p => p.id !== product.id))
        } else if(params.category == 'tops'){
            await setProduct(products.tops.find(p => p.id == params.id))
            await setRelatedItems(products.tops.filter(p => p.id !== product.id))
        } else if(params.category == 'bottoms'){
            await setProduct(products.bottoms.find(p => p.id == params.id))
            await setRelatedItems(products.bottoms.filter(p => p.id !== product.id))
        }
    }

    const getRelated = async () => {
        if(params.category == 'hats'){ 
           setRelatedItems(products.hats.filter(p => p.id !== product.id))
        } else if(params.category == 'tops'){
            await setRelatedItems(products.tops.filter(p => p.id !== product.id))
        } else if(params.category == 'bottoms'){
            await setRelatedItems(products.bottoms.filter(p => p.id !== product.id))
        }
    }

    React.useEffect(() => {
        getProduct()
        console.log(product)
    }, [products, params])

    React.useEffect(() => {
        getRelated()
    }, [product])
    

  return (
    <Box sx={styles.productContainer}>
       {
        product ?
        <>
            <nav className='pt-4'>
                <ol className="breadcrumb" separator={'>'}>
                    <li style={{margin: '0', padding: 0}}   className="breadcrumb-item "><Link className="text-dark" to={'/'}>OWN X MIND</Link></li>
                    <li className="breadcrumb-item"><Link className="text-dark" to={`/shop/${product.category}`}>PRODUCTS</Link></li>
                    <li className="breadcrumb-item active">{product.name}</li>
                </ol>
            </nav>
            <Box sx={{display: {md: 'grid'}, gridTemplate: 'auto auto / 60% 35%', marginTop: '2rem'}}>
                <Box sx={styles.imgContainer}>
                    {product.photos.length > 0 ?
                        <Box sx={{backgroundImage: `url(${product.photos[0].files[0]})`, width: '100%', backgroundPosition: 'center', height: {xs: '40vh', md: '60vh'}, backgroundSize: '100% 100%', backgroundColor: '#eaeaea', backgroundBlendMode: 'darken', maxWidth: {xs: '100%', xl: '80%'}}}></Box>
                    :
                        <Box></Box>
                    }
                </Box>
                <Box sx={{width: '100%', textAlign: {md: 'center'}, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Box sx={{width: '90%', margin: '0 auto'}}>
                    <Typography  sx={{fontFamily: 'darkPix', marginTop: {xs: '1.5rem', md: 0}, fontSize: {xs: '1rem', md: '1.25rem'}}}>
                        {`${product.name} OWN X MIND  ${product.category == 'hats' ? 'TRUCKER HAT' : product.category == 'bottoms' ? 'SWEATS' : 'TEE'}`}
                    </Typography>
                    <Typography sx={{textAlign: {xs: 'left', md: 'center'}, marginTop: '.5rem', fontSize: {xs: '1rem', sm: '1.25rem'}, fontFamily: 'serif'}} >
                        {`$${product.price}`}
                    </Typography>
                    <Box sx={{textAlign: 'left', marginTop: '1rem'}} >
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography >Details</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>Mesh Mid and Rear Panels</li>
                                    <li>Rope Details</li>
                                    <li>Adjustable Snap Closure</li>
                                    <li>Embroidered Graphics With Raised Details</li>
                                    <li>Curved Bill</li>
                                    <li>Cotton Sweat Band</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography>Shipping</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>Once your order has been processed you will receive a shipping confirmation email.</li>
                                    <li>Estimated delivery time begins when you receive your shipping confirmation email</li>
                                    <li>Allow 5-7 business days to receive your order after receiving your confirmation email.</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography>Contact Us</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{display: 'flex'}}>
                                    <MailOutline sx={{display: 'inline-flex'}} />: <p>ownmindtm@icloud.com</p>
                                </Box>
                                <Box sx={{display: 'flex'}}>
                                    <Instagram sx={{display: 'inline-flex'}} />: <p>ownmind.co</p>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    
                    </Box>
                    <Box id={'button-div'} sx={{position: {xs: 'fixed', md: 'relative'}, bottom: 0, width: '100%', left: {md: '0'}, background: '#fff', display: 'flex', justifyContent: 'center'}}>
                        <Button className='add-item' id="add-btn" onClick={() => addToBag()} variant='contained' sx={{zIndex: '5', width: '80%', margin: {xs: '2rem 0 1rem 0', md: '1rem auto 2rem auto'} }}>Add To Bag</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{maxWidth: '1300', width: '90%', margin: '1rem auto 0 auto'}}>
                <Typography variant={'h5'} sx={{fontFamily: 'darkPix', textAlign: {xs: 'left'}, marginTop: {md: '3rem'}, marginBottom: '.5rem'}}>
                    Related
                </Typography>
                <Box> 
                    {relatedItems.slice(0, 2).map(item => <Link to={`/shop/${item.category}/${item.id}`} style={{marginRight: '1rem', marginTop: '.5rem', borderRadius: '8px'}}><img className={'related-img'} src={item.photos[0].files[0]} alt="" /></Link> )}
                </Box>
            </Box>
        </>
        :
        getProducts()
       }
    </Box> 
  )
}

export default Product