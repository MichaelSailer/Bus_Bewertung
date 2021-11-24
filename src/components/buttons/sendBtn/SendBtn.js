import React from 'react'
import classes from './SendBtn.module.css'

const SendBtn = (props) => {

    return (
      <div className={classes.SendBtn}>
          <button onClick={props.onAction}> Bewertung Absenden </button>
      </div>
    )

}
export default SendBtn