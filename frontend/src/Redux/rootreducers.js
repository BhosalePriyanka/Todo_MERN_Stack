import {combineReducers} from 'redux'
import{setitem} from '../Redux/reducers'

export const rootReducers = combineReducers({items:setitem})