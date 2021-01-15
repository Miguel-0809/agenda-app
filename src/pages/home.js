import React from 'react'
import Container from '../templates/container'
import {Route} from 'react-router-dom';

//Pages

import About from './about'
import Contact from './contact'
import Login from './login'

export default function Home() {
    return (
       <Container>
           <Route exact path="/" render={()=>{
            return(
                <div>
                    Home
                </div>
            );
           }}>
           </Route>

           <Route path="/about" component={About}/>
           <Route path="/contact" component={Contact}/>
           <Route path="/login" component={Login}/>

       </Container>
    )
}
