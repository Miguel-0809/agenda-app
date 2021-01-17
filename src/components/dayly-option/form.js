import React,{ useState,useEffect } from 'react'
import {db} from '../firebase/firebase'
import { toast } from 'react-toastify'

import Links from './links'

export default function Form(props) {

    const initialStateValues = {
        activity: "",
        startTime: "",
        finishTime: "",
        day: ""
    }

    const [values, setvalues] = useState(initialStateValues);

    const Handlesubmit = (e) => {
        e.preventDefault();
        props.addOrEdit(values);
        setvalues({ ...initialStateValues });
    }

    const inputChanged = (e) => {
        const { name, value } = e.target;
        setvalues({ ...values, [name]: value });
    }

    // Delete a card

    const onDeleteCard = async (id) => {
        if (window.confirm('Are you sure you want to delete this activity?')) {
            await db.collection('daylyActivity').doc(id).delete();
            toast("Activity deleted", {
                type: "error",
                autoclose: 1000,
            });
        }
    }

    //Editing a card

    const getActivityById= async (id)=>{
      const doc = await db.collection('daylyActivity').doc(id).get();
        setvalues({...doc.data()});
    }

    useEffect(() => {
       if (props.currentId==='') {
        setvalues({...initialStateValues});
       } else{
        getActivityById(props.currentId);
       }
    }, [props.currentId])

    return (
        <div>
            <h1 className="text-center">Dayly</h1>
            
            <div className="cold-mid-4 p-3">
                <form id="dayly_form" onSubmit={Handlesubmit}>
                    <p>
                        <label htmlFor="activity_d">Write your activity</label>
                        <input
                            type="text"
                            id="activity_d"
                            placeholder="Activity"
                            name="activity" autoFocus
                            autoComplete="off"
                            className='form-control'
                            onChange={inputChanged}
                            value={values.activity}
                        />
                    </p>

                    <p>
                        <label htmlFor="start">Start:</label>
                        <select
                            name="startTime"
                            id="start"
                            className="custom-select"
                            onChange={inputChanged}
                            value={values.startTime}
                        >
                            <option value=""></option>
                            <option value="00:00 am">00:00 am</option>
                            <option value="01:00 am">01:00 am</option>
                            <option value="02:00 am">02:00 am</option>
                            <option value="03:00 am">03:00 am</option>
                            <option value="04:00 am">04:00 am</option>
                            <option value="05:00 am">05:00 am</option>
                            <option value="06:00 am">06:00 am</option>
                            <option value="07:00 am">07:00 am</option>
                            <option value="08:00 am">08:00 am</option>
                            <option value="09:00 am">09:00 am</option>
                            <option value="10:00 am">10:00 am</option>
                            <option value="1:00 am">11:00 am</option>
                            <option value="12:00 am">12:00 pm</option>
                            <option value="13:00 pm">13:00 pm</option>
                            <option value="14:00 pm">14:00 pm</option>
                            <option value="15:00 pm">15:00 pm</option>
                            <option value="16:00 pm">16:00 pm</option>
                            <option value="17:00 pm">17:00 pm</option>
                            <option value="18:00 pm">18:00 pm</option>
                            <option value="19:00 pm">19:00 pm</option>
                            <option value="20:00 pm">20:00 pm</option>
                            <option value="21:00 pm">21:00 pm</option>
                            <option value="22:00 pm">22:00 pm</option>
                            <option value="23:00 pm">23:00 pm</option>


                        </select>

                        <label htmlFor="finish">Finish:</label>
                        <select
                            name="finishTime"
                            id="finish"
                            className="custom-select"
                            onChange={inputChanged}
                            value={values.finishTime}
                        >
                            <option value=""></option>
                            <option value="00:00 am">00:00 am</option>
                            <option value="01:00 am">01:00 am</option>
                            <option value="02:00 am">02:00 am</option>
                            <option value="03:00 am">03:00 am</option>
                            <option value="04:00 am">04:00 am</option>
                            <option value="05:00 am">05:00 am</option>
                            <option value="06:00 am">06:00 am</option>
                            <option value="07:00 am">07:00 am</option>
                            <option value="08:00 am">08:00 am</option>
                            <option value="09:00 am">09:00 am</option>
                            <option value="10:00 am">10:00 am</option>
                            <option value="1:00 am">11:00 am</option>
                            <option value="12:00 am">12:00 pm</option>
                            <option value="13:00 pm">13:00 pm</option>
                            <option value="14:00 pm">14:00 pm</option>
                            <option value="15:00 pm">15:00 pm</option>
                            <option value="16:00 pm">16:00 pm</option>
                            <option value="17:00 pm">17:00 pm</option>
                            <option value="18:00 pm">18:00 pm</option>
                            <option value="19:00 pm">19:00 pm</option>
                            <option value="20:00 pm">20:00 pm</option>
                            <option value="21:00 pm">21:00 pm</option>
                            <option value="22:00 pm">22:00 pm</option>
                            <option value="23:00 pm">23:00 pm</option>

                        </select>
                    </p>

                    <p>
                        <label htmlFor="day_d">Select the day:</label>
                        <select
                            name="day"
                            id="day_d"
                            className="custom-select"
                            onChange={inputChanged}
                            value={values.day}
                        >
                            <option value="select"></option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </p>

                    <input type="submit"
                        name="submit"
                        id='sub_d'
                        className="submit w-100 "
                        value={props.currentId===''? 'submit': 'update'}
                    /><br /><br />
                </form>

                <Links 
                data={props.data}
                onDeleteCard={onDeleteCard}
                setcurrentId={props.setcurrentId}
                />

            </div>
        </div>
    )
}
