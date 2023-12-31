import React from 'react'
import './product.css'
import { Box, Typography, Button, IconButton} from '@mui/material'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { selectProducts } from '../../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { adjustItemQuantity } from '../../features/order/orderSlice'
import { useStyles } from './styles'
import { getProducts } from '../../features/products/productsSlice'
import { Accordion, AccordionDetails, AccordionSummary }from '@mui/material'
import { ExpandMore, MailOutline, Instagram, ZoomIn, Close } from '@mui/icons-material'
import $ from 'jquery'


const Product = () => {
    const [product, setProduct] = React.useState({photos: [{files: []}], details: []})
    const [relatedItems, setRelatedItems] = React.useState([])
    const [width, setWidth] = React.useState(0)
    const [modalImg, setModalImg] = React.useState('')
    const [size, setSize] = React.useState(false)
    const products = useSelector(selectProducts)
    const params = useParams()
    const styles = useStyles()
    const dispatch = useDispatch()
    console.log(product)
    const addToBag = async () => {
        if(!size){
            dispatch(adjustItemQuantity({product: {...product, selectedSize: {size: params.category == "hats" ? null : "medium", stripe_code: params.category == "hats" ? product.sizes[0].stripe_code : product.sizes[2].stripe_code}}, method: '+', quantity: 1}))
        } else {
            console.log('v2')
            dispatch(adjustItemQuantity({product: {...product, selectedSize: {size: size.size, stripe_code: size.stripe_code}}, method: '+', quantity: 1}))
        }
    }

    $(document).ready(() => { 
        $('.close-sidebar').on('click', () => {
            $('.order-sidebar').fadeOut(400)
        })
      
        $('.add-item').on('click', () => {
            $('.order-sidebar').fadeIn(500)
        })
      }) 

    window.addEventListener('scroll', () => {
        if(window.scrollY < 250 && window.innerWidth < 900 ){
            document.getElementById('button-div').style.position = 'relative'
        }
        if(window.scrollY < 200 && window.innerWidth < 900){
            document.getElementById('button-div').style.position = 'fixed'
        }
    })

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
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

    const showModal = (event, img) => {
        $(document).ready(() => {
            $('.show-img').on('click', () => $('.modal-div').addClass('active'))
        })
        setModalImg(img)
    }

    $(document).ready(() => {
        $('.close-modal').on('click', () => $('.modal-div').removeClass('active'))
    })

    React.useEffect(() => {
        getProduct()
    }, [products, params])

    React.useEffect(() => {
        getRelated()
        setWidth(window.innerWidth)
    }, [product])
    

  return (
    <Box sx={styles.productContainer}>
       {
        product ?
        <>
        <Box className='modal-div' sx={{background: 'rgba(0, 0, 0, .5)',  position: 'fixed', top: 0, right: 0, left: '0%', bottom: 0,  zIndex: 999, justifyContent: 'center', height: '100vh', width: '100vw'}}>
            <IconButton className='close-modal' sx={{position: 'absolute', right: '3%', top: '3%'}} ><Close sx={{color: '#d7d7d7'}} /></IconButton>
            <img src={modalImg} alt="" className='modal-img' style={{margin: '0 auto', position: 'relative'}} />
        </Box>
            <nav className='pt-4'>
                <ol className="breadcrumb" >
                    <li style={{margin: '0', padding: 0}}   className="breadcrumb-item "><Link className="text-dark" to={'/'}>OWN X MIND</Link></li>
                    <li className="breadcrumb-item"><Link className="text-dark" to={`/shop/${product.category}`}>PRODUCTS</Link></li>
                    <li className="breadcrumb-item active">{product.name}</li>
                </ol>
            </nav>
            
            <Box sx={{display: {sm: 'grid'}, gridTemplate: 'auto auto / 60% 35%', marginTop: '2rem'}}>
                <Box sx={styles.imgContainer}>
                    { product?.photos.length > 0 && product?.photos[0].files.length > 1 ?
                        <Box sx={styles.imgDisplay}>
                            <Box sx={{backgroundImage: `url(${product.photos[0].files[0]})`, width: '100%', backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundColor: '#eaeaea', backgroundBlendMode: 'darken', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', minHeight: {xs: '300px', md: '200px', lg: '300px'}, minWidth: '80%',}}><IconButton className='show-img' onClick={(e) => showModal(e, product.photos[0].files[0])} ><ZoomIn sx={{color: '#d7d7d7', textShadow: '0px 0px 25px #000'}} /></IconButton></Box>
                            <Box sx={{backgroundImage: `url(${product.photos[0].files[1]})`, width: '100%', backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundColor: '#eaeaea', backgroundBlendMode: 'darken',  display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', minHeight: {xs: '300px', md: '200px', lg: '300px'}, minWidth: '80%',}}><IconButton className='show-img' onClick={(e) => showModal(e, product.photos[0].files[1])}><ZoomIn sx={{color: '#d7d7d7', textShadow: '0px 0px 15px #000'}} /></IconButton></Box>
                            <Box sx={{backgroundImage: `url(${product.photos[0].files[2]})`, width: '100%', backgroundPosition: 'center',  backgroundSize: '100% 100%', backgroundColor: '#eaeaea', backgroundBlendMode: 'darken',  display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', minHeight: {xs: '300px', md: '200px', lg: '300px'}, minWidth: '80%',}}><IconButton className='show-img' onClick={(e) => showModal(e, product.photos[0].files[2])}><ZoomIn sx={{color: '#d7d7d7', textShadow: '0px 0px 15px #000'}} /></IconButton></Box>
                            <Box sx={{backgroundImage: `url(${product.photos[0].files[3]})`, width: '100%', backgroundPosition: 'center',  backgroundSize: '100% 100%', backgroundColor: '#eaeaea', backgroundBlendMode: 'darken',  display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', minHeight: {xs: '300px', md: '200px', lg: '300px'}, minWidth: '80%',}}><IconButton className='show-img' onClick={(e) => showModal(e, product.photos[0].files[3])}><ZoomIn sx={{color: '#d7d7d7', textShadow: '0px 0px 15px #000'}} /></IconButton></Box>
                        </Box>
                    :
                        product?.photos[0].files.length > 1 ? 
                            <Box sx={{display: 'flex', overflowX: 'scroll'}}>
                                {
                                    product?.photos[0].files.map(file => {
                                        return <Box key={product.id} sx={{backgroundImage: `url(${file})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundColor: '#eaeaea', backgroundBlendMode: 'darken', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', minHeight: {xs: '300px', lg: '300px'}, marginRight: '1em'}}><IconButton className='show-img' onClick={(e) => showModal(e, product.photos[0].files[0])} ><ZoomIn sx={{color: '#d7d7d7', textShadow: '0px 0px 25px #000'}} /></IconButton></Box>
                                    }) 
                                }
                            </Box>
                        :
                        product.photos[0].files.length > 0 ?
                        <Box sx={{backgroundImage: `url(${product.photos[0].files[0]})`, width: '100%', backgroundPosition: 'center', height: {xs: '40vh', md: '60vh'}, backgroundSize: '100% 100%', backgroundColor: '#eaeaea', backgroundBlendMode: 'darken', maxWidth: {xs: '100%', xl: '80%'}, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', }}><IconButton className='show-img' onClick={(e) => showModal(e, product.photos[0].files[0])} ><ZoomIn sx={{color: '#d7d7d7', textShadow: '0px 0px 25px #000'}} /></IconButton></Box>
                        :
                            <Box></Box>
                    }
                </Box>
                <Box sx={{width: '100%', textAlign: {md: 'center'}, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Box sx={{width: '90%', margin: '0 auto'}}>
                    <Typography  sx={{fontFamily: 'darkPix', marginTop: {xs: '1.5rem', md: 0}, fontSize: {xs: '1rem', md: '1.25rem'}}}>
                        {`${product.name} OWN X MIND  ${product.category == 'hats' ? 'TRUCKER HAT' : product.category == 'bottoms' ? 'SWEATS' : 'TEE'}`}
                    </Typography>
                    {
                        product.category !== 'hats' ?
                        <select style={{color: '#131313'}} onChange={(e) => setSize( product.sizes.find(s => s.size == e.target.value))} name="size" id="size">
                            <option value="medium">M</option>
                            <option value="small">S</option>
                            <option value="large">L</option>
                            <option value="xl">XL</option>
                        </select>
                        :
                        null
                    }
                    <Typography sx={{textAlign: {xs: 'left', md: 'center'}, marginTop: '.5rem', fontSize: {xs: '1rem', sm: '1.25rem'}, fontFamily: 'serif'}} >
                        {`$${product.price}`}
                    </Typography>
                    <Box sx={{textAlign: 'left', marginTop: '1rem', marginBottom: '1rem'}} >
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography >Details</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    {product?.details.map(detail => <li key={detail}>{detail}</li>)}
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
                                    <li>Allow 7-10 business days to receive your order after receiving your confirmation email.</li>
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
                        <Button className='add-item' id="add-btn" onClick={() => addToBag()}  variant='contained' sx={{zIndex: '5', width: '80%', margin: {xs: '2rem 0 1rem 0', md: '1rem auto 2rem auto'} }}>Add To Bag</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{maxWidth: '1300', width: '90%', margin: '1rem auto 0 auto'}}>
                <Typography variant={'h5'} sx={{fontFamily: 'darkPix', textAlign: {xs: 'left'}, marginTop: {md: '3rem'}, marginBottom: '.5rem'}}>
                    Related
                </Typography>
                <Box> 
                    {relatedItems.slice(0, 2).map(item => <Link key={item.id} to={`/shop/${item.category}/${item.id}`} style={{marginRight: '1rem', marginTop: '.5rem', borderRadius: '8px'}}><img className={'related-img'} src={item.photos[0].files[0]} alt="" /></Link> )}
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