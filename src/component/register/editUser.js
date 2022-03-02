import { useParams, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import './editUser.scss';
import { useState } from "react";
import { updateUser } from "../../stores/action/userAction";
const EditUser = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { uid } = useParams();
    const editUser = useSelector(state => state.user.listUser.find(user => user.id === parseInt(uid)));

    const handleChangeInput = (event) => {
        const value = event.target.value;
        setUser({
            ...user,
            [event.target.name]: value
        })
    }
    const handleSave = (user) => {
        const action = updateUser(user)
        dispatch(action);
        history.push('/list-user')
    }

    const [user, setUser] = useState(editUser)
    return (
        <>
            <div className="user-container">
                <h1>Edit User</h1>
                <div className="form-group">
                    <label className="form-input">First Name</label>
                    <input className="form-control" placeholder='First Name' name="firstname" value={user.firstname} onChange={(event) => { handleChangeInput(event) }} />
                </div>
                <div className="form-group">
                    <label className="form-input">Last Name</label>
                    <input className="form-control" placeholder='First Name' name="lastname" value={user.lastname} onChange={(event) => { handleChangeInput(event) }} />
                </div>
                <label className="form-input">Gender</label>
                <div className="form-check">
                    <input className="form-check-input" checked={user.gender === 'male'} type="radio" name="gender" id="male" value='male' onChange={(event) => { handleChangeInput(event) }} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" checked={user.gender === 'female'} type="radio" name="gender" id="female" value='female' onChange={(event) => { handleChangeInput(event) }} />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-input">Email</label>
                    <input className="form-control" placeholder='Email' name="email" value={user.email} onChange={(event) => { handleChangeInput(event) }} />
                </div>
                <button onClick={() => { handleSave(user) }}>Save</button>
            </div>
        </>
    )
}
export default EditUser