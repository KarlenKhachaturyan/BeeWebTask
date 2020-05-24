import React from 'react'
import '../styles/home.css'
import DefaultHeader from './defaultHeader'
// import TimeCheck from '../functionComponents/TimeCheck';

const Home = () =>{

    // TimeCheck().then(r => {
    //     console.log(r)
    //     if ("error" in r) {
    //       delete sessionStorage.currentUser;
    //       this.props.history.push("/login");
    //     }else{
    //         this.props.history.push('/workspaces')
    //     }
    // })


        return(
            <div className = 'home'>
                <DefaultHeader />
            <h3 id="welcome" >Welcome to proceed please Sing up or Log in</h3>
                
            </div>
        )
    }
export default Home