
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

import './productDetail.scss'
const ProductDetail = () => {


    const [sizes, setSizes] = useState([37, 38, 39, 40, 41, 42, 43, 44])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [listProduct, setListProduct] = useState([
        { id: 1, name: 'Adidas Shoes 1', price: 5000000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 2, name: 'Adidas Shoes 2', price: 6000000, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b80ed3b0cd047868bedadbb00fc57d6_9366/five-ten-freerider-mountain-bike-shoes.jpg' },
        { id: 3, name: 'Adidas Shoes 3', price: 7000000, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/49d1b53655ed44ea8ebeac5b0022f433_9366/shmoofoil-slides.jpg' },
        { id: 4, name: 'Adidas Shoes 4', price: 8000000, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb2a411c5dca43d79c76ab680175ea0f_9366/swift-run-shoes.jpg' },
        { id: 5, name: 'Adidas Shoes 5', price: 9000000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 6, name: 'Adidas Shoes 6', price: 1000000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 7, name: 'Adidas Shoes 7', price: 1200000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 8, name: 'Adidas Shoes 8', price: 1300000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 9, name: 'Adidas Shoes 9', price: 1600000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 10, name: 'Adidas Shoes 0', price: 1800000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 11, name: 'Adidas Shoes 12', price: 1900000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 12, name: 'Adidas Shoes 11', price: 2400000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 13, name: 'Adidas Shoes', price: 2500000, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 14, name: 'Adidas Shoes', price: 2600000, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee470e4fb92f49d5b24cac8e00c28eb7_9366/terrex-swift-r3-gore-tex-hiking-shoes.jpg' },
        { id: 15, name: 'Adidas Shoes', price: 2700000, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6dc535b7f2a243a0a0daacee01126df4_9366/icon-7-boost.jpg' },
        { id: 16, name: 'Adidas Shoes 15', price: 2800000, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5888207e61eb408087f2ad5900dd867c_9366/superstar-shoes.jpg' },
    ])
    let { id } = useParams();
    let currentProduct = listProduct.find((product) => { return product.id == id })


    return (
        <>

            <div className="detail-container">
                <div className="detail-image">
                    <img src={currentProduct.image} alt="" />
                </div>
                <div className="detail-info">
                    <h1>{currentProduct.name}</h1>
                    <h4>Price : {currentProduct.price}</h4>
                    <br />
                    <h4>Available Sizes</h4>
                    <div className="size-container">
                        {
                            sizes.map(size =>

                                <button type="button" className="btn btn-light" key={size}>{size}</button>
                            )
                        }
                        <div className="button-add">
                            <button className='add'>ADD TO BAG</button>
                            <button className='like'>+</button>

                        </div>
                        <div className="promote">
                            <a href="#" onClick={handleShow} >PAY OVER TIME IN INTEREST-FREE INSTALLMENTS WITH AFFIRM, KLARNA OR AFTERPAY</a>
                        </div>
                        <div className="promote">
                            <a href="/home">JOIN CREATORS CLUB TO GET UNLIMITED FREE STANDARD SHIPPING, RETURNS, & EXCHANGES</a>
                        </div>


                    </div>

                </div>

            </div>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>PAYING IN INSTALLMENTS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Want to spread out the cost of your order with adidas? Select ‘Affirm’, ‘Klarna‘, or ‘Afterpay‘ as your payment method at checkout to pay in interest-free installments, with no hidden fees.
                    </div>
                    <br />
                    <div>
                        With Klarna, pay in 4 interest-free installments. The first payment is taken when the order is processed and the remaining 3 are automatically taken every two weeks. For CA residents, loans made or arranged are pursuant to a California Finance Lenders Law license.
                    </div>
                    <br />
                    <div>
                        With Affirm, make 4 interest-free payments every two weeks with zero hidden fees. Payment options are offered by Affirm, are subject to an eligibility check, and may not be available in all states. CA residents: Loans by Affirm Loan Services, LLC are made or arranged pursuant to a California Finance Lender license.
                    </div>
                    <br />
                    <div>
                        With Afterpay, make 4 interest-free payments. You must be over 18, a resident of the U.S., and meet additional eligibility criteria to qualify. Late fees may apply. Click here for complete terms. Loans to California residents made or arranged are pursuant to a California Finance Lenders Law license.
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}
export default ProductDetail;