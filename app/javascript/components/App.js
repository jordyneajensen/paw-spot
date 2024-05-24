import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import SpotIndex from './pages/SpotIndex'
import SpotShow from './pages/SpotShow'
import SpotNew from './pages/SpotNew'
import SpotEdit from './pages/SpotEdit'
import NotFound from './pages/NotFound'
import ProtectedSpotIndex from './pages/ProtectedSpotIndex'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import'./App.css'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      spots: [],
      
    }
  }

  componentDidMount(){
    this.readSpot()
  }

  readSpot = () => {
    fetch("/spots")
    .then(response => response.json())
    .then(spotsArray => this.setState({spots: spotsArray}))
    .catch(errors => console.log("Spots read errors", errors)) 
  }

  createSpot = (spot) => {
    fetch("/spots", {
      body: JSON.stringify(spot),
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST"
      
    })
    .then(response => response.json())
    .then(() => this.readSpot())
    .catch(errors => console.log("New spot Error", errors))
  }

  updateSpot = (spot, id) => {
    fetch(`/spots/${id}`,{
      body: JSON.stringify(spot),
      headers: {
        "Content-Type": "application/json"
      },
      method:"PATCH"
    })
    .then(response => response.json())
    .then(() => this.readSpot())
    .catch(errors => console.log("Update spot errors", errors))
  }

  deleteSpot = (id) => {
    fetch(`/spots/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method:"DELETE"
    })
    .then(response => response.json())
    .then(() => this.readSpot())
    .catch(errors => console.log("Delete spot errors", errors))
  }

  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props

    return (
      <BrowserRouter>
        <div className="page-container">
          <div className="content-wrap">
            <Header {...this.props}/>
                <Route exact path="/" render={() => {
                  return <Home logged_in = {logged_in} sign_in_route = {sign_in_route} new_user_route = {new_user_route} />
                }}  />
                <Route path="/spotedit/:id" render = {(props) => {
                  let id = +props.match.params.id
                  let spot = this.state.spots.find(spotObject => spotObject.id === id)
                  
                  return(
                    <SpotEdit
                      spot = {spot}
                      {...this.props}
                      updateSpot = {this.updateSpot}
                      current_user={current_user}
                    />
                  
                  )
                }} />
                <Route path="/spotindex"  render={() => <SpotIndex spots = {this.state.spots} logged_in = {logged_in} />} />

                <Route path="/myspots" render={(props) =>{
                  let mySpots = this.state.spots.filter(spot => spot.user_id === current_user.id)
                  return(
                <ProtectedSpotIndex spots={mySpots} />)}} />

              <Route path="/spotshow/:id" render={(props) => {
                let id = props.match.params.id
                let spot = this.state.spots.find(spot => spot.id === +id)
                return <SpotShow spot={spot} current_user = {this.props.current_user} deleteSpot = {this.deleteSpot} />}} />

                <Route path="/spotnew" render={() => {
                  return  <SpotNew createSpot = {this.createSpot} current_user = {this.props.current_user} />
                }} />  

                <Route path="/spotaboutus" component={AboutUs}/>

                <Route component={NotFound}/>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
