import ImageWrapper from '../components/ImageWrapper'
import CategoryNavbar from '../components/CategoryNavbar'
import ProductsBestSeller from '../components/ProductsBestSeller';
import './Home.css'

const Home = () => {


  return (
    <div>
        <ImageWrapper/>
        <CategoryNavbar/>
        <div className='bestseller-products'>
        <h2>MOST WANTED</h2>
        <ProductsBestSeller/>
        </div>
        <a href="/view-all">Discover More</a>
    </div>

  )
}

export default Home
