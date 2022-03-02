
import { useSelector, useDispatch } from "react-redux"
import { deleteUser } from "../../stores/action/userAction"
import { useHistory } from "react-router-dom"
import './listUser.scss'
const ListUser = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const listUser = useSelector(state => state.user.listUser)
    console.log(listUser)
    const handleDeleteUser = (id) => {

        const action = deleteUser(id)
        dispatch(action)
    }
    const handleEditUser = (id) => {

        history.push(`/list-user/edit/${id}`)
    }
    return (
        <>
            <div className="listUser-container">
                <h1>LIST USER</h1>
                {
                    listUser.map((user, index) => {
                        return (
                            <div key={user.id}>
                                <div className="user-container">
                                    <button onClick={() => { handleDeleteUser(user.id) }}>X</button>
                                    <button onClick={() => { handleEditUser(user.id) }}>Edit</button>
                                    <div>
                                        <p>First Name: {user.firstname}</p>
                                        <p>Last Name: {user.lastname}</p>
                                        <p>Gender: {user.gender}</p>
                                        <p>Email: {user.email}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ListUser