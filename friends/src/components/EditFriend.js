import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";

class EditFriend extends React.Component {
    constructor() {
        super();
        this.state = { id: "", name: "", age: "", email: "" }
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        axiosWithAuth().put(`/api/friends/${this.state.id}`, this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    changeHandler = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} name="id" placeholder="ID" />
                    <input onChange={this.changeHandler} name="name" placeholder="Name" />
                    <input onChange={this.changeHandler} name="age" placeholder="Age" />
                    <input onChange={this.changeHandler} name="email" placeholder="Email" />
                    <button>EDIT</button>
                </form>

            </div>
        )
    }
}

export default EditFriend; 