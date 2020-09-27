
import {
    TOGGLE_ON_TOAST,
    TOGGLE_OFF_TOAST} from '../../constant'

const initialState = {
    isToastOn: false,
    toastMsg: ''
};

export const ToastReducer = (state = initialState, action) =>{
    switch (action.type) {
        case TOGGLE_ON_TOAST:
            return { ...state, isToastOn: true, toastMsg: action.value };
        case TOGGLE_OFF_TOAST:
            return { ...initialState };
        default:
            return state;
    }
}