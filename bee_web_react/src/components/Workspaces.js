import React from 'react'
import axios from 'axios';
import TableRow from '../functionComponents/tableRow';
import AuthHeader from '../functionComponents/authHeader'
import TimeCheck from '../functionComponents/TimeCheck'

class Workspaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {workspaces: []};

        TimeCheck().then(r => {
            if ("error" in r) {
              delete sessionStorage.currentUser;
              this.props.history.push("/login");
            }
          }).catch(e => {
            return e
          })
          let token = sessionStorage.currentUser;
      
          if (!sessionStorage.currentUser) {
            this.props.history.push('/login')
          }
    }

    componentDidMount(){
      axios.get('http://localhost:8800/api/workspaces')
        .then(response => {
          this.setState({ workspaces: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    tabRow(){
      return this.state.workspaces.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }


    render(){
      return (<div>
          <AuthHeader />
        <div className = "container m-3">
          <h3 align="center" style={{margin: "10px"}}>Workspace List</h3>
          <table className="table table-striped m-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>SubDomain</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
    </div> );
    }
}

export default Workspaces;