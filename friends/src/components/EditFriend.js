import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';

const EditStyles = styled.div`
  background-color: #778899;
  height: 100%;
  font-weight: bold;
  padding: 20px;
  font-size: 1.4rem;
  border-bottom: 10px solid #FFDBB0;
  padding-top: 2%;
  padding-bottom: 2%;
`;

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
                <EditStyles>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} name="id" placeholder="ID" />
                    <input onChange={this.changeHandler} name="name" placeholder="Name" />
                    <input onChange={this.changeHandler} name="age" placeholder="Age" />
                    <input onChange={this.changeHandler} name="email" placeholder="Email" />
                    <button>EDIT</button>
                </form>
                </EditStyles>
            </div>
        )
    }
}

export default EditFriend; 