
import {ADD_PERSON , CALL_OTHER} from './../types'

export const AddPerson = (data) => ({
    type: ADD_PERSON,
    payload:data
});


export const callOther = () => ({
    type: CALL_OTHER,
    
});