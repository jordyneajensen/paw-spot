import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log(sign_out_route)
    return (
      <>
        <Nav className={"header"}>
          {/* Home page link for all users */}
          {
            <NavItem>
              <a href='/' id='home' className="nav-link">Home</a>
            </NavItem>
          }
          
          {/* About link for all users */}
          {
            <NavItem>
              <a href='/spotabout' className="nav-link">About</a>
            </NavItem>
          }

          {/* Spot index(unprotected) link for all users */}
          {!logged_in &&
            <NavItem>
              <a href='/spotindex' className="nav-link">Recent Spots</a>
            </NavItem>
          }

          {/* Spot index(protected) link for logged in users */}
          {logged_in &&
          <NavItem>
            <a href='/spotindex' className="nav-link">View All Spots</a>
          </NavItem>
          }

          {/* Sign in link for users not logged in */}
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }

          {/* Sign up link for not logged in users */}
          {!logged_in &&
            <NavItem className="last-item">
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }

          {/* My Spots link for logged in user */}
          {logged_in &&
            <NavItem>
              <a href='/myspots' className="nav-link">My Spots</a>
            </NavItem>
          }

          {/* New Spot link for logged in user */}
          {logged_in &&
            <NavItem>
              <a href='/spotnew' className="nav-link">Add Spot</a>
            </NavItem>
          }

          {/* Sign out link for logged in users */}
          {logged_in &&
            <NavItem className="last-item">
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
        </Nav>
      </>
    )
  }
}

  


export default Header