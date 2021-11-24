import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../store/actions/index'

class LandingPage extends Component {

    state = {
     
    }

    render(){  
        return (
                <div>
                    <h1>Vielen Dank das Sie unseren Service Verbessern möchten!</h1>
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LandingPage))