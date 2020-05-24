import React from 'react'
import axios from 'axios'
import '../styles/workspaces.css'
import AuthHeader from '../functionComponents/authHeader'
import TimeCheck from '../functionComponents/TimeCheck'


class WorkSpace extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: '',
      userId: '',
      name: '',
      subDomain: '',
      error: ''
    }

    this.onChangeWorkSpaceName= this.onChangeWorkSpaceName.bind(this);
    this.onChangeSubDomain = this.onChangeSubDomain.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeWorkSpaceName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeSubDomain(e) {
    this.setState({
      subDomain: e.target.value
    })  

    const subDomain = e.target.value;
      axios.get(`http://localhost:8800/api/workspaces/checksubdomain/${subDomain}`).then(res => {
        if(res.data.canUse){
            this.state.error = 'You can use that Name'
        }else{
          this.state.error = "You can't use that name try:  " + res.data.subdomains;
        }
      
      }).catch(e => {
        this.state.error = e
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    console.log()
    if (!this.state.name || !this.state.subDomain) {
      return this.setState({error: "Please fill all the fields"})
     }
      
    const obj = {
      userId : sessionStorage.getItem("userId"),
      name: this.state.name,
      subDomain: this.state.subDomain,
    };
    
  
    axios.post('http://localhost:8800/api/workspace', obj)
        .then(res => this.props.history.push('/workspaces')).catch(e => {this.state.error = e});
    
    this.setState({
      name: '',
      subDomain: '',
    })
    
    if(!sessionStorage.currentUser) {
      this.props.history.push('/login')
    }
    TimeCheck().then(r => {
      if ("error" in r) {
        delete sessionStorage.currentUser;
        this.props.history.push("/login");
      }
    }).catch(e => {
      let er =  e
    })
}


  render() {
    return (<div>
              <AuthHeader/>
            <div className ="container m-3">
            <h3>Add New Workspace</h3>
            <p className="text-danger lg-show">{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.name}
                          onChange={this.onChangeWorkSpaceName}
                          placeholder = "Workspace Name"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                          className="form-control"
                          value={this.state.subDomain}
                          onChange={this.onChangeSubDomain}
                          placeholder = " SubDomain"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Workspace" onClick={this.onSubmit} className="btn btn-primary"/>
                    </div>
                </form>
                </div>
        </div>
    )}
}

export default WorkSpace
