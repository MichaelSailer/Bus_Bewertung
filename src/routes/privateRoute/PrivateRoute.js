import React from 'react'
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom'

const PrivateRoutes = ({component: Component, ...rest}) => {
	let checkAuth = false;
	if(localStorage.hasOwnProperty("userLoggedTLU")) {
       if(localStorage.getItem("userLoggedTLU") !== 'null') {
         checkAuth = true; 
       }
	}
    return (
      <Route {...rest} render={(props) => ( checkAuth  ?
        <Component {...props}></Component> :
        <Redirect to="/home"></Redirect>
      )}></Route>
    )

}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps)(PrivateRoutes)
