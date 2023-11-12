import React from 'react'
import { useNavigate } from 'react-router'
import { Popper, Box, Button, useTheme, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useStyles } from './muiStyles'
import $ from 'jquery'
import './navbar.css'


const Navbar = () => {
    const styles = useStyles()
    const theme = useTheme()
    
    function navbarActive(){
        document.querySelector('.navbar-items').classList.toggle('active')
    }

    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickAway = () => {
    setAnchorEl(false);
    }

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        
    };

    const redirect = (param) =>{
        navigate({pathname: `/shop/${param}`})
        handleClick()
    }

    $(document).ready(() => {
        $('.bag-icon').on('click', () => {
          $('.order-sidebar').fadeIn(500)
          console.log('hello')
        })
    
        $('.navbar-toggler-icon').on('click', () => {
             if(anchorEl){
                setAnchorEl(null) 
             }
        })
      })


    

    let open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handlePopper = () => {
        open = undefined
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light p-3" style={{borderBottom: "3px solid #EAEAEA", position: 'fixed', zIndex: '4', width: '100vw', background: '#fff'}}>
            <div className="container" style={{display: 'flex', alignItems: 'center', width: '100vw', justifyContent: 'flex-end'}} >
                <Box sx={{position: 'absolute', left: '5%', alignSelf: {xs: 'flex-start', sm: 'center'}}}>
                    <Link to={'/'} style={{textDecoration: 'none', justifySelf: 'center'}}>
                        <Typography variant={'h5'} sx={{color: '#131313', fontFamily: 'darkpix'}}>
                             OWN X MIND
                        </Typography>
                    </Link>
                </Box>
                <div className="" style={{display: 'flex', fontSize: '1.25rem'}}>
                    <div className="text-dark mx-3">
                        <i className="bi bi-bag-fill bag-icon" style={{cursor:'pointer'}}></i>
                    </div>
                    <button style={{zIndex: '99'}} className="navbar-toggler" onClick={()=> navbarActive()} data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div style={{justifySelf: 'flex-end'}} className="collapse navbar-collapse  items-container" id="navbarCollapse">
                    <ul className="nav navbar-nav " style={{display: 'flex', alignItems: 'center'}}>
                        <li className="nav-item" data-bs-dismiss="collapse" style={{marginTop: {sm: '5rem'}}}><Button sx={{fontFamily: 'serif', fontSize: '1.1rem'}}><Link to='/' className="nav-link text-dark text-center">HOME</Link></Button></li>
                        {/* <li className="nav-item" data-bs-dismiss="collapse" style={{marginTop: {sm: '5rem'}}}><Button sx={{fontFamily: 'serif', fontSize: '1.1rem'}}><Link to='/shop' className="nav-link text-dark text-center">SHOP</Link></Button></li> */}
                        {/* <li className="nav-item"><Link to='/shop' className="nav-link text-dark">Shop</Link></li> */}
                        {/* <li className="nav-item text-dark nav-link" style={{margin: "0 auto"}}> */}
                        <Button color={'primary'} aria-describedby={id} type="button" onClick={handleClick} sx={{fontFamily: 'serif', fontSize: '1.1rem'}}>
                            SHOP
                        </Button>
                        <Popper  id={id} open={open} anchorEl={anchorEl} sx={{zIndex: 5, p: 0, margin: 0}}>
                            <Box sx={{padding: '0em', bgcolor: '#fff', borderRadius: "7px", boxShadow: '0px 0px 5px #131313' }}>
                                <ul style={{listStyle: 'none', textAlign: 'center', padding: '1rem' }}>
                                    <li><Button onClick={() => redirect('tops')}>Tops</Button></li>
                                    <li><Button onClick={() => redirect('bottoms')}>Bottoms</Button></li>
                                    <li><Button onClick={() => redirect('hats')}>Hats</Button></li>
                                </ul>
                            </Box>
                           
                        </Popper>
                        {/* </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar