import React from 'react'
import axios from 'axios'
import DefaultHeader from '../functionComponents/defaultHeader'

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: "",
      success: "",
      user: {
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }
    }
  }
  changeInputValue = (e) => {
    this.state.user[e.target.id] = e.target.value;
    this.setState({})
  }
  save = () => {

    for (let key in this.state.user) {
      if(this.state.user.password.length < 6){
        this.setState({error: "Your password must be at least 6 characters", success: ""})
      }
      if (!this.state.user[key]) {
        this.setState({error: "Please fill all the fields", success: ""})
        
      }
    }
    if (this.state.user.password !== this.state.user.passwordConfirm) {
      this.setState({error: "Your passwords don't match"})
    } else {
      delete this.state.user.passwordConfirm;
      this.setState({error: ""})
      axios.post("http://localhost:8800/api/user", this.state.user).then(r => {
        if (r) {

          this.setState({error: "", success: "You have been...."})
          this.props.history.push('/login')
        } else {
          this.setState({error: "Use Another Email"})
        }
      })
    }
  }
  toLog = () => {
    this.props.history.push('/login')
  }
  render() {
    return (<div>
      <DefaultHeader/>

      <div className="container m-8 ">
        <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-12">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center text-info">Sign Up</h3>
                <div className="alert alert-info" role="alert">
                  <p className="text-danger lg-show">{this.state.error}</p>
                </div>

                <div className="form-group">
                  <label className="text-info">Full Name:</label>
                  <input type="text" name="fullName" id="fullName" onChange={this.changeInputValue} value={this.state.user.name} className="form-control" required/>
                </div>
                <div className="form-group">
                  <label className="text-info">E-Mail:</label>
                  <input value={this.state.user.email} type='email' name="mail" id="email" onChange={this.changeInputValue} className="form-control" required/>
                </div>
                <div className="form-group">
                  <label className="text-info">Password:</label>
                  <input type="password" name="password" id="password" onChange={this.changeInputValue} value={this.state.user.password} className="form-control" required/>
                </div>
                <div className="form-group">
                  <label className="text-info">Password-Confirm:</label>
                  <input type="password" name="passwordConfirm" onChange={this.changeInputValue} id="passwordConfirm" value={this.state.user.password_confirm} className="form-control" required/>
                </div>
                <p className="text-success">{this.state.success}</p>
                <div className="form-group">
                  <button type="button" onClick={this.save} className="btn btn-info btn-md" value="submit">
                    Register</button>
                </div>
                <div id="register-link" className="text-right">
                  <hr/>
                  <p className=" text-info">Already have an account?</p>
                  <button className="btn btn-sm btn-info" onClick={this.toLog}>
                    Login 
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

export default SignUp
