import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const AddStyles = styled.div`
  background-color: #778899;
  height: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  border-bottom: 10px solid #FFDBB0;
  padding-top: 2%;
  padding-bottom: 2%;
`;

class AddFriend extends React.Component{
    constructor(){
        super();
        this.state = {friend: {name: '', age: '', email: '' }}
    }
    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post("/api/friends", this.state.friend, {
            headers:
            {authorization: window.localStorage.getItem('token')}
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    changeHandler = (event) => {
        this.setState( {friend: {...this.state.friend, [event.target.name]: event.target.value}})
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <AddStyles>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} name="name" placeholder="Name"/>
                    <input onChange={this.changeHandler} name="age" placeholder="Age"/>
                    <input onChange={this.changeHandler} name="email" placeholder="Email"/>
                    <button>ADD</button>
                </form>
                </AddStyles>
            </div>
        )
    }
}


export default AddFriend;