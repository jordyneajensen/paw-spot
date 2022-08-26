import React, { Component } from 'react'
import {UncontrolledCarousel, Button} from 'reactstrap'


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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <UncontrolledCarousel
                items={[
                    {
                    altText: 'Slide 1',
                    caption: 'Slide 1',
                    key: 1,
                    src: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                    },
                    {
                    altText: 'Slide 2',
                    caption: 'Slide 2',
                    key: 2,
                    src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    },
                    {
                    altText: 'Slide 3',
                    caption: 'Slide 3',
                    key: 3,
                    src: 'https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'
                    }
                ]}
            />
            { logged_in &&
            <div className='home-container'>
                <img src=" https://media.istockphoto.com/vectors/coming-soon-lettering-coming-soon-for-promotion-advertisement-sale-vector-id1221240925?k=20&m=1221240925&s=612x612&w=0&h=HX77CIwJ34u7qUMpI_W5z4dDnEbHGv66mGXVTpIccv8=" default="tutorial"/>
                <p className='home-message'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        }
      </>
    )
  }
}

export default Home