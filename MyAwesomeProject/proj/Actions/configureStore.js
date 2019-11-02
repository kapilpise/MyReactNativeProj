import {createStore, applyMiddleware} from 'redux'
import app from '../Reducers'
import thunk from 'redux-thunk'

export default function configureStore(){
    console.log("In configureStore->", "")
    let store = createStore(app,applyMiddleware(thunk))
    return store
}