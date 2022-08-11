import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'


const Header = () => {
    return (
        <div className="header">
            <div className="logo">TodoApp</div>
            <ul>
                <li>
                    <FaUser />SignUp
                </li>
                <li>
                    <FaSignInAlt />Login
                </li>
                <li>
                    <FaSignOutAlt /> Logout
                </li>
            </ul>
        </div>
    )
}

export default Header