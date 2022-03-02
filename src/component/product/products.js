import { faHeart, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addNewFavourite, deleteFavourite } from '../../stores/action/favouriteAction';
import { addNewProduct, deleteProduct } from '../../stores/action/productAction';
import AddProduct from '../add-product/addProduct'
import './products.scss';

const Products = () => {
    const listFavourite = useSelector(state => state.favourite.listFavourite)
    console.log(listFavourite)
    const dispatch = useDispatch()
    let history = useHistory();
    const listProduct = useSelector(state => state.product.listProduct)

    const addProduct = (product) => {
        // setListProduct([...listProduct, product])
        const action = addNewProduct(product)
        dispatch(action)

    }
    const deleteFromProduct = (id) => {
        const action = deleteProduct(id)
        dispatch(action)
        // let newListProduct = listProduct.filter(product => product.id !== id)
        // setListProduct(newListProduct)
        toast.success(`Delete Product id:${id} successful`)
    }
    const handleViewDetail = (product) => {
        console.log(product)
        history.push(`/products/detail/${product.id}`)
    }
    const addToFavourite = (product) => {
        product.favourite = !product.favourite
        if (product.favourite === true) {
            const action = addNewFavourite(product)
            dispatch(action)
            toast.success(`Add Product id:${product.id} to favourite successful`)
        } else if (product.favourite === false) {
            const action = deleteFavourite(product)
            dispatch(action)
            toast.info(`Remove Product id:${product.id} to favourite successful`)
        }
    }

    const [cartListProduct, setCartListProduct] = useState([])
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('shopping_cart'))) {
            setCartListProduct(JSON.parse(localStorage.getItem('shopping_cart')));
        }
    }, [])
    const addToCart = (product) => {
        cartListProduct.push({ ...product, quantity: 1 })
        localStorage.setItem('shopping_cart', JSON.stringify(cartListProduct))
        toast.success('Add to cart success')
    }
    const toEditPage = (id) => {
        history.push(`/product/edit/${id}`)
    }
    return (
        <>

            <div className="product-container">
                <AddProduct
                    addProduct={addProduct}
                />
                <div className="back-button">
                    <Link to='/home' className='link-back'>Back</Link>
                    <Link to='/home' className='link-back'>Home</Link>
                </div>
                <h2>All Products<span>({listProduct.length})</span></h2>

                <div className="list-product">
                    {listProduct.map((product) => {
                        return (
                            <div key={product.id} className="product" >
                                <div className="btn-container">
                                    <button className="delete-btn" onClick={() => { deleteFromProduct(product.id) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                    <button className="edit-btn" onClick={() => { toEditPage(product.id) }} >< FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className={product.favourite ? 'liked-btn' : 'like-btn'} onClick={() => { addToFavourite(product) }} ><FontAwesomeIcon icon={faHeart} /></button>
                                </div>

                                <img
                                    src={product.image}
                                    alt=""
                                    onClick={() => { handleViewDetail(product) }}
                                />
                                <p>PRICE :{product.price}</p>
                                <p >{product.name}</p>
                                <button className="btn-add-cart" onClick={() => { addToCart(product) }} >Add to cart</button>

                            </div>

                        )
                    })}

                </div>

            </div>

        </>
    )
}

export default Products