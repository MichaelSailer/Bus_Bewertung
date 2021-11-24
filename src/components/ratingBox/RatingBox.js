import React from 'react'
import PropTypes from 'prop-types'
import ReactStars from 'react-stars'


import classes from './RatingBox.module.css'
import { getRatingWording } from '../../shared/utility'


const RatingBox = (props) => {
    
 const  getRatingWording = (key,value) => {
    return props.questions[key]?.wording[value-1]
}

    return (

      <div className={classes.RatingBox}>
          <div className={classes.Rating}>
            
            <div className={classes.RatingStar}>
                <p className={classes.Label}>{props.label}</p>
                {
                      <ReactStars value={props.value} half={false}
                      className={classes.RatingStars} count={props.starAmount}
                      onChange={(rating) => props.onRatingChanged(rating)}
                      size={40}
                      color2={'#C39D50'}
                      color1={'#C7C7C7'}></ReactStars>


                }
                

                <p className={classes.RatingWording}>{getRatingWording(props.wordingKey, props.value)}</p>
            </div>
              
          </div>
          <div className={classes.Count}>{props.count}{props.total}</div>
      </div>
    )

}

RatingBox.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    starAmount: PropTypes.number,
    onRatingChanged: PropTypes.func,
    size: PropTypes.number,
    count: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    total: PropTypes.oneOfType([PropTypes.number,PropTypes.string])
}

export default RatingBox