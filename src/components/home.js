import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
        this.state =  {
            username: "Rayan",
            password: "test",
            inputName: "",
            inputPwd: "",
            loggenIn: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.HandleLogin = this.HandleLogin.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    HandleLogin() {
        const {username, password, inputName, inputPwd} = this.state;
        username === inputName ? console.log("yay = username") : console.log("null");
        password === inputPwd ? console.log("yay = password") : console.log("null");
    }


    handleChange(event) { 
        const {name, value} = event.target
        // const {username, password} = this.state
        this.setState({
            [name]: value
        })
    }

    

    render() {
        const {handleChange, HandleLogin} = this;
        return(
            <div>
                <form>
                    <input name="inputName" type="text" placeholder="username" onChange={handleChange}></input>
                    <input name="inputPwd" type="text" placeholder="password" onChange={handleChange}></input>
                </form>
                <button onClick={HandleLogin}>Login</button>

            </div>
        )
    }
}

export default Home