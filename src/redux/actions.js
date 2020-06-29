import {CLEAR, ADD_ELEM, EQUAL, DELETE} from "../constants";

export const addElem = (text) => {
    return {
        type: ADD_ELEM,
        text
    }
};

export const del = (text) => {
    return {
        type: DELETE,
        text
    }
};

export const clear = () => {
    return {
        type: CLEAR,
    }
};

export const equal = (value) => {
    return {
        type: EQUAL,
        value
    }
};