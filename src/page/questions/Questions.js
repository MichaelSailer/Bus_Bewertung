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
        this.setState({questions: objectArrayConverter(this.props.questions.questions)})
    }

    onRatingChange = (question,rating) => {
        console.log(this.state.questions)
        this.props.onSetRating(this.state.questions, question, rating)        
        this.setState({questions: objectArrayConverter(this.props.questions.questions)})
        this.setState({value: rating})
        console.log(this.state.questions)
    }

    sendRating = () => {
        let endVoting = []
        this.state.questions.map(question => {
            endVoting.push({question: question.key, rating: question.value})
        })

        this.props.onSetQuestionRating(endVoting)
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
                                starAmount={el.amoutOfStars}
                                label={el.question}
                                onRatingChanged={(value) => this.onRatingChange(index,value)}
                                value={el.value}
                                ratingKey={el.key}
                                questions={this.state.questions}
                                wordingKey={index}
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
        onSetQuestionRating: (field,value) => dispatch(actions.sendRating(field,value)),
        onSetRating: (question,field,value) => dispatch(actions.setRatingValue(question,field,value))
    }
}
const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Questions)