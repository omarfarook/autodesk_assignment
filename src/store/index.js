import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { ToastReducer } from '../components/toaster/reducer'

const reducer = combineReducers({
  form: reduxFormReducer,
  ToastReducer
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;