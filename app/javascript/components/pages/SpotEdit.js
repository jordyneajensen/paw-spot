import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import { Form, FormGroup, Input, Label, Fade } from "reactstrap";

class SpotEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedSpot: {
        name: "",
        street:  "",
        city:  "",
        state:  "",
        zip:  "",
        description:  "",
        category:  "",
        image:  "",
        user_id: "",
      },

      submitted: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.spot !== prevProps.spot) {
      this.setState({
        updatedSpot: {
          name: this.props.spot.name,
          street: this.props.spot.street,
          city: this.props.spot.city,
          state: this.props.spot.state,
          zip: this.props.spot.zip,
          description: this.props.spot.description,
          category: this.props.spot.category,
          image: this.props.spot.image,
          user_id: this.props.spot.user_id,
        },
      });
    }
  }

  handleChange = (e) => {
    const { updatedSpot } = this.state;
    updatedSpot[e.target.name] = e.target.value;
    this.setState({ updatedSpot: updatedSpot });
  };

  handleSubmit = () => {
    this.props.updateSpot(this.state.updatedSpot, this.props.spot.id);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h1>Edit Pet Spot</h1>
        <Fade className="edit-formbody">
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input className="form-input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.updatedSpot.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input className="form-input"
                type="text"
                name="street"
                onChange={this.handleChange}
                value={this.state.updatedSpot.street}
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input className="form-input"
                type="text"
                name="city"
                onChange={this.handleChange}
                value={this.state.updatedSpot.city}
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input className="form-input"
                type="text"
                name="state"
                onChange={this.handleChange}
                value={this.state.updatedSpot.state}
              />
            </FormGroup>
            <FormGroup>
              <Label for="zip">Zip</Label>
              <Input className="form-input"
                type="text"
                name="zip"
                onChange={this.handleChange}
                value={this.state.updatedSpot.zip}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input className="form-input"
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.updatedSpot.description}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input type="select" name="category" onChange={this.handleChange} className="form-input">
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
                value={this.state.updatedSpot.image}
              />
            </FormGroup>
          <div className='edit-button'>
            <Button className="form-button" name="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </div>
          </Form>
        </Fade>

        {this.state.submitted && <Redirect to="/spotindex" />}
      </>
    );
  }
}

export default SpotEdit;
