import React from "react";
import { geolocated, geoPropTypes } from "react-geolocated";

class Geolocate extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>altitude</td>
                        <td>{this.props.coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{this.props.coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{this.props.coords.speed}</td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
        
    }
}



Geolocate.propTypes = Object.assign({}, Geolocate.propTypes, geoPropTypes);

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geolocate);


window.setInterval(
    function(){
        navigator.geolocation.getCurrentPosition(display);
    }, 1000);



// https://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript
Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}

let haversine = (currentLat, currentLon, initLat, initLon)=> {
    var initLat = 42.741; 
    var initLon = -71.3161; 
    var currentLat = 42.806911; 
    var currentLon = -71.290611; 
    
    var R = 3958.756;

    var x1 = initLat-currentLat;
    var deltaLat = x1.toRad();

    var x2 = initLon-currentLon;
    var deltaLon = x2.toRad();  

    var a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) + 
            Math.cos(currentLat.toRad()) * Math.cos(initLat.toRad()) * 
            Math.sin(deltaLon/2) * Math.sin(deltaLon/2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 

    return R * c;

}

haversine();

var stationaryLatitude = 0.0;
var stationaryLongitude = 0.0;
var currentLatitude = 0.0;
var currentLongitude = 0.0;
var isStationary = false;

function display(position) {
    currentLatitude = position.coords.latitude;
    currentLongitude = position.coords.longitude;

    if (!isStationary) {
        stationaryLatitude = currentLatitude;
        stationaryLongitude = currentLongitude;
        isStationary = true;
    }
    
    console.log(haversine(currentLongitude, currentLongitude, currentLatitude, currentLongitude));
}