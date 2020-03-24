import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';

const LoginStyles = styled.div`
  background-color: #2F4F4F;
  height: 100%;
  width: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  border-bottom: 10px solid #FFDBB0;
  padding-top: 2%;
  padding-bottom: 2%;
`;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    }
    handleChange = event => {
        this.setState({ 
            credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }})
        console.log(this.state.credentials)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({...this.state, isLoading: true});

        axiosWithAuth().post('/api/login', this.state.credentials)
        .then(response => {
            console.log(response);
            window.localStorage.setItem('token', response.data.payload);

            this.setState({...this.state, isLoading: false});
            this.props.history.push('/protected')
        })
        .catch(error => console.log(error.response));
    };

    render() {
        return (
            <div>
                <LoginStyles>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" onChange={this.handleChange} placeholder="Username"/>
                    <input name="password" onChange={this.handleChange} placeholder="Password"/>
                    <button>LOGIN</button>
                </form>
                </LoginStyles>
                {this.state.isLoading && <div>Login</div>}
            </div>
        )
    }
}

export default Login;