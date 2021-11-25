import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../store/actions/index'
import classes from './LandingPage.module.css'
import logo from '../../assets/logo_oetztal.svg'

class LandingPage extends Component {

    state = {
     
    }

    render(){  
        return (
                <div className={classes.Text}>
                    <h1>Vielen Dank, dass Sie unser Service verbessern möchten!</h1>
                    <h2>Haben Sie noch einen schönen Tag!</h2>
                    <h4>Wünscht die Ötztaler Verkehrsgesellschaft</h4>
                    <img src={logo}></img>
                </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LandingPage)