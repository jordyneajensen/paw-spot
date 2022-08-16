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
  render () {
    return (
      <Router>
         <Header />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/spotindex"  component={SpotIndex} />
            <Route path="/spotshow"  component={SpotShow} />
            <Route path="/mySpots" component={ProtectedSpotIndex} />
            <Route path="/apartmentnew" component={SpotNew} />
            <Route path="/apartmentedit" component={SpotEdit} />
            <Route component={NotFound}/>
         </Switch>
         <Footer />
        </Router>
    );
  }
}

export default App
