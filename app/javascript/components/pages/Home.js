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
      <div>
        <h1>Welcome!</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {!logged_in && 
            <>
                <Button>
                    <a href={sign_in_route} >Sign In</a>
                </Button>
                <Button>
                    <a href={new_user_route}>Sign Up</a>
                </Button>
            </>
        }
         {logged_in && 
            <>
                <Button>
                    <a href='/myspots'>My Spots</a>
                </Button>
                <Button>
                    <a href='/spotindex'>View All Spots</a>
                </Button>
            </>
        }
      </div>
      { logged_in &&
        <div>
            <img src=" https://media.istockphoto.com/vectors/coming-soon-lettering-coming-soon-for-promotion-advertisement-sale-vector-id1221240925?k=20&m=1221240925&s=612x612&w=0&h=HX77CIwJ34u7qUMpI_W5z4dDnEbHGv66mGXVTpIccv8=" default="tutorial"/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

        </div>
    }

        
        <UncontrolledCarousel
            items={[
                {
                altText: 'Slide 1',
                caption: 'Slide 1',
                key: 1,
                src: 'https://picsum.photos/id/123/1200/600'
                },
                {
                altText: 'Slide 2',
                caption: 'Slide 2',
                key: 2,
                src: 'https://picsum.photos/id/456/1200/600'
                },
                {
                altText: 'Slide 3',
                caption: 'Slide 3',
                key: 3,
                src: 'https://picsum.photos/id/678/1200/600'
                }
            ]}
        />
        
      </>
    )
  }
}

export default Home