import React from 'react'
import { BinaryFeedback } from 'react-simple-user-feedback';
import classes from './ThumbFeedback.module.css'


const ThumbFeedback = (props) => {



    return (
      <div className={classes.thumb}>
            
            <p className={classes.Label}>{props.label}</p>
            <BinaryFeedback
                onPositiveClick={props.onPositiveClick}
                onNegativeClick={props.onNegativeClick}
            />
      </div>
    )

}
export default ThumbFeedback