import { useEffect, useState } from 'react'
import { MdOutlineMail, MdPersonOutline, MdLockOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../redux/auth/authSlice'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData // state'i destructuring yaptik

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }
    return (
        <div className='auth-pages-wrapper'>
            <div className="auth-pages">
                <section className="heading">
                    <h1>Welcome back!</h1>
                </section>

                <section className="form">
                    <form onSubmit={onSubmit}>
                        {/* <div className="form-group">
                            <label for='name' >Full Name</label>
                            <input id='name' type="text" className="form-control" placeholder='John Doe' />
                            <div className="input-icon"><MdPersonOutline size={20} /></div>
                        </div> */}
                        <div className="form-group">
                            <label for='email'>Email</label>
                            <input id='email' name='email' type="text" className="form-control" placeholder='Enter your email'
                                onChange={onChange}
                            />
                            <div className="input-icon"><MdOutlineMail size={20} /></div>
                        </div>
                        <div className="form-group">
                            <label for='password' >Choose Password</label>
                            <input id='password' name='password' type="text" className="form-control" placeholder='Enter password'
                                onChange={onChange}
                            />
                            <div className="input-icon"><MdLockOutline size={20} /></div>
                        </div>
                        <div className="form-group">
                            <button><span>Do with TodoApp</span></button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Login