import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const DeleteStyles = styled.div`
  background-color: #2F4F4F;
  height: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  border-bottom: 10px solid #FFDBB0;
  padding-top: 2%;
  padding-bottom: 2%;
`;

class DeleteFriend extends React.Component{
    constructor(){
        super();
        this.state = {id: '' }
    }
    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .delete(`/api/friends/${this.state.id}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    changeHandler = (event) => {
        this.setState( {id: event.target.value})
        console.log(this.state.id)
    }
    render(){
        return(
            <div>
                <DeleteStyles>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} placeholder="Enter ID"/>
                    <button>DELETE</button>
                </form>
                </DeleteStyles>
            </div>
        )
    }
}



export default DeleteFriend;