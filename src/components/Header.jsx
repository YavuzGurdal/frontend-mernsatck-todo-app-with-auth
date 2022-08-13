import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../redux/auth/authSlice'


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <div className="header">
            <Link to='/'>
                <div className="logo">TodoApp</div>
            </Link>
            <ul>
                {
                    user ?
                        (
                            <li onClick={onLogout}>
                                <FaSignOutAlt /> Logout
                            </li>
                        )
                        :
                        (
                            <>
                                <Link to='/signup'>
                                    <li>
                                        <FaUser />SignUp
                                    </li>
                                </Link>
                                <Link to='/login'>
                                    <li>
                                        <FaSignInAlt />Login
                                    </li>
                                </Link>
                            </>
                        )
                }
            </ul>
        </div>
    )
}

export default Header