import React from 'react'

export default function Links(props) {
    return (
        <div>
            <h2>Dayly activities created:</h2>
            {props.data.map(link => (
                <div className="card mb-1" key={link.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h4>{link.activity}</h4>
                            <div className="delete-edit">
                                <i className="fas fa-trash-alt"
                                    onClick={() => props.onDeleteCard(link.id)}>
                                </i>

                                <i className="fas fa-edit"
                                    onClick={() => props.setcurrentId(link.id)}>
                                </i>
                            </div>

                        </div>
                        <h5>Start: {link.startTime}</h5>
                        <h5>Finish: {link.finishTime}</h5>
                        <h5>Day: {link.day}</h5>

                    </div>
                </div>
            ))}
        </div>
    )
}
