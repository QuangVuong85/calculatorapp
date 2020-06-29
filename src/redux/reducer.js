import {ADD_ELEM, CLEAR, EQUAL, DELETE} from "../constants";

const initState = {
    value: 0,
    btns: ["(", ")", "Clear", "Delete", "7", "8", "9", "*", "4", "5", "6", "/", "1", "2", "3", "+", ".", "0", "=", "-"],
    //....
};

const calculatorReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ELEM:
            return {
                ...state,
                value: state.value == 0 ? action.text : state.value + action.text
            }
        case DELETE:
            return {
                ...state,
                value: action.text.substr(0, action.text.length - 1)
            }
        case CLEAR:
            return {
                ...state,
                value: 0
            }
        case EQUAL:
            return {
                ...state,
                value: eval(action.value)
            }
        default:
            return state;
    }
};

export default calculatorReducer;