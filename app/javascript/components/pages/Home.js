import React, { Component } from 'react'
import {UncontrolledCarousel, Button} from 'reactstrap'
import tutorial from '../../../assets/images/paw-spot.gif'


class Home extends Component {
    
  render() {
    const {
        logged_in,
        sign_in_route,
        new_user_route
      } = this.props

    return (
      <>
        <div className='home-container'>
            <div>
                <h1 className='home-heading'>Welcome To Paw Spot!</h1>
                <p className='home-message'>
                Welcome to Paw Spot! Are your fur-babies your best friend? Do you wish you could take them more places? Paw Spot is here for you. Here at Paw Spot we are creating an app where users can post pet-friendly locations along with the ability to view other users pet posts and even search for local spots near you. Our goals are to increase waggy tails, improve pet bonding, and create fun local experiences for our users. 
                </p>
            </div>
            {!logged_in && 
                <>
                    <div className='home-buttons'>
                        <Button>
                            <a href={sign_in_route} >Sign In</a>
                        </Button>
                        <Button className='home-button-spacing'>
                            <a href={new_user_route}>Sign Up</a>
                        </Button>
                    </div>
                </>
            }
            {logged_in && 
                <>
                    <div className='home-buttons'>
                        <Button className='page-buttons'>
                            <a href='/myspots'>My Spots</a>
                        </Button>
                        <Button className='home-button-spacing'>
                            <a href='/spotindex'>View All Spots</a>
                        </Button>
                    </div>
                </>
            }
        </div>
        <div className='carousel-container'>
            <UncontrolledCarousel className='carousel'
                items={[
                    {
                    caption: 'Coffee Please',
                    key: 1,
                    src: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                    },
                    {
                    caption: 'Suns Out Tongues Out',
                    key: 2,
                    src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    },
                    {
                    caption: 'Waggy Tails',
                    key: 3,
                    src: 'https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'

                    }
                ]}
            />
        </div>
            { logged_in &&
            <div className='home-walkthrough-container'>
                <img src={tutorial}/>
                <p className='home-message'>
                    Enjoy this tutorial on Paw Spot and have fun Exploring all we have to offer! From finding pet-friendly coffee-shops to saving your favorite off-leash dog park, Paw Spot is here to inspire and create fun memories with your furbabies! 
                </p>
            </div>
        }
      </>
    )
  }
}

export default Home