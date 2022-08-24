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
  import Jordyn from '../../../assets/images/Jordyn.JPG'

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <h1>The Creative Minds Behind Paw Spot</h1>
        <div className='cards-container'>
            <Card style={{ width: '30rem' }}>
                <CardImg/>
                <CardBody>
                    <CardTitle className='about-title'>Corey Arnold</CardTitle>
                    <CardSubtitle className='about-subtitle'>Tech Lead</CardSubtitle>
                    <CardText>About</CardText>
                </CardBody>
                <Button><a href='https://github.com/arnoldc94' target='_blank' rel='noopener noreferrer'>Github</a></Button>
                <Button><a href='https://www.linkedin.com/in/corey-arnold-744391207/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></Button>
            </Card>

            <Card style={{ width: '30rem' }}>
                <CardImg/>
                <CardBody>
                    <CardTitle className='about-title'>William Segree</CardTitle>
                    <CardSubtitle className='about-subtitle'>Design Lead</CardSubtitle>
                    <CardText>About</CardText>
                </CardBody>
                <Button><a href='https://github.com/wasegree' target='_blank' rel='noopener noreferrer'>Github</a></Button>
                <Button><a href='https://www.linkedin.com/in/williamsegree/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></Button>
            </Card>

            <Card className='about-card' style={{ width: '30rem' }}>
                <CardImg src={Jordyn}/>
                <CardBody>
                    <CardTitle className='about-title'>Jordyn Jensen</CardTitle>
                    <CardSubtitle className='about-subtitle'>Product/Project Manager</CardSubtitle>
                    <CardText>Full-Stack Software Developer transitioning from a career in nursing with a passion for innovation, creativity, and analysis. Seeking to contribute to a team through problem-solving, task-prioritization, and project management. I believe in approaching life with out-of-the-box thinking and am always working towards big goals. In order to have success, you have to be willing to go against the grain and stretch yourself.</CardText>
                </CardBody>
                <Button><a href='https://github.com/jordyneajensen' target='_blank' rel='noopener noreferrer'>Github</a></Button>
                <Button><a href='https://www.linkedin.com/in/jordyneajensen/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></Button>
            </Card>
        </div>
      </>
    )
  }
}
