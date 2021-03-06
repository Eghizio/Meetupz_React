import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditMeetup extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            name: "",
            city: "",
            address: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.getMeetupDetails();
    }

    getMeetupDetails(){
        let meetupId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    city: response.data.city,
                    address: response.data.address
                });
            })
            .catch(err => console.log(err));
    }

    editMeetup(newMeetup){
        axios.request({
            method: "put",
            url: `http://localhost:3000/api/meetups/${this.state.id}`,
            data: newMeetup
        })
        .then(response => {
            this.props.history.push("/");
        })
        .catch(err => console.log(err));
    }

    onSubmit(e){
        e.preventDefault();
        const newMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        this.editMeetup(newMeetup);
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
                <Link to="/" className="btn grey">Back</Link>
                <h1>Edit Meetup</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange} />
                        <label htmlFor="city">City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange} />
                        <label htmlFor="address">Address</label>
                    </div>
                    <input type="submit" value="Edit" className="btn" />
                </form>
            </div>
        )
    }
}

export default EditMeetup;