import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const KlatterForm = () => {

    const [volume, setVolume] = useState(""); 
    const [month, setMonth] = useState("");
    const [year, setYear] = useState(""); 
    const [issue, setIssue] = useState("");

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/klatter', {
            volume,
            month,
            year,
            issue   
        })
            .then(res=>{
            console.log(res);
            console.log(res.data);
        })
            .catch(err=>console.log(err))
    }
    
    return (
        <div className='row'>
            <div className='border-bottom border-solid border-black mb-5'>
                <h1>KlatterTracker</h1>
            </div>
            <form className='form my-auto mx-auto m-5 col-3 p-2 border border-darkd' onSubmit={onSubmitHandler}>
                <h2 className='mb-2'>Add a Klatter</h2>
                <h4>
                    <label className='form-label'>Volume:</label><br/>
                    <input className='form-control' type="text" onChange = {(e)=>setVolume(e.target.value)}/>
                </h4>
                <h4>
                    <label className='form-label'>Month:</label><br/>
                    <input className='form-control' type="text" onChange = {(e)=>setMonth(e.target.value)}/>
                </h4>
                <h4>
                    <label className='form-label'>Year:</label><br/>
                    <input className='form-control' type="text" onChange = {(e)=>setYear(e.target.value)}/>
                </h4>
                <h4>
                    <label className='form-label'>Issue:</label><br/>
                    <input className='form-control' type="text" onChange = {(e)=>setIssue(e.target.value)}/>
                </h4>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default KlatterForm;

