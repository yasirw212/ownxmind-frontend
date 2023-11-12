import React from 'react'
import { Box, Typography } from '@mui/material'
import ItemCard from '../../components/item/ItemCard'
import { selectProducts } from '../../features/products/productsSlice'
import { useSelector} from 'react-redux'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './shop.css'

const Shop = () => {
    const [categoryItems, setCategoryItems] = React.useState([])
    const [filteredItems, setFilteredItems] = React.useState(categoryItems)
    const [searchParameter, setSearchParameter] = React.useState('')
    // const [searchFilter, setSearchFilter] = React.useState(' ')
    const products = useSelector(selectProducts)
    const styles = useStyles()
    const params = useParams()

    const handleChange = async (e) => {
        await setSearchParameter(document.getElementById('search-input').value)
        
        setFilteredItems(prevArray => categoryItems.filter(item => item.name.toLowerCase().indexOf(searchParameter.toLowerCase()) >= 1))
        if(searchParameter.length == 0){
            setFilteredItems(categoryItems)
        }
        console.log(categoryItems)
    }

    function searchBarActive(){
        document.getElementById('search-input-div').classList.add('search-input-div-active')
        document.getElementById('search-input').classList.add('search-input-active')
        handleChange()
    } 

    function searchBarInactive(){ 
        document.getElementById('search-input-div').classList.remove('search-input-div-active')
        document.getElementById('search-input').classList.remove('search-input-active')
    }

    React.useEffect(() => {
        setFilteredItems([])
        document.getElementById('search-input').value = ''
        if(params.category == 'hats'){
            setCategoryItems(products.hats)
            // setFilteredItems(categoryItems)
        } else if(params.category == 'bottoms'){
            setCategoryItems(products.bottoms)
            // setFilteredItems(categoryItems)
        } else if(params.category == 'tops'){
            setCategoryItems(products.tops)
            // setFilteredItems(categoryItems)
        }
    }, [params])

    React.useEffect(() => {
        setFilteredItems(categoryItems)
    }, [categoryItems])
    
  return (
    <Box onClick={()=>searchBarInactive()} sx={styles.shopContainer}>
        <nav className="mt-2 mb-4">
            <ol style={{margin: '0', padding: 0}}  className="breadcrumb">
                <li className="breadcrumb-item"><Link to={'/'} className="text-dark">OWN X MIND</Link></li>
                <li className="breadcrumb-item active">PRODUCTS</li>
            </ol>
        </nav>
        <div className="row d-flex align-items-center mb-4">
                    <div id="search-input-div" className="input-group d-flex" style={{border: 'none'}}>
                        <label style={{background: '#fff'}} for="search-input" className="input-group-text"><i class="bi bi-search"></i></label>
                        <input onChange={() => handleChange()}  onKeyUp={(e)=> searchBarActive(e)} id="search-input" className="p-2 search-input" style={{color: '#131313', border: '1px solid #DBDBDB'}} type="text" placeholder="Search"/>
                    </div>
                </div>
        <Box classNam={''}>
            
        </Box>
        <Box sx={styles.productsContainer}>
            {filteredItems.length > 0 ? filteredItems.map(item => <ItemCard item={item} category={params.category} />) :filteredItems.map(item => <ItemCard item={item} category={params.category} />) }
        </Box>
    </Box>
  )
}

export default Shop