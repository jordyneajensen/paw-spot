import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap'

class SpotIndex extends Component {
    constructor(props) {
        super(props)
        this.state={
            categories: [
                "Resturaunt",
                "Bar",
                "Coffee",
                "Park",
                "Beach",
                "Retail"
            ],
            filter: ""
        }
    }

    conditionalRendering = () =>{
        if(this.props.logged_in === false){
            return this.props.spots.length > 3 ? this.props.spots.slice(0,3) : this.props.spots
        }else if(this.state.filter === ""){
            return this.props.spots
        }else{
            return this.props.spots.filter(item => item.category === this.state.filter)
        }
    }

    clearFilter = () => {
        this.setState({filter: ""})
    }
    
    filterByCat = (cat) => {
        this.setState({filter: cat})
    }

  render() {
    
    const {
        logged_in,
        new_user_route, 
        spots} = this.props
    
    return (
      <>
        {logged_in && 
        <>
            <h1 className='spotindex-heading'>Recent Pet Spots</h1>
            <div className='filter'>
                <div className='filter-buttons'>
                    <button className="buttonShow" onClick={this.clearFilter}>
                    <div class="c1"></div>
                        <div class="c2"></div>
                        <div class="c3"></div>
                        <div class="c4"></div>
                        <div class="b1">
                            <div class="b2">
                                Show All   
                            </div>
                        </div>
                    </button>
                        { this.state.categories.map(cat => <button onClick={() => {this.filterByCat(cat)}} key={cat}>
                        <div class="c1"></div>
                        <div class="c2"></div>
                        <div class="c3"></div>
                        <div class="c4"></div>
                        <div class="b1">
                            <div class="b2">
                                {cat}   
                            </div>
                        </div>
                            </button>)}
                </div>

            </div>
        </>
        }
        {!logged_in && 
            <>
                <div className='spotindex-sneak'>
                    <h1>Sneak Peak!</h1>
                    <div className='sneak-subheadings'>
                        <h3>Sign up for the full experience!</h3>
                    </div>
                    <Button><a href={'users/sign_up'}>Sign Up</a></Button>
                </div>
            </>
        }
        <Row>

            {spots && this.conditionalRendering().map(spot => {
                
                return(
                    <Col sm={4} key={spot.id}>
                        <div className='indexcard-container'>
                            <Card className='indexcard-spacing'>
                                <CardImg src={spot.image} alt="Pet-friendly image" className='indexcardimg-sizing'/>
                                <CardBody className='indexcard-text'>
                                    <CardTitle className='pagecard-title'>{spot.name}</CardTitle>
                                    <CardSubtitle>{spot.street} {spot.city} {spot.state} {spot.zip}</CardSubtitle>
                                {logged_in &&
                                    <Button><a href={`/spotshow/${spot.id}`} >More info here</a></Button>
                                }
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                )
            })}
        </Row>
      </>
    )
  }
}


export default SpotIndex