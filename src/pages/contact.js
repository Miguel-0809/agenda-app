import React from 'react'

export default function Contact() {
    return (
        <div className="border col-6 justify-content-center mt-5 p-4">
            <div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Your name" />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingPassword" placeholder="Your email" />
                    <label htmlFor="floatingPassword">Email address</label>
                </div>

                <div className="form-floating">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3 " placeholder="We'd love your feedback :)"></textarea>
                </div>
            </div>

        </div>
    )
}
