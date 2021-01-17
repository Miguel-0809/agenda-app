import React from 'react'
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <div>
            <h3 className="text-center">Reset Password</h3>
            <form className="row justify-content-center p-4 ">
                <fieldset className="border pt-5 pr-5 pl-5 pb-2">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-3">Reset Password</button>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="pt-4 w-100 text-center"><Link to="/agenda-app/login"><a><p >Login</p></a></Link></label>
                    </div>

                </fieldset>

            </form>

            <p className="text-center">Need an account? <label htmlFor="exampleInputEmail1" className="pt-3"><Link to="/agenda-app/register"><a><p >Sign Up</p></a></Link></label></p>
        </div>
    )
}
