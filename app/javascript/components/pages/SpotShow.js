import React, { Component } from "react";
import Geocode from "react-geocode"
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

class SpotShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      deleted: false,
      mapPosition: {
				lat: 32.715736,
				lng: -117.161087
			},
			markerPosition: {
				lat: 32.715736,
				lng: -117.161087
			}
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.spot !== prevProps.spot) {
      Geocode.fromAddress(`${this.props.spot.street},${this.props.spot.city},${this.props.spot.state},${this.props.spot.zip}`, "AIzaSyAYDLOBAPis1X5bZaAT0pMBpNOg8bvLz38").then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location
          console.log(lat,lng)
          this.setState({
            markerPosition: {
              lat: lat,
              lng:lng
            },
            mapPosition: {
              lat: lat,
              lng: lng
            }
          })
        })
    }
  }


  
  render() {
    
    let { spot } = this.props;

    const containerStyle = {
      width: '42rem',
      height: '20rem',
      border: '.2rem solid black',
      margin: '2rem 0 2rem 0'
      
    };

    const options = {
      disableDefaultUI: true,
      zoomControl: true
    }
 
    return (
      <>
        <div className="show-container">
        {spot && 
          <Card >
            <CardImg className="show-image" src={spot.image} />
            <CardBody>
              <CardTitle>{spot.name}</CardTitle>
              <CardText>
                <span>{spot.street} </span>
                <br/>
                <span>{spot.city}, {spot.state} {spot.zip}</span>
                <br/>
                <span>{spot.description}</span>
                <br/>
              </CardText>
              <div className="show-buttons">
                <Button><a href={`/spotindex`} >All Spots</a></Button>
                { spot.user_id === this.props.current_user.id &&
                <>
                  <Button className="edit"><a href={`/spotedit/${spot.id}`} >Edit </a></Button>
                  <Button className="delete"><a onClick={() => this.props.deleteSpot(spot.id)} href={`/spotindex`} >Delete</a></Button>
                </>
                }
             </div>
            </CardBody>
          </Card>
          
        }
        </div>
        <div className="google-map">
          <h3>Pet Spot Location</h3>
          <LoadScript
          googleMapsApiKey="AIzaSyAYDLOBAPis1X5bZaAT0pMBpNOg8bvLz38"
          
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
            zoom={15}
            options={options}
          >
            <>
            <Marker 
                title={'Paw Spot'}
                position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
              />
              <Marker />
            </>
          </GoogleMap>
        </LoadScript>

        </div>
      </>
    );
  }
}

export default SpotShow;
