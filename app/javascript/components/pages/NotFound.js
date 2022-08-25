import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'



class NotFound extends Component {
  
  render() {
    return (
      <>
        <div className='notFound-container'>
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="dogs running" className='notFound-img' />
          <div className='notFound-text'>
            <h1>404</h1>      
            <p className='notFound-parag'><strong>Hey, lets head back and find a place we can hang out at!</strong></p>
            <NavLink to={`/`}>
              <Button className='notFound-button'>return to home</Button>
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}

export default NotFound