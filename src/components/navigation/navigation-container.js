import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";



const NavigationComponent = (props) => {

    const dynamiclink = (route, linkText) => {
        return(

        <div className="nav-link-wrapper">
            <NavLink to={route} activeClassName="nav-link-active">
                {linkText}
            </NavLink> 
        </div>
    )}
    
    const handleSignOut = () => {
        axios
            .delete("https://api.devcamp.space/logout", {withCredentials: true})
            .then (response => {
                if (response.status === 200) {  //si el estatus de respuesta es 200(funciona), vuelve al incio (esto puede variar de una api a otra, hay q ver documentación)
                    props.history.push("/"); //spoiler: esto no va a funcionar aún, no nos va a llevar al inicio
                    props.handleSuccessfulLogout();
                }
                return response.data; //esto no lo usaremos, lo hacemos porque son malas prácticas no retornar nada al llamar then en una promesa
    
            }).catch(error => {
                console.log("Error signing out", error)
            });
    };

        return(

        <div className="nav-wrapper">

            <div className="left-side">

                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink> 
                </div> 

                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">
                        About
                    </NavLink> 
                </div>
                
                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink> 
                </div>
                                
                <div className="nav-link-wrapper">
                    <NavLink to="/blog" activeClassName="nav-link-active">
                        Blog
                    </NavLink> 
                </div>

                {props.loggedInStatus ==="LOGGED_IN" ? (dynamiclink("/portfolio-manager", "Portfolio Manager")) : null}
            </div>

            <div className="right-side">
                CECILIA SCARONI

                {props.loggedInStatus === "LOGGED_IN" ? (<a onClick={handleSignOut}><FontAwesomeIcon icon="sign-out-alt" /></a>) : null}
            </div>
            
        </div>
        )
    }

export default withRouter(NavigationComponent);        
