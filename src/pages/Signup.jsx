import { MdOutlineMail, MdPersonOutline, MdLockOutline } from 'react-icons/md'

const Signup = () => {
    return (
        <div className='auth-pages-wrapper'>
            <div className="auth-pages">
                <section className="heading">
                    <h1>Let's go!</h1>
                </section>

                <section className="form">
                    <form>
                        <div className="form-group">
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
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Signup