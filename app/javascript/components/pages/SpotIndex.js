import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap'

class SpotIndex extends Component {
    constructor(props) {
        super(props)
    }

    conditionalRendering = () =>{
        if(this.props.logged_in === false){
            return this.props.spots.length > 3 ? this.props.spots.slice(0,3) : this.props.spots
        }else{
            return this.props.spots
        }
    }

  render() {
    
    const {logged_in, spots} = this.props
    
    return (
      <>
        {logged_in && 
            <h1>Recent Pet Spots</h1>
        }
        {!logged_in && 
            <>
                <h1>Sneak Peak!</h1>
                <h3>Sign Up for the full</h3>
                <h3>experience!</h3>
            </>
        }
        <Row>

            {spots && this.conditionalRendering().map(spot => {
                return(
                    <Col sm={4} key={spot.id}>
                        <Card >
                            <CardImg src={spot.image} alt="Pet-friendly image"/>
                            <CardBody>
                                <CardTitle>{spot.name}</CardTitle>
                                <CardSubtitle>{spot.street} {spot.city} {spot.state} {spot.zip}</CardSubtitle>
                                <Button><a href={`/spotshow/${spot.id}`} >More info here</a></Button>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })}
        </Row>
      </>
    )
  }
}

export default SpotIndex