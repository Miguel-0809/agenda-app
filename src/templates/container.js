import React from 'react'
import Navbar from '../components/navbar/navbar'
import { BrowserRouter as Router} from 'react-router-dom';

export default function Container(props) {
    return (
        <div>
            <Router>
                <Navbar />
                <div className="container p-2">
                    {props.children}
                </div>
            </Router>
        </div>
    )
}
