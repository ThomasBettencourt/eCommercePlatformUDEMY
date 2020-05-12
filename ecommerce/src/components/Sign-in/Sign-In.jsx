import React from 'react';
import './Sign-In.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

// Handle Form Submit function
handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''})
}

handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
}


    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span> Sign in with your e-mail </span>

                <form onSubmit={this.handleSubmit}>
                    
                    <input name='email' type="email" onChange={this.handleChange} value={this.state.email} required />
                    <label> Email </label>

                    <input name='password' onChange={this.handleChange}type="password" value={this.state.password} required />
                    <label> Password </label>

                    <input type="submit" value='Submit Form' />

                </form>
            </div> 
        )
    }
}

export default SignIn;