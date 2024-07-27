import React, { Component } from 'react';
import Login from '../auth/login';
import loginImg from "../../../static/assets/images/auth/login.jpg"

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth=this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth=this.handleUnsuccessfulAuth.bind(this);
    }
    handleSuccessfulAuth(){ //no repetimos el nombre de handleSuccessfulLogin para que no se confundan.
        this.props.handleSuccessfulLogin(); //llamamos props como en cualquier lado pero estamos pasando una funcion en vez de un string
        this.props.history.push("/");//aquí es donde los redirigimos a homepage se busca en la historia de las acciones de usuario, desde donde han llegado aquí
    }

    handleUnsuccessfulAuth(){
        this.props.handleUnsuccessfulLogin();   
    }
    
    render() {
        return (
            <div className='auth-page-wrapper'>

                <div className='left-column'
                style={{
                    backgroundImage: `url(${loginImg})`
                }}/>


                <div className='right-column'>
                <Login 
                    handleSuccessfulAuth={this.handleSuccessfulAuth} 
                    handleUnsuccessfulAuth={this.handleUnsuccessfulAuth} 
                />  
                </div>
                
            </div>
        );
    }
}


