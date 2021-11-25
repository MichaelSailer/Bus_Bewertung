import * as actionTypes from './actionTypes';
import Firebase from '../../db/firebase'
//constants


//sync action creators
export const sendRatingStart = () => {
    return {
        type: actionTypes.UPDATE_RECOMMENDATION_START
    }
}

export const sendRatingSuccess = (data) => {
    
    return {
        type: actionTypes.UPDATE_RECOMMENDATION_SUCCESS,
        data: data
    }
}

export const sendRatingFail = (error) => {
    return {
        type: actionTypes.UPDATE_RECOMMENDATION_FAIL,
        error: error
    }
}

export const setRatingValue = (field,value) => {
    return {
        type: actionTypes.SET_RATING_VALUE,
        field: field,
        value:value
    }
}



//async action creators
export const sendRating = (rating, history) => {
    return dispatch => {
        dispatch(sendRatingStart())
        Firebase.sendRating(rating)
        .then(res => {
            history.push("/ladingPage")
            dispatch(sendRatingSuccess(res))
        })
        .catch(err => dispatch(sendRatingFail(err)))
    }
}


