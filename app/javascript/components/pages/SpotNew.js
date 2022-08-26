import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Form, FormGroup, Input, Label, Fade} from 'reactstrap'

class SpotNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newSpot: {
        name:"",
        street: "",
        city: "",
        state: "",
        zip:"",
        description:"",
        category:"",
        image: "",
        user_id: this.props.current_user.id
      },
      submitted : false
    }
  }

  handleChange = (e) => {
  
    let {newSpot} = this.state
    newSpot[e.target.name] = e.target.value
    this.setState({newSpot: newSpot})
  }
  
  handleSubmit = () => {
    this.props.createSpot(this.state.newSpot)
    this.setState({submitted: true})
  }

  render() {
    return (
      <>
        <h1>New Pet Spot</h1>
        <Fade className="edit-formbody">
          <Form className='form-spacing'>
            <FormGroup>
                  <Label for="name">Name</Label>
                    <Input className="form-input"
                      type="text"
                      name="name"
                      onChange = {this.handleChange}
                      value = {this.state.newSpot.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="street">Street</Label>
                    <Input className="form-input"
                      type="text"
                      name="street"
                      onChange = {this.handleChange}
                      value = {this.state.newSpot.street}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="city">City</Label>
                    <Input className="form-input"
                      type="text"
                      name="city"
                      onChange = {this.handleChange}
                      value = {this.state.newSpot.city}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="state">State</Label>
                    <Input className="form-input"
                      type="text"
                      name="state"
                      onChange={this.handleChange}
                      value={this.state.newSpot.state}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="zip">Zip</Label>
                    <Input className="form-input"
                      type="text"
                      name="zip"
                      onChange={this.handleChange}
                      value={this.state.newSpot.zip}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                    <Input className="form-input"
                      type="text"
                      name="description"
                      onChange={this.handleChange}
                      value={this.state.newSpot.description}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="category">Category</Label>
                    <Input className="form-input" type="select" name="category" onChange={this.handleChange}>
                    <option>Bar</option>
                    <option>Coffee</option>
                    <option>Beach</option>
                    <option>Park</option>
                    <option>Resturaunt</option>
                    <option>Retail</option>
                  </Input>
              </FormGroup>
                <FormGroup>
                  <Label for="image">Image</Label>
                    <Input className="form-input"
                      type="text"
                      name="image"
                      onChange={this.handleChange}
                      value={this.state.newSpot.image}
                  />
                </FormGroup>
                <div className='new-button'>
                  <Button className="form-button"
                    name="submit"
                    onClick={this.handleSubmit}>
                    Submit
                  </Button >
                </div>
                {   this.state.submitted  && <Redirect to="/spotindex" />}
          </Form> 
        </Fade>
      </>
    )
  }
}

export default SpotNew