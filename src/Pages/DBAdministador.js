import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let self = this;
        fetch('/DBA', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({users: data});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }

    OptionChange = e => {
        console.log("El campo ha cambiado")
        console.log({name: e.target.value})

        
    }

    render() {
        return (
        <MDBContainer> 
            <MDBRow>
                <MDBCol size='4'>
                    <h2>Base de Datos</h2>
                    <select className="browser-default custom-select" onChange={this.OptionChange}>
                        {this.state.users.map(member =>
                            <option value={member.id}>{member.Database} </option>
                        )}
                    </select>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size='4'>
                    <h2>Tablas</h2>
                    <select className="browser-default custom-select" onChange={this.OptionChange}>
                        {this.state.users.map(member =>
                            <option value={member.id}>{member.Database} </option>
                        )}
                    </select>
                </MDBCol>
            </MDBRow>

            <MDBRow>
          
            </MDBRow>
               
               
        </MDBContainer>
               
           
        );
    }
}