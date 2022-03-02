import { useEffect, useState } from 'react'
import './shoppingCart.scss'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
const ShoppingCart = () => {
    const [cartListProduct, setCartListProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [promoteCode, setPromoteCode] = useState();
    const [isPromoted, setIsPromoted] = useState(false);
    const [quantity, setQuantity] = useState()
    let tax = totalPrice * 10 / 100;
    const getTotalPrice = (cartListProduct) => {
        let totalPrice = 0;
        for (let index = 0; index < cartListProduct.length; index++) {
            totalPrice += cartListProduct[index].price * cartListProduct[index].quantity
        }
        return totalPrice;
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('shopping_cart'))) {
            setCartListProduct(JSON.parse(localStorage.getItem('shopping_cart')));
        }



    }, [])
    console.log(cartListProduct)
    useEffect(() => {

        setTotalPrice(getTotalPrice(cartListProduct))
        localStorage.setItem('shopping_cart', JSON.stringify(cartListProduct));

    }, [cartListProduct])

    const removeFromCart = (product) => {
        const newCart = cartListProduct.filter(item => item.id !== product.id)
        setCartListProduct(newCart);

    }
    const checkPromoteCode = () => {
        if (promoteCode === 'DISCOUNT') {
            return true;
        } else {
            return false;
        }
    }
    const handleChangeInput = (event) => {
        const value = event.target.value;
        setPromoteCode(value);
    }

    const applyPromoteCode = () => {
        if (checkPromoteCode()) {
            setIsPromoted(true)
            toast.success('Add Promote Successful')
        } else {
            setIsPromoted(false)
            toast.error('Your promote is not available')
        }
    }

    return (

        <>
            <h1>SHOPPING CART</h1>
            <div className="cart-container">
                {
                    <div className="cart">
                        {cartListProduct && cartListProduct.length > 0 &&
                            cartListProduct.map((product, index) => {
                                return (
                                    <div key={product.id} className='product'>
                                        <div className='delete-btn'>
                                            <button onClick={() => { removeFromCart(product) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                        </div>
                                        <div className='product-img'>
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div className="product-info">
                                            <div className="product-name" >
                                                <h3>{product.name}</h3>
                                            </div>

                                            <div className="product-quantity" >
                                                <input type="number" name="quantity" value={product.quantity} onChange={(event) => {
                                                    product.quantity = event.target.value;
                                                    setCartListProduct([...cartListProduct]);
                                                }} />
                                            </div>

                                            <div className="product-price" >
                                                <h3>Price : {product.price * product.quantity}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <div className="cart-payment">
                    <h4>Order Summary</h4>
                    <p>ITEMS: {cartListProduct && cartListProduct.length ? cartListProduct.length : 0}</p>
                    <div className="payment-price">
                        <p>Sub Total: </p>
                        <p>{totalPrice}</p>
                    </div>
                    <div className="payment-price">
                        <p>Tax (10% ): </p>
                        <p>{tax}</p>
                    </div>
                    <div className="payment-price">
                        <h4>Order Total: </h4>
                        <h4>{isPromoted ? (totalPrice + tax) - (totalPrice + tax) * 20 / 100 : totalPrice + tax}</h4>
                    </div>
                    <div className="form-group">
                        <label>Promote code :</label>
                        <input type="text" className="form-control" value={promoteCode} onChange={(event) => { handleChangeInput(event) }} />
                        <button onClick={() => { applyPromoteCode() }}>Apply</button>
                    </div>
                    <div className='button-checkout'>
                        <button className='btn-checkout'>Proceed Check Out</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShoppingCart