import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Form, FormGroup, Input, Label} from 'reactstrap'

class SpotEdit extends Component {
 
  constructor(spot){
    super(spot)
    this.state = {
      updatedSpot: {
        name: this.props.spot?.name ||  "",
        street: this.props.spot?.street || "",
        city: this.props.spot?.city || "",
        state: this.props.spot?.state || "",
        zip: this.props.spot?.zip || "",
        description: this.props.spot?.description || "",
        image: this.props.spot?.image || "",
        user_id: this.props.spot?.user_id
      },
    
      submitted: false
    }
  }



  handleChange = (e) => {
  
    const { updatedSpot } = this.state
    updatedSpot[e.target.name] = e.target.value
    this.setState({updatedSpot: updatedSpot})
  }
  
  handleSubmit = () => {
    this.props.updateSpot(this.state.updatedSpot, this.props.spot.id)
    this.setState({submitted: true})
  }

  
  render() {
    return (
      <>
      
        <h1>Edit Pet Spot</h1>
       
        <Form>
        <FormGroup>
              <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange = {this.handleChange}
                  value = {this.state.updatedSpot.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="street">Street</Label>
                <Input
                  type="text"
                  name="street"
                  onChange = {this.handleChange}
                  value = {this.state.updatedSpot.street}
                  />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  onChange = {this.handleChange}
                  value = {this.state.updatedSpot.city}
                  />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
                <Input
                  type="text"
                  name="state"
                  onChange={this.handleChange}
                  value={this.state.updatedSpot.state}
              />
            </FormGroup>
            <FormGroup>
              <Label for="zip">Zip</Label>
                <Input
                  type="text"
                  name="zip"
                  onChange={this.handleChange}
                  value={this.state.updatedSpot.zip}
                  />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.updatedSpot.description}
                  />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
                <Input
                  type="text"
                  name="image"
                  onChange={this.handleChange}
                  value={this.state.updatedSpot.image}
                  />
            </FormGroup>
              <Button
                name="submit"
                onClick={this.handleSubmit}>
                Submit
              </Button>
          </Form> 
  
        {this.state.submitted  && <Redirect to="/spotindex" />}   
      </>
    )
  }
}

export default SpotEdit