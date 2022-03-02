import './home.scss'
import Slider from 'react-slick';
import { useState } from 'react';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import productApi from '../../api/productApi';

const Home = () => {
    let history = useHistory()
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const [hotProducts, setHotProducts] = useState([

    ])

    const handleClickShopNow = () => {
        history.push('/products')
    }

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const params = {
                    _page: 1,
                    _limit: 10
                }
                const response = await productApi.getAll(params)
                setHotProducts(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchProductList();

    }, [])

    return (
        <>
            <div className="banner">
                <img src="https://i.pinimg.com/originals/3e/66/8b/3e668bb7cbe2a59b57791e1ebb2dcfdb.jpg" alt=""></img>
            </div>
            <div className="home-image">
                <div className="text">
                    <h2>View more our product</h2>
                    <button onClick={handleClickShopNow}>Shop Now</button>
                </div>
                <div className="image">
                    <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg"
                        alt="Adidas Shoes"
                        style={{ height: '600px', width: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div className="home-hot">
                <div className="hot-title">
                    <h1>HOT PRODUCT</h1>
                </div>

                <div className="list-product">
                    <Slider {...settings} style={{ width: '100%', display: 'flex' }}>
                        {
                            hotProducts.map((product) => {
                                return (
                                    <div key={product.id} className="hot-product">
                                        <div className='product-img'>
                                            <img
                                                src={product.images[0]}
                                                alt=""
                                            />
                                        </div>
                                        <p>PRICE : {product.originalPrice}</p>
                                        <p>{product.name}</p>

                                    </div>)
                            })
                        }


                    </Slider>
                </div>
                <div className="home-gender">
                    <h1>Who are you shopping for ?</h1>
                    <div className="gender-container">

                        <div className="gender-image">
                            <div className="gender-text">Men</div>
                            <img
                                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/mens_1_tcm337-819364.png"
                                alt="men"
                            />
                        </div>
                        <div className="gender-image">
                            <div className="gender-text">Women</div>
                            <img
                                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/adicolor-FW21-Sept-GLP-W-Teaser-Carousel-2_tcm212-722990.jpg"
                                alt="women"
                            />
                        </div>
                        <div className="gender-image">
                            <div className="gender-text">Kids</div>
                            <img
                                src="https://i.pinimg.com/originals/ff/a4/0c/ffa40c92a976d52859ace88e19ea6ac1.jpg"
                                alt="kid"
                            />
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}
export default Home