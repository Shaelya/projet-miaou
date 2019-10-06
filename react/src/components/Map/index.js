import React, { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Map, TileLayer, Marker } from "react-leaflet";
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
          //Ici gérer l'ouverture du formulaire d'alerte
          Swal.fire({
            text: 'L\'épingle a été placée sur la carte',
            type: 'success'
          }
          )
          const markers = this.state.markers;
          markers.push(e.latlng);
          this.props.handleClickMap();
          this.setState({
            markers: markers
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
          return <Marker position={position}></Marker>
        }
          
        )}
      </Map>
    );
  }
}

export default MiaouMap;


