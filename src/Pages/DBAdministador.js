import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact'
export default class Users extends Component {
    
    constructor(props) {
        
        super(props)
        this.variable ='v'
        this.state = {
            bases: [],
            tablas:[],
            columnas1:[],
            columnas2:[],
            
            
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
            self.setState({bases: data});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }


    OptionChange = e => {
        console.log("El campo ha cambiado")
       this.variable = 'Tables_in_'.concat(e.target.value)
        console.log(this.variable);
        
        // let self = this;
        // fetch("/tablas", {
        //     method: 'POST',
        //     body: JSON.stringify(this.variable)
        // }).then(function(response) {
        //     if (response.status >= 400) {
        //         throw new Error("Bad response from server");
        //     }
        //     return response.json();
        // }).then(function(data) {
        //     self.setState({tablas: data});
        // }).catch(err => {
        // console.log('caught it!',err);
        // })
        
    }
    handleTab(event) {
        //Edit functionality
        event.preventDefault()
        var data = {
           // name: event.target.value
            name: 'db_links'
        }
        fetch("/tablas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            this.setState({tablas: data});
        }).catch(function(err) {
            console.log(err)
        });
    }

    render() {
        return (
        <MDBContainer> 
            <MDBRow>
                <MDBCol size='4'>
                    <h2>Base de Datos</h2>
                    <select className="browser-default custom-select" onChange={this.handleTab}>
                        {this.state.bases.map(base =>
                            <option value={base.id}>{base.Database} </option>
                        )}
                    </select>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size='4'>
                    <h2>Tablas</h2>
                    <select className="browser-default custom-select" onChange={this.OptionChange}>
                        {this.state.tablas.map(tabla =>
                            <option value={tabla.id}>{tabla.this.variable} </option>
                        )}
                        console.log(this.variable)
                    </select>
                </MDBCol>
            </MDBRow>

            <MDBRow>
            <MDBCol size='4'>
                    <h2>Columnas</h2>
                    <select className="browser-default custom-select" onChange={this.OptionChange} size='5' multiple>
                        {this.state.columnas1.map(col1 =>
                            <option value={col1.id}>{col1.Tables_in_db_links} </option>
                        )}
                    </select>
                </MDBCol>    
                <MDBCol size='4'>
                    <MDBBtn gradient="peach"> Todos </MDBBtn><br />
                    <MDBBtn gradient="purple">Este</MDBBtn> <br />
                    <MDBBtn gradient="blue"> Este No</MDBBtn><br />
                    <MDBBtn gradient="aqua"> Ninguno </MDBBtn><br />
                </MDBCol>  
                <MDBCol size='4'>
                    <h2>Columnas</h2>
                    <select className="browser-default custom-select" onChange={this.OptionChange} size='5' multiple>
                        {this.state.columnas2.map(col2 =>
                            <option value={col2.id}>{col2.Tables_in_db_links} </option>
                        )}
                    </select>
                </MDBCol>        
            </MDBRow>
               
               
        </MDBContainer>
               
           
        );
    }
}