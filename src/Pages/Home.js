import React from 'react'
import {Link} from 'react-router-dom'
import {MDBBtn} from 'mdbreact'

class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
               <Link to='/DBA'> <MDBBtn gradient="peach">DBAdmin</MDBBtn></Link>
                <Link to='/'>  <MDBBtn gradient="purple">Home</MDBBtn></Link>  
                    <MDBBtn gradient="blue">Blue</MDBBtn>
                    <MDBBtn gradient="aqua">Aqua</MDBBtn>
            </React.Fragment>
        )
    }
}
export default Home