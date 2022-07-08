import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

// excecute reducer
import executedReducer from '../features/costEstimation/costestimation'

export const appReducer = combineReducers({

  category: executedReducer,

})
