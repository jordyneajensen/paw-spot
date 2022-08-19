import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

class SpotShow extends Component {
  render() {
    let { spot } = this.props;

    return (
      <>
        <div className="show=container">
        {spot &&
          <Card id="showCard">
            <CardImg src={spot.image} />
            <CardBody>
              <CardTitle>{spot.name}</CardTitle>
              <CardText>
                <span>{spot.street}
                 {spot.city}, {spot.state} {spot.zip}</span>
                <br/>
                <span>{spot.description}</span>
                <br/>
              </CardText>
              <Button><a href={`/spotindex`} >All Spots</a></Button>
            </CardBody>
          </Card>
        }
        </div>
      </>
    );
  }
}

export default SpotShow;
