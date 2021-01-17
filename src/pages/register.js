import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div>
            <h3 className="text-center">Sign Up</h3>
            <form className="row justify-content-center p-3">
                <fieldset className="border pt-5 pr-5 pl-5 pb-2">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password Confirmation</label>
                        <input type="password" className="form-control" /><br/>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>

                </fieldset>
            </form>

            <p className="text-center">Already have an account? <label htmlFor="exampleInputEmail1" className="pt-3"><Link to="/agenda-app/login"><a><p >Login</p></a></Link></label></p>
        </div>
    )
}
