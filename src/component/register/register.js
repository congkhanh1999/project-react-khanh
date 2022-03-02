
import { useState } from 'react'
import './register.scss'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addNewUser } from '../../stores/action/userAction'
import fire from '../../config/firebase'
import { toast } from 'react-toastify'

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState(
        {
            id: Math.floor(Math.random() * 1000),
            firstname: '',
            lastname: '',
            gender: '',
            email: '',
            username: '',
            password: '',
            rePassword: ''
        }
    )
    const handleChangeInput = (event) => {
        const value = event.target.value;
        setUser({
            ...user,
            [event.target.name]: value
        })
    }
    const handleRegister = (e) => {
        // const action = addNewUser(user)
        // dispatch(action);
        // history.push('/list-user')
        if (checkValidation()) {
            e.preventDefault()
            fire.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((user) => {
                    toast.success('Register successful')
                }).catch(error => {
                    toast.error(error.toString())
                })
        } else {
            toast.error('Please input correct')
        }




    }
    const checkValidation = () => {
        if (!user.firstname || !user.lastname || !user.gender || !user.email || !user.password || !user.rePassword) {
            return false;
        } else if (user.password !== user.rePassword) {
            return false;
        } else {
            return true;
        }
    }
    return (
        <>
            <div className="register-container">
                <h2>Register</h2>
                <div className="form-group">
                    <label className="form-input">First Name</label>
                    <input className="form-control" placeholder='First Name' name="firstname" value={user.firstname} onChange={(event) => { handleChangeInput(event) }} />
                </div>
                <div className="form-group">
                    <label className="form-input">Last Name</label>
                    <input className="form-control" placeholder='Last Name' name="lastname" value={user.lastname} onChange={(event) => { handleChangeInput(event) }} />
                </div>
                <label className="form-input">Gender</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="male" value='male' onChange={(event) => { handleChangeInput(event) }} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="female" value='female' onChange={(event) => { handleChangeInput(event) }} />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <label className="form-input login-detail">LOGIN DETAILS</label>
                <div className="form-group login-item">
                    <input className="form-control" placeholder='Email' name="email" value={user.email} onChange={(event) => { handleChangeInput(event) }} />
                </div>

                <div className="form-group login-item">
                    <input className="form-control " type="password" name="password" placeholder='Password' value={user.password} onChange={(event) => { handleChangeInput(event) }} />
                </div>

                <div className="form-group login-item ">
                    <input className="form-control" type="password" name="rePassword" placeholder='Re Password' value={user.rePassword} onChange={(event) => { handleChangeInput(event) }} />
                </div>
                <div>Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</div>

                <button className="sign-in" onClick={(e) => { handleRegister(e) }}>Sign up</button>

            </div>
        </>
    )
}
export default Register