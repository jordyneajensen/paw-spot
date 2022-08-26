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
    
    const {logged_in, spots} = this.props
    
    return (
      <>
        {logged_in && 
        <>
            <h1 className='spotindex-heading'>Recent Pet Spots</h1>
            <div>
                <label>Filter By Category: </label>
                <button className="buttonShow" onClick={this.clearFilter}>Show All</button>
                    { this.state.categories.map(cat => <button onClick={() => {this.filterByCat(cat)}} key={cat}>{cat}</button>)}
            </div>
        </>
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
                        <div className='indexcard-container'>
                            <Card className='indexcard-spacing'>
                                <CardImg src={spot.image} alt="Pet-friendly image" className='indexcardimg-sizing'/>
                                <CardBody className='indexcard-text'>
                                    <CardTitle>{spot.name}</CardTitle>
                                    <CardSubtitle>{spot.street} {spot.city} {spot.state} {spot.zip}</CardSubtitle>
                                    <Button><a href={`/spotshow/${spot.id}`} >More info here</a></Button>
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