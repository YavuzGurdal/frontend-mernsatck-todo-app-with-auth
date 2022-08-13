import { useEffect } from 'react'
import { MdOutlineMail, MdPersonOutline, MdLockOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TodoItem from '../components/TodoItem'

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth) // store'daki state'den cekiyorum

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <div className='dashboard-pages-wrapper'>
            <div className="todo-pages">
                <section className="heading">
                    <h1>Welcome <span>{user && user.name}</span></h1>
                    {/* <h1>Welcome yvz grdl</h1> */}
                    <h1>Let's go!</h1>
                </section>

                <section className="content">
                    <div className='todos'>
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />

                        {/* <div className="form-group">
                            <label for='name' >Full Name</label>
                            <input id='name' type="text" className="form-control" placeholder='John Doe' />
                            <div className="input-icon"><MdPersonOutline size={20} /></div>
                        </div>
                        <div className="form-group">
                            <label for='email'>Email</label>
                            <input id='email' type="text" className="form-control" placeholder='example@site.com' />
                            <div className="input-icon"><MdOutlineMail size={20} /></div>
                        </div>
                        <div className="form-group">
                            <label for='password' >Choose Password</label>
                            <input id='password' type="text" className="form-control" placeholder='Minimum 6 characters' />
                            <div className="input-icon"><MdLockOutline size={20} /></div>
                        </div>
                        <div className="form-group">
                            <button><span>Do with TodoApp</span></button>
                        </div> */}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard