import {
  TOASTER_INTERVAL,
  TOGGLE_ON_TOAST,
  TOGGLE_OFF_TOAST} from '../../constant'

const toggleOnToaster = (message) => {
    return { type: TOGGLE_ON_TOAST, value: message }
  }

  const toggleOffToaster = () => {
    return { type: TOGGLE_OFF_TOAST}
  }

  export const toasterToggler = (message) => (dispatch) => {
    if(!!message) {
        dispatch(toggleOnToaster(message))
        setTimeout(() => {
            dispatch(toggleOffToaster())
        }, TOASTER_INTERVAL)
    }
  }