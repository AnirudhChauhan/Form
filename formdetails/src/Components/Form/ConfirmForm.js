import React, { Component } from 'react';
import './../../App.css';


class ConfirmForm extends Component {
    edit = () => {
        console.log("Edit");
        this.props.history.push("./");
    }
    submit = () => {
        console.log("Success");
        alert("Submitted");
        localStorage.removeItem('name1');
        localStorage.removeItem('familyname1');
        localStorage.removeItem('contact1');
        localStorage.removeItem('email1');
        localStorage.removeItem('room1');
        localStorage.removeItem('block1');
        localStorage.removeItem('floor1');
        localStorage.removeItem('building1');
        localStorage.removeItem('street1');
        localStorage.removeItem('zip1');
        this.props.history.push("./");

    }
    render() {
        return (
            <div className="App">

                <form  className="FormWidth">

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Name:</label>
                        <div className="col-sm-6">
                            <input value={localStorage.getItem('name1')} className="form-control-plaintext" id="name1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Family Name:</label>
                        <div className="col-sm-6">
                            <input value={localStorage.getItem('familyname1')} className="form-control-plaintext" id="familyname1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Phone Number:</label>
                        <div className="col-sm-6">
                            <input value={localStorage.getItem('contact1')} className="form-control-plaintext" id="contact1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Email address:</label>
                        <div className="col-sm-6">
                            <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" value={localStorage.getItem('email1')}  />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Room:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required id="room1" placeholder="Room" value={localStorage.getItem('room1')} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Block:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required id="block1" placeholder="Block" value={localStorage.getItem('block1')} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Floor:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required id="floor1" placeholder="Floor" value={localStorage.getItem('floor1')} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Building No:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required id="building1" placeholder="Building No." value={localStorage.getItem('building1')} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Street:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required id="street1" placeholder="Street" value={localStorage.getItem('street1')} />
                        </div>
                    </div>


                    <div className="form-group row">
                        <div className="col-4">
                            <select className="custom-select mr-sm-2" id="districtSelect">
                                <option value="1">Bangalore</option>
                                <option value="2">Pune</option>
                                <option value="3">Bhopal</option>
                            </select>
                        </div>
                        <div className="col-5">
                            <select className="custom-select mr-sm-2" id="stateSelect">
                                <option value="1">Karnataka</option>
                                <option value="2">Madhya Pradesh</option>
                            </select>
                        </div>
                        <div className="col">
                            <input type="text" required className="form-control" placeholder="Zip" id="zip1" value={localStorage.getItem('zip1')} />
                        </div>
                    </div>
                    <div className="form-group row">
                    <button onClick={this.edit} className="btn btn-primary col-sm-2" >Edit</button>
                    <div className="col-sm-10">
                    <button onClick={this.submit} className="btn btn-primary ">Submit</button>
                    </div>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default ConfirmForm;
