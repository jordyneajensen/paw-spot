import React, { Component } from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
  } from "reactstrap";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <h1>The Creative Minds Behind Paw Spot</h1>
        <div>
            <Card style={{ width: '30rem' }}>
                <CardImg/>
                <CardBody>
                    <CardTitle>Corey Arnold</CardTitle>
                    <CardSubtitle>Tech Lead</CardSubtitle>
                    <CardText>About</CardText>
                </CardBody>
                <Button>Github</Button>
                <Button>LinkedIn</Button>
            </Card>

            <Card style={{ width: '30rem' }}>
                <CardImg/>
                <CardBody>
                    <CardTitle>William Segree</CardTitle>
                    <CardSubtitle>Design Lead</CardSubtitle>
                    <CardText>About</CardText>
                </CardBody>
                <Button>Github</Button>
                <Button>LinkedIn</Button>
            </Card>

            <Card style={{ width: '30rem' }}>
                <CardImg/>
                <CardBody>
                    <CardTitle>Jordyn Jensen</CardTitle>
                    <CardSubtitle>Product/Project Manager</CardSubtitle>
                    <CardText>About</CardText>
                </CardBody>
                <Button>Github</Button>
                <Button>LinkedIn</Button>
            </Card>
        </div>
      </>
    )
  }
}
