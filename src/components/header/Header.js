import React from 'react'
import postbus from '../../assets/logo_post.svg'
import oetztal from '../../assets/logo_oetztal.svg'
import classes from './Header.module.css'

const Header = (props) => {

    return (
      <div className={classes.header}>
          <div className={classes.logo}>
            <img src={oetztal} width="400px"/>
            <h1>Helfen Sie uns unseren Service zu verbessern</h1>
          </div>
          
      </div>
    )

}
export default Header