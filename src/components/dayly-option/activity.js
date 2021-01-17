import React,{useEffect, useState} from 'react'
import Form from './form'

import {db} from '../firebase/firebase'
import { toast } from 'react-toastify';

export default function Activity() {

    const [daylyData, setdaylyData] = useState([]);
    const [currentId, setcurrentId] = useState('');

    const addOrEdit= async (linkObject)=>{
        if (currentId==='') {
             await db.collection('daylyActivity').doc().set(linkObject);
            toast('New Activity added',{
                type:"succes",
            });
        }else{
           await db.collection('daylyActivity').doc(currentId).update(linkObject);
            toast('Activity modified succesfully',{
                type:"info",
            });
        }
    
    }

    //Showing data in real time
    const getData= async ()=>{
        db.collection('daylyActivity').onSnapshot((querySnapshot)=>{
            const daylyInfo=[];
            querySnapshot.forEach(doc=>{
                daylyInfo.push({...doc.data(), id:doc.id});
            });
            setdaylyData(daylyInfo);
        });
        
    }

    useEffect(() => {
        getData();
     }, [])
    return (
        <div>
            <Form
            addOrEdit={addOrEdit} 
            data={daylyData} 
            currentId={currentId} 
            setcurrentId={setcurrentId}
            />
        </div>
    )
}
