import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from './AuthProver';
import Swal from 'sweetalert2'


const Login = () => {
    const authInfo = useContext(authContext)
    const {signIn, user} = authInfo;
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signIn(email, password)
        .then(res => {
            console.log('Login 200', res.user)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            setTimeout( () => {
                navigate('/recipe')
            } ,2000)
            // form.reset()
        })
        .catch(err => {
            console.error(err.message)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "User Credential is Wrong!",
                showConfirmButton: false,
                timer : 1000
              });
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-[700px] max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p> New to chefs table? <Link className='hover:underline' to="/register"> Register </Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;