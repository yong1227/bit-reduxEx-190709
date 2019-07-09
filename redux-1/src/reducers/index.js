import {combineReducers} from 'redux';
import '../assets/css/App.css';
import todo from './todoReducer'
import setVisible from './visibleReducer'



const todoApp = combineReducers({
    todo:todo,
    visible:setVisible
})
export default todoApp