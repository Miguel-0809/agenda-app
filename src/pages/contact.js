import React from 'react'

export default function Contact() {
    return (
        <div>
            <h2 className="text-center mb-5">Contact</h2>

            <div className="contact-container">

                <form className="contact-card" >
                    <fieldset className="border p-5">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1"></label>
                            <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            <small id="emailHelp" className="form-text text-muted" >We'll never share your email with anyone else.</small>
                        </div>

                        <div>
                            <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} placeholder="Message" /><br />
                        </div>


                        <button type="submit" className="btn btn-primary w-100">Send</button>

                    </fieldset>
                </form>

                <div className="contact-card p-4" >
                    <h3 className="text-center">I'd love your feedback!</h3>
                    <p>Please leave a message, any sugesstion is well received</p>
                    <p><i className="fas fa-map-marked-alt"></i> Lima, Perú</p>
                    <p className="border-bottom mb-3"><i className="fas fa-envelope"></i> nexl1020@gmail.com</p>

                    <h6 className="text-center">Find me!</h6>
                    <div className='row justify-content-center'>
                        <a className="p-2" href="https://www.facebook.com/miguelangel.paucarnavarro" target="_blank"><i class="fab fa-facebook-square"></i></a>
                        <a className="p-2" href="https://www.instagram.com/miguel_p987/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
