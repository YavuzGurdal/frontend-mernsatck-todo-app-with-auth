import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <div className="logo">TodoApp</div>
            </Link>
            <ul>
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
                <li>
                    <FaSignOutAlt /> Logout
                </li>
            </ul>
        </div>
    )
}

export default Header