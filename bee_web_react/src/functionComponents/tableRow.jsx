import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:8800/api/workspaces/' + this.props.obj.id )
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            
    }
    render() {
      return (
          <tr>
            <td>
              {this.props.obj.name}
            </td>
            <td>
              {this.props.obj.subDomain}
            </td>
            <td>
            <Link to={"/editWorkspace/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
            </td>
            <td>
              <button onClick={this.delete} className="btn btn-danger">Delete</button>
            </td>
          </tr>
      );
    }
  }
  
  export default TableRow;