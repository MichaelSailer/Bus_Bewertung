import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../store/actions/index'
import Header from '../..//components/header/Header';
import RatingBox from '../../components/ratingBox/RatingBox';
import {getTheQuestion, objectArrayConverter, setValue, updateRatingField} from '../../shared/utility'
import classes from './Questions.module.css'
import SendBtn from '../../components/buttons/sendBtn/SendBtn'

class Questions extends Component {

    state = {
        value: 0,
        questions: [],
        endVoting: [],
    }

    componentDidMount = () => {
        
    }

    onRatingChange = (question,rating) => {
        this.props.onSetRating(question, rating)        
    }

    sendRating = () => {
        
        this.props.onSetQuestionRating(this.props.questions.questions)
    }

   

    render(){  
        return (
                <div>
                    <Header></Header>
                    {
                        objectArrayConverter(this.props.questions?.questions).map((el,index) => {
                            
                            return(
                            <div className={classes.ratingBox}>
                                <RatingBox
                                key={el.key}
                                starAmount={el.amoutOfStars}
                                label={el.question}
                                onRatingChanged={(value) => this.onRatingChange(el.key,value)}
                                value={el.value}
                                ratingKey={el.key}
                                wording={el.wording}
                                >
                                
                                </RatingBox>
                            </div>)
                        })
                    }
                    <SendBtn onAction={() => this.sendRating()}></SendBtn>
                    

                </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetQuestionRating: (rating) => dispatch(actions.sendRating(rating)),
        onSetRating: (field,value) => dispatch(actions.setRatingValue(field,value))
    }
}
const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Questions)