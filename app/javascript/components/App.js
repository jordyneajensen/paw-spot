import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SpotIndex from './pages/SpotIndex'
import SpotShow from './pages/SpotShow'
import SpotNew from './pages/SpotNew'
import SpotEdit from './pages/SpotEdit'
import NotFound from './pages/NotFound'
import ProtectedSpotIndex from './pages/ProtectedSpotIndex'
import {
  BrowserRouter as Router,
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

  render () {
    const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
    } = this.props

    return (
      <Router>
         <Header />
         <Switch>
            <Route exact path="/" render={() => {
              return <Home logged_in = {logged_in} sign_in_route = {sign_in_route} new_user_route = {new_user_route} />
            }}  />
            <Route path="/spotindex"  render={() => <SpotIndex spots = {this.state.spots} logged_in = {logged_in} />} />
            <Route path="/spotshow"  component={SpotShow} />
            <Route path="/myspots" component={ProtectedSpotIndex} />
            <Route path="/spotnew" component={SpotNew} />
            <Route path="/spotedit" component={SpotEdit} />
            <Route component={NotFound}/>
         </Switch>
         <Footer />
        </Router>
    );
  }
}

export default App
