import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row } from 'reactstrap'


class ProtectedSpotIndex extends Component {
  render() {
    const {
      logged_in,
      current_user,
    } = this.props
    return (
      <>
        <h1>My Spots</h1>
        <div>
          <Row sm="3">
            {this.props.spots && this.props.spots.map(spot => {
              return(
              <Card key ={spot.id}>
                  <CardImg top width="100%" src={spot.image}  className='card-sizing' alt="pet-friendly spot" ></CardImg>
                  <CardBody>
                    <CardTitle>{spot.name}</CardTitle>
                    <CardSubtitle> {spot.street} {spot.city} {spot.state} {spot.zip} 
                    </CardSubtitle>                   
                    <Button><a href={`/spotshow/${spot.id}`} >More info here</a></Button>     
                  </CardBody>
              </Card>
              )
              })}
          </Row>
        </div>
      </>
    )
  }
}

export default ProtectedSpotIndex