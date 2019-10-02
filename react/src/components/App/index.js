/**
 * Import
 */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

/**
 * Local import
 */
// import { updateInputValue } from 'src/store/reducer';

// Composants enfants éventuels
import Map from 'src/components/Map';
import ButtonGeoloc from 'src/components/ButtonGeoloc';

// Styles et assets
import './app.sass';

const App = ({location, handleClick}) => (
  <div className="App">
    <nav className="navbar navbar-dark">
      <i className="fa fa-user-times"></i><p className="ml-2 text-white">non connecté</p>
      <a className="navbar-brand mx-auto" href="#">
        <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
        <h1>MIA'Où</h1>
      </a>
      <form className="form-inline">
        <button className="btn btn-info mr-2" type="button">Se connecter</button>
        <button className="btn btn-info" type="button">S'inscrire</button>
      </form>
    </nav>
    <p className="subtitle text-white">Le site des animaux perdus</p>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Map location={location} />
          <ButtonGeoloc handleClick={handleClick} />
        </div>
        <div className="col">
          <button type="button" className="btn btn-danger">Poster une alerte</button>
        </div>
      </div>
      
    </div>

    
  </div>
);

// App.propTypes = {
//   /** Titre de l'application React */
//   title: PropTypes.string.isRequired
// };

/**
 * Export
 */

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state) => {
    return {
      location: state.location
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      handleClick: () => {
        navigator.geolocation.getCurrentPosition((position) => {
          dispatch({type: 'UPDATE_LOCATION', location:{
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            zoom: 17
          }
        });

        });
      }
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const AppContainer = connectionStrategies(App);

// Étape 3 : on exporte le composant connecté qui a été généré
export default AppContainer;

// const App = () => (
// <div>
//   <Map />
//   <button className="position" >Ma position</button>
// </div>
// );



// export default App;

