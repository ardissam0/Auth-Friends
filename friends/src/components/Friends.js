import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const ListStyles = styled.div`
  background-color: #778899;
  height: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  border-bottom: 10px solid #FFDBB0;
  color: #FFDBB0;
  text-align: left;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 1%;
  width: 99%;
`;

class Friends extends React.Component{
    constructor(){
        super();
        this.state = { friends: []}
    }
    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth().get("/api/friends")
        .then(response => {
            console.log(response);
            this.setState({ friends: response.data})
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <ListStyles>
                Friends:
        {this.state.friends.map(friend => <div>{`${friend.name}, is ${friend.age} years old`}</div>)}
        </ListStyles>
            </div>
        )
    }
}



export default Friends;