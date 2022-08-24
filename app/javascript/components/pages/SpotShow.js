import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
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
      deleted: false
    }
  }

  render() {
    
    let { spot } = this.props;

    return (
      <>
        <div className="show-container">
        {spot &&
          <Card>
            <CardImg className="show-image" src={spot.image} />
            <CardBody>
              <CardTitle class>{spot.name}</CardTitle>
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
      </>
    );
  }
}

export default SpotShow;
