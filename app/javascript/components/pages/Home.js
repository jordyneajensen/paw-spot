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
        <div className='carousel-container'>
            <UncontrolledCarousel className='carousel'
                items={[
                    {
                    altText: 'Slide 1',
                    caption: 'Slide 1',
                    key: 1,
                    src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80'
                    },
                    {
                    altText: 'Slide 2',
                    caption: 'Slide 2',
                    key: 2,
                    src: 'https://cf.ltkcdn.net/dogs/images/orig/284954-2121x1414-dog-and-beer.jpg'
                    },
                    {
                    altText: 'Slide 3',
                    caption: 'Slide 3',
                    key: 3,
                    src: 'https://humaneheroes.org/wp-content/uploads/2019/09/txhh_best-practices-when-taking-dog-park.png'
                    }
                ]}
            />
        </div>
            { logged_in &&
            <div className='home-walkthrough-container'>
                <img src={tutorial}/>
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