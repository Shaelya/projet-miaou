import React from 'react';
import { NavLink } from 'react-router-dom';


const HeaderDisconnected = () => (
  <div className="header-disconnected">
    <nav className="navbar navbar-dark">
        <i className="fa fa-user-times"></i><p className="ml-2 text-white">non connecté</p>
        <NavLink to="/" exact className="navbar-brand mx-auto">
          <h1>MIA'Où</h1>
        </NavLink>
        <form className="form-inline">
          <NavLink to="/app/login" exact><button className="btn btn-info mr-2" type="button">Se connecter</button></NavLink>
          <NavLink to="/inscription" exact><button className="btn btn-info" type="button">S'inscrire</button></NavLink>
        </form>
      </nav>
      <p className="subtitle text-white">Le site des animaux perdus</p>
  </div>
 

)

export default HeaderDisconnected;

