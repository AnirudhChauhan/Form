import React, { Component } from 'react';
import './../../App.css'

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name1:'PURNIMA',
            familyname1:'SINGH',
            contact1:'9855587459',
            email1:'purnimasingh@hsbc.com',
            room1: localStorage.getItem('room1'),
            block1:localStorage.getItem('block1'),
            floor1:localStorage.getItem('floor1'),
            building1:localStorage.getItem('building1'),
            street1:localStorage.getItem('street1'),
            zip1:localStorage.getItem('zip1')
            
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleRoomChange = this.handleRoomChange.bind(this);
        this.handleBlockChange = this.handleBlockChange.bind(this);
        this.handleFloorChange = this.handleFloorChange.bind(this);
        this.handleBuildingChange = this.handleBuildingChange.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);

    }
    submit= () => {                                   
        console.log("Hi");   
        this.props.submit(this.state);
        localStorage.setItem('name1',this.state.name1);
        localStorage.setItem('familyname1',this.state.familyname1);
        localStorage.setItem('contact1',this.state.contact1);
        localStorage.setItem('email1',this.state.email1);
        localStorage.setItem('room1',this.state.room1);
        localStorage.setItem('block1',this.state.block1);
        localStorage.setItem('floor1',this.state.floor1);
        localStorage.setItem('building1',this.state.building1);
        localStorage.setItem('street1',this.state.street1);
        localStorage.setItem('zip1',this.state.zip1);






    };
    
    handleEmailChange(event) {
        this.setState({email1: event.target.value});
    }

    handleRoomChange(event) {
        this.setState({room1: event.target.value});
    }

    handleBlockChange(event) {
        this.setState({block1: event.target.value});
    }

    handleFloorChange(event) {
        this.setState({floor1: event.target.value});
    }

    handleBuildingChange(event) {
        this.setState({building1: event.target.value});
    }

    handleStreetChange(event) {
        this.setState({street1: event.target.value});
    }

    handleZipChange(event) {
        this.setState({zip1: event.target.value});
    }


    render() {
        return (
            <div className="App">
                <form onSubmit={this.submit} className="FormWidth">

                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">Name:</label>
                        <div className="col-sm-6">
                            <input value={this.state.name1}   className="form-control-plaintext" id="name1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">Family Name:</label>
                        <div className="col-sm-6">
                            <input value={this.state.familyname1}  className="form-control-plaintext" id="familyname1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">Phone Number:</label>
                        <div className="col-sm-6">
                            <input value={this.state.contact1}  className="form-control-plaintext" id="contact1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">Email address:</label>
                        <div className="col-sm-6">
                            <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" defaultValue={this.state.email1} onChange={this.handleEmailChange}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">Room:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required  id="room1" placeholder="Room" defaultValue={this.state.room1} onChange={this.handleRoomChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">Block:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required  id="block1" placeholder="Block" defaultValue={this.state.block1} onChange={this.handleBlockChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">Floor:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required  id="floor1" placeholder="Floor" defaultValue={this.state.floor1} onChange={this.handleFloorChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">Building No:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required  id="building1" placeholder="Building No." defaultValue={this.state.building1} onChange={this.handleBuildingChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">Street:</label>
                        <div className="col-sm-6">
                            <input className="form-control" required id="street1" placeholder="Street" defaultValue={this.state.street1} onChange={this.handleStreetChange}/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <div className="col-4">
                            <select   className="custom-select mr-sm-2" id="districtSelect">
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
                            <input type="text" required  className="form-control" placeholder="Zip" id="zip1" defaultValue={this.state.zip1} onChange={this.handleZipChange}/>
                        </div>
                    </div>

                    <button  className="btn btn-primary">Confirm</button>
                </form>

            </div>
        );
    }
}

export default UserForm;
