import React from 'react'

export default function ActivityContainer(props) {
    return (
        <div>
            <div className="container">
                <h1 className="text-center">Navbar-user</h1>
                {props.children}
            </div>
        </div>
    )
}
