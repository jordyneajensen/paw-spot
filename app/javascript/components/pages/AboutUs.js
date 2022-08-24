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
        <div className='cards-container'>
            <Card style={{ width: '30rem' }}>
                <CardImg/>
                <CardBody>
                    <CardTitle>Corey Arnold</CardTitle>
                    <CardSubtitle>Tech Lead</CardSubtitle>
                    <CardText>About</CardText>
                </CardBody>
                <Button><a href='https://github.com/arnoldc94' target='_blank' rel='noopener noreferrer'>Github</a></Button>
                <Button><a href='https://www.linkedin.com/in/corey-arnold-744391207/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></Button>
            </Card>

            <Card style={{ width: '30rem' }}>
                <CardImg/>
                <CardBody>
                    <CardTitle>William Segree</CardTitle>
                    <CardSubtitle>Design Lead</CardSubtitle>
                    <CardText>About</CardText>
                </CardBody>
                <Button><a href='https://github.com/wasegree' target='_blank' rel='noopener noreferrer'>Github</a></Button>
                <Button><a href='https://www.linkedin.com/in/williamsegree/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></Button>
            </Card>

            <Card style={{ width: '30rem' }}>
                <CardImg/>
                <CardBody>
                    <CardTitle>Jordyn Jensen</CardTitle>
                    <CardSubtitle>Product/Project Manager</CardSubtitle>
                    <CardText>About</CardText>
                </CardBody>
                <Button><a href='https://github.com/jordyneajensen' target='_blank' rel='noopener noreferrer'>Github</a></Button>
                <Button><a href='https://www.linkedin.com/in/jordyneajensen/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></Button>
            </Card>
        </div>
      </>
    )
  }
}
