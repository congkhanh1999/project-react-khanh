import { useState } from 'react'
import './addProduct.scss'
import { toast } from 'react-toastify'
const AddProduct = (props) => {
    const [product, setProduct] = useState({
        id: Math.random(),
        name: '',
        price: '',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg'
    })

    const handleFileSelected = (event) => {
        console.log(event.target.files[0]);
        setProduct(
            {
                ...product,
                image: event.target.files[0]
            }
        )
    }
    const handleChangeInput = (event) => {
        let value = event.target.value;
        setProduct({
            ...product,
            [event.target.name]: value
        })
    }
    const handleAddProduct = (product) => {
        if (!product.price.match(/^\d+/)) {
            toast.error('Price must be number ! ')
        }
        else if (!product.name || !product.price || product.name === "" || product.price === "") {
            toast.error('Please input ! ')
        } else {
            setProduct({
                ...product,
                name: '',
                price: ''
            })
            props.addProduct(product)
            toast.success('Add Product Successful')
        }

    }

    return (
        <>
            <div className="add-container">
                <div className="form-group">
                    <label className="form-input">Product Name</label>
                    <input className="form-control"
                        name="name"
                        placeholder='Product Name'
                        value={product.name}
                        onChange={(event) => { handleChangeInput(event) }} />
                </div>
                <div className="form-group">
                    <label className="form-input">Price</label>
                    <input className="form-control"
                        name="price"
                        placeholder='Price'
                        value={product.price}
                        onChange={(event) => { handleChangeInput(event) }} />
                </div>
                <div className="form-group">
                    <label className="form-input">Image</label>
                    <input className="form-control" type="file" onChange={(event) => { handleFileSelected(event) }} />
                </div>
                <div className="image-preview">
                    <img src={product.image} alt="" />
                </div>
                <div className="btn-container">
                    <button className="add-btn" onClick={() => { handleAddProduct(product) }}>Add Product</button>
                </div>
            </div>
        </>
    )
}
export default AddProduct;