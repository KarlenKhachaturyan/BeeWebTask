import React from 'react'
import axios from 'axios'
import DefaultHeader from '../functionComponents/defaultHeader'

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      error: '',
      user: {
        email: '',
        password: ''
      }
    }
  }

  valueChange = (e) => {
    this.state.user[e.target.id] = e.target.value;
    this.setState({})
  }
  
  login = () => {
    for (let key in this.state.user) {
      if (!this.state.user[key]) {
       return this.setState({error: "Please fill all the fields", success: ""})
      }
      if(this.state.user.password.length < 6){
        return this.setState({error: "Your password must be at least 6 characters", success: ""})
      }
    }
   
    axios.post('http://localhost:8800/api/users/login', this.state.user).then(r => {
      if (!r.data) {
        this.setState({error: "Check your login or password"});
      } else {
        sessionStorage.setItem("userId", r.data.user.id);
      let currentUser =  sessionStorage.setItem("currentUser", r.data.token);
        this.props.history.push('/workspaces',{currentUser});
      }
    }).catch(error => {
      if(error) this.setState({error : "Check your login or password"})
    })

  }
  toReg = () => {
    this.props.history.push('/signup')
  }
  render() {
    return (<div>
      <DefaultHeader/>

      <div className="container m-12 ">
        <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-12">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form m-3" action="" method="post">
                <h3 className="text-center text-info">Login</h3>
                <div className="alert alert-info" role="alert">
                  <p className="text-danger lg-show">{this.state.error}</p>
                </div>
                <div className="form-group">
                  <label className="text-info">Email:</label>
                  <input type="email" name="email" id="email" onChange={this.valueChange} value={this.state.user.email} className="form-control"/>
                </div>
                <div className="form-group">
                  <label className="text-info">Password:</label>
                  <input type="password" name="password" id="password" onChange={this.valueChange} value={this.state.user.password} className="form-control"/>
                </div>
                <div className="form-group">
                  <button type='button' onClick={this.login} className="btn btn-info btn-md" value="submit">
                    Log In</button>
                </div>
                <div id="register-link" className="text-right">
                  <hr/>
                  <p className=" text-info">Don't have an account?</p>
                  <button className="btn btn-sm btn-info" onClick={this.toReg}>
                    Registration
                  </button>
                  <hr/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Login
