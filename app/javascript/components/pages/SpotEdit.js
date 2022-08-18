import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Form, FormGroup, Input, Label} from 'reactstrap'

class SpotEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      updatedSpot: {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        description: "",
        image: "",
        user_id: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
  
    let {updatedSpot} = this.state
    updatedSpot[e.target.name] = e.target.value
    this.setState({updatedSpot: updatedSpot})
  }
  
  handleSubmit = () => {
    this.props.updateSpot(this.state.updatedSpot, this.props.spot.id)
    this.setState({submitted: true})
  }

  render() {
    console.log(this.state)
    console.log(this.props)
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
                  default = {this.props.spot.name}
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
            {   this.state.submitted  && <Redirect to="/spotindex" />}
          </Form> 
      </>
    )
  }
}

export default SpotEdit