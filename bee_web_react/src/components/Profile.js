import React from 'react'
import axios from 'axios'
import AuthHeader from '../functionComponents/authHeader'
import TimeCheck from '../functionComponents/TimeCheck'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error : '',
      user: {
        name: "",
      },
    }
    TimeCheck().then(r => {
      if ("error" in r) {
        delete sessionStorage.currentUser;
        this.props.history.push("/login");
      }
    }).catch(e => {
     this.state.error = {e}
    })
    let token = sessionStorage.currentUser;

    if (!sessionStorage.currentUser) {
      this.props.history.push('/login')
    }
    
  }


  render() {
    return (<div>
      <AuthHeader/>
      <div className='container m-2'>
        <div className="row">
          <div className="col-sm-3" style ={{color: 'black'}}>  
            <br/>
            <h2> Welcome</h2>
            <br/>
          </div>
        </div>
        <br/>
      </div>
    </div>)
  }
}

export default Profile
