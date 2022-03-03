
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

import './productDetail.scss'
import { useSelector } from 'react-redux';
const ProductDetail = () => {


    const [sizes, setSizes] = useState([37, 38, 39, 40, 41, 42, 43, 44])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const listProduct = useSelector(state => state.product.listProduct)


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