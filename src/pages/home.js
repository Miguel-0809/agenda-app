import React from 'react'
import Container from '../templates/container'
import { Route,Link } from 'react-router-dom';

//Pages

import About from './about'
import Contact from './contact'
import Login from './login'
import Dayly from './dayly'
import Register from './register'
import ForgotPass from './forgotPassword'


// Extra Style
import  '../components/contact/contact.css'

export default function Home() {
    return (
        <Container>
            <Route exact path="/agenda-app/" render={() => {
                return (
                    <div className="jumbotron">
                        <h1 className="display-5np text-center p-4">List your activities, make your life easier and more organized!</h1>
                        <h4 className="text-muted">Add your activities, control them with different tools and keep track of them in an easy way</h4>
                        <hr className="my-4" />
                        <p className="lead">
                            <Link to="/about">
                                <a className="btn btn-primary btn-lg" role="button" href="#">Learn more</a>
                            </Link>
                        </p>
                    </div>
                );
            }}>
            </Route>

            <Route path="/agenda-app/about" component={About} />
            <Route path="/agenda-app/contact" component={Contact} />
            <Route path="/agenda-app/login" component={Login} />
            <Route path="/agenda-app/dayly" component={Dayly} />
            <Route path="/agenda-app/register" component={Register} />
            <Route path="/agenda-app/forgot-password" component={ForgotPass} />
           

        </Container>
    )
}
