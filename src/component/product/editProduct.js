import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProduct } from "../../stores/action/productAction";

const EditProduct = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const listProduct = useSelector(state => state.product.listProduct);

    let currentProduct = listProduct.find((product) => { return product.id === parseInt(id) })
    const [product, setProduct] = useState(currentProduct)

    const handleChangeInput = (event) => {
        const value = event.target.value;
        setProduct({
            ...product,
            [event.target.name]: value
        })
    }

    const handleEditProduct = (product) => {
        if (!product.price.match(/^\d+/)) {
            toast.error('Price must be number ! ')
        }
        else if (!product.name && !product.price) {
            toast.error('please input into field')
        } else {
            const action = updateProduct(product);
            dispatch(action)
            toast.success(`edit product id :  ${product.id} success `)
            history.push('/products')
        }


    }
    return (
        <>
            <div className="detail-container">
                <div className="detail-image">
                    <img src={product.image} alt="" />
                </div>
                <div className="detail-info">
                    <p>Name</p>
                    <input style={{ width: "100%" }} value={product.name} name="name" onChange={(event) => { handleChangeInput(event) }} />
                    <p>Price</p>
                    <input style={{ width: "100%" }} value={product.price} name="price" onChange={(event) => { handleChangeInput(event) }} />

                    <button onClick={() => { handleEditProduct(product) }} style={{ float: 'right', marginTop: '20px' }}>Edit</button>
                </div>

            </div>

        </>
    )
}
export default EditProduct