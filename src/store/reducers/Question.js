import { getTheQuestion, updateObject, updateRatingField } from '../../shared/utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    questions : {
        frage_1: {question:"Sind Sie mit unserem Verkehrsangebot zufrieden?", value:0, wording:["Nein","Ja"],amoutOfStars:2},
        frage_2: {question:"Ist das Reisegefühl angenehm und fühlen Sie sich sicher? ", value:0, wording:["Nein","Ja"],amoutOfStars:2},
        frage_3: {question:"Wie gut war der Fahrstil des Fahres?", value:0, wording:["Sehr schlecht", "Schlecht","Befriedigend", "Gut","Sehr gut"],amoutOfStars:5},
        frage_4: {question:"Entspricht die Ausstattung und Sauberkeit des Fahrzeug Ihren Vorstellungen?", value:0, wording:["Sehr schlecht", "Schlecht","Befriedigend", "Gut","Sehr gut"],amoutOfStars:5},
        frage_5: {question:"Wie ist die Sauberkeit des Fahrzeuges?", value:0, wording:["Sehr Schmutzig","Schmutzig", "Normal","Sauber", "Sehr sauber"], amoutOfStars: 5},
        frage_6: {question:"Wie oft nehmen Sie die Öffis her?", value:0, wording:["Nie", "Selten","Manchmal", "Oft","Sehr oft"],amoutOfStars:5,}
    },
    loading: false,
    error: null

}

const setVotingValueStart = (state,action) => {
    return updateObject(state, {loading:true, error: null})
}

const setVotingValueSuccess = (state,action) => {
    return updateObject(state, {loading:false, error: null})
}

const setVotingValueFail = (state,action) => {
    return updateObject(state, {loading:false, error: action.err})
}

const setValue = (state,action) => {    
    //return updateObject(state, {questions: updateRatingField(action.question, action.field, action.value), loading:true})
    return updateObject(state, {questions: updateObject(state.questions,{[action.field]: updateObject(state.questions[action.field],{
        value: action.value
    })})})
}

const getQuestion = (state, action) => {
    return updateObject(state, {loading: false})
}


const QuestionReducer =  (state = initialState, action) => {
    switch (action.type) {

        case(actionTypes.UPDATE_RECOMMENDATION_START) : return setVotingValueStart(state,action)
        case(actionTypes.UPDATE_RECOMMENDATION_SUCCESS) : return setVotingValueSuccess(state,action)
        case(actionTypes.UPDATE_RECOMMENDATION_FAIL) : return setVotingValueFail(state,action)
        case(actionTypes.SET_RATING_VALUE) : return setValue(state,action)
        case(actionTypes.SET_RATING_VALUE_FINISH) : return getTheQuestion(state,action)
        

    default:
        return state
    }
}

export default QuestionReducer