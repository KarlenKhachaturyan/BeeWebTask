import React from 'react';
import axios from 'axios';
import AuthHeader from '../functionComponents/authHeader';
import TimeCheck from '../functionComponents/TimeCheck';

class EditWorkspace extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
        id: '',
        userId: '',
        name: '',
        subDomain: '',
    }

    this.onChangeWorkSpaceName= this.onChangeWorkSpaceName.bind(this);
    this.onChangeSubDomain = this.onChangeSubDomain.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
      axios.get("http://localhost:8800/api/workspaces/" + this.state.id)
          .then(res =>{
          this.setState({
            id: res.data[0].id,
            userId: res.data[0].userId,
            name: res.data[0].name,
            subDomain: res.data[0].subDomain
          })})
          
    }

    onChangeWorkSpaceName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      onChangeSubDomain(e) {
        this.setState({
          subDomain: e.target.value
        });
      }

      onSubmit(e) {
        e.preventDefault();
        if (!this.state.name || !this.state.subDomain) {
          return this.setState({error: "Please fill all the fields"})
         }
        const obj = {
          id: this.state.id,
          userId : sessionStorage.getItem("userId"),
          name: this.state.name,
          subDomain: this.state.subDomain,
        };
        console.log(this.state, obj)
        axios.put('http://localhost:8800/api/workspaces/'+ obj.id, obj)
            .then(res => console.log(res.data));
        
        this.setState({
          name: '',
          subDomain: '',
        })
        

        this.props.history.push('/workspaces');

        if(!sessionStorage.currentUser) {
          this.props.history.push('/login')
        }

        TimeCheck().then(r => {
          if ("error" in r) {
            delete sessionStorage.currentUser;
            this.props.history.push("/login");
          }
        }).catch( e  => {
          console.log(e);
        })
    }

 
  render() {
    return (<div>
            <AuthHeader />
         <div className = "container m-2">
            <h3 align="center">Update Workspace</h3>
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
                    <input type="submit" 
                      value="Update Workspace" 
                      className="btn btn-primary"
                      onClick= {this.onSubmit}/>
                </div>
            </form>
        </div>
    </div>)
  }
}

export default EditWorkspace