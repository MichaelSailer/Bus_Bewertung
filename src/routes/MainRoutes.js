import React, { Component } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import PrivateRoute from './privateRoute/PrivateRoute'

import Question from '../page/questions/Questions'
import LandingPage from '../page/landingPage/LandingPage'

class MainRoutes extends Component {
  
     

    render(){
      let redirect = "home"
        return (
          <Switch>
              <Route path="/home" component={Question}></Route>
              <Route path="/ladingPage" component={LandingPage}></Route>
              <Redirect from="/" to={redirect}></Redirect>
          </Switch>
        )
    }
}
const mapStateToProps = state => {
    return {

    }
}


export default withRouter(connect(mapStateToProps)(MainRoutes))
