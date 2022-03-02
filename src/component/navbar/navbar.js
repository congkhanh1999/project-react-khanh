import { NavLink } from "react-router-dom";
import './navbar.scss'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import fire from "../../config/firebase";
import { useEffect, useState } from "react";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    const [user, setUser] = useState()
    const history = useHistory();
    const toShoppingCart = () => {
        history.push('/shopping-cart')
    }
    const handleLogout = () => {
        fire.auth().signOut()
        setUser('')
        history.push('/login')

    }
    useEffect(() => {
        fire.auth().onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return (
        <div className="navbar-container">

            <NavLink activeClassName="active" to='/home'>Home</NavLink>
            <NavLink activeClassName="active" to='/about'>About</NavLink>
            <NavLink activeClassName="active" to='/products'>Product</NavLink>
            <input className="input-search" type='text' placeholder="Search for Product" />

            <div className="navbar-right">
                {user &&
                    <span style={{ color: 'white' }}>Hello {user.email}</span>
                }
                <NavLink activeClassName="active" to='/register'>Register</NavLink>
                {user ?
                    < button onClick={() => { handleLogout() }}><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></button> :
                    <NavLink activeClassName="active" to='/login'>Login</NavLink>
                }
                <button onClick={() => { toShoppingCart() }} className="cart"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>

            </div>
        </div >

    )
}
export default Navbar;