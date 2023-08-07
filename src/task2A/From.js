import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

function From() {

    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
    })

    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const [contactType, setContactType] = useState("")

    const handleChange = (e) => {
        // setFormData(...formData,[e.target.name]:e.target.value)
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handlecontactType = (event) => {
        // setContactType((prev)=>({
        //     ...prev,[e.target.name]:e.target.value
        // }))
        // log
        setContactType(event.target.value);

    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='card col-sm-10 shadow m-3 p-3'>
                        <div className='row'>
                            <div className="form-group col-sm-6 mt-3">
                                <label for="fname">First Name</label>
                                <input type="text" name='fName' value={formData.fName} onChange={handleChange} className="form-control" id="fname" />
                            </div>
                            <div className="form-group col-sm-6 mt-3">
                                <label for="lname">Last Name</label>
                                <input type="text" name='lName' value={formData.lName} onChange={handleChange} className="form-control" id="lname" />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="form-group col-sm-6 mt-3">
                                <label for="inputType1">How should we contact you?</label>
                                <select id="inputType1" name='contactType' value={contactType} onChange={handlecontactType} className="form-control">
                                    <option selected>Choose...</option>
                                    <option>phone</option>
                                    <option>email</option>
                                </select>
                            </div>
                            <div className='form-group col-sm-6 mt-3'>
                                {contactType === 'phone' && (
                                    <div className="form-group">
                                        <label for="phone">Phone Number</label>
                                        <input
                                            type="number"
                                            id="phone"
                                            name='contactType'
                                            value={phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                            className='form-control'
                                        />
                                    </div>
                                )}
                                {contactType === 'email' && (
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name='contactType'
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            className='form-control'
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default From