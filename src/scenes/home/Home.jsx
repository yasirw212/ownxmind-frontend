import './home.css'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../features/products/productsSlice'
import ItemCard from '../../components/item/ItemCard'
import { KeyboardDoubleArrowDown } from '@mui/icons-material'

const Home = () => {
  const products = useSelector(selectProducts)
  return (
    <div className='home-container'>
        <div className="hero flicker"></div>
        <div className="home-body">
            <h3 style={{fontFamily: 'darkpix'}}>Featured In Our Collection</h3>
            <KeyboardDoubleArrowDown sx={{textAlign: 'center', fontSize: '2rem', margin: '0 auto', width: '100%'}} />
            <div className='preview-container'>
              {products?.tops.map(item => <ItemCard key={item.id} page={'home'} item={item} />)}
              {products?.bottoms.slice(0,2).map(item => <ItemCard key={item.id} page={'home'} item={item} />)}
            </div>
        </div>
    </div>
  )
}

export default Home