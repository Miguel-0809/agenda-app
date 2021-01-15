import React from 'react'
import Navbar from '../components/navbar/navbar'

export default function Container(props) {
    return (
        <div>
            <Navbar/>
            <div className="container p-4">
                {props.children}
            </div>
        </div>
    )
}
