import React from 'react'
// import { delete } from '..//app/controller/users.controller';

class LogOut extends React.Component{
    constructor(props){
        super(props);
        delete sessionStorage.currentUser;
        delete sessionStorage.userId;
        this.props.history.push('/login')
    }
    render(){
        return(<p></p>)
    }
}
export default LogOut