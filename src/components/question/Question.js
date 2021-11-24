import React from 'react'
import RatingBox from '../ratingBox/RatingBox'

const Question = (props) => {

    return (
      <div>
          <h3>{props.question}</h3>
            <RatingBox
            
            ></RatingBox>
      </div>
    )

}
export default Question