import React, { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import "./map.sass";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


class MiaouMap extends Component {
  state = {
    markers: []
  }
  componentDidMount() {
    const map = this.leafletMap.leafletElement;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);
    this.props.getData();

    searchControl.on("results", function(data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }

  addMarker = (e) => {
    const MySwal = withReactContent(Swal);

    if(this.props.alertButton) {

      MySwal.fire({
        title: 'Voulez-vous placer une alerte ici ?',
        text: '(Si oui, le formulaire d\'alerte s\'ouvrira)',
        type: "question",
        showCancelButton: true,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Non'
      }).then((result) => {
        if(result.value) {
          Swal.fire({
            text: 'L\'épingle a été placée sur la carte',
            type: 'success'
          }
          ).then((result) => {
            const markers = this.state.markers;
            markers.push(e.latlng);
            this.props.handleClickMap();
            this.setState({
              markers: markers
            })
            window.location.href = "/advert/new?lat=" + e.latlng.lat + "&lng=" + e.latlng.lng;
          })
        } else {
            this.props.handleClickMap();
        }
      })
      
      ;
      // const answer = window.confirm('Voulez-vous placer une alerte ici ?');
      // if(answer == true) {
      //   const markers = this.state.markers;
      //   markers.push(e.latlng);
      //   this.props.handleClickMap();
      //   this.setState({
      //     markers: markers
      //   })
      // } else {
      //   this.props.handleClickMap();
      // }
    }

  }

  render() {
    const center = [46.227638, 2.213749];
    const data = this.props.data;
    let markers = this.state.markers;
    
    return (
      <Map
        center={center}
        onClick={this.addMarker}
        zoom="6"
        ref={m => {
          this.leafletMap = m;
        }}
      >
        <TileLayer
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
        {data.map((alerte) => {
          const position = [alerte.latitude, alerte.longitude];
          return (
          <Marker key={alerte.id} position={position}>
            <Popup><img className="popup-image" src={alerte.picture} /><br />Nom : {alerte.name}<br />Espèce : {alerte.type} <br />Details : <Link to={ {
              pathname: '/fiche-alerte-vue',
              state: { alertData: alerte  }
            } }> Fiche alerte</Link></Popup>
          </Marker>
          )

        }
        )}
        {markers.map((marker, index) => {
          const position = [marker.lat, marker.lng];
          return <Marker key={index} position={position}></Marker>
        }
        )}
      </Map>
    );
  }
}

export default MiaouMap;

