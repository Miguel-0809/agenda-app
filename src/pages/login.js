import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <h3 className="text-center">Login</h3>
            <form className="row justify-content-center p-3">
                <fieldset className="border pt-5 pr-5 pl-5 pb-2">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Login</button>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="pt-4 w-100 text-center"><Link to="/agenda-app/forgot-password"><a><p >Forgot Password?</p></a></Link></label>
                    </div>
                </fieldset>
            </form>

            <p className="text-center">Need an account? <label htmlFor="exampleInputEmail1" className="pt-3"><Link to="/agenda-app/register"><a><p >Sign Up</p></a></Link></label></p>
        </div>
    )
}
