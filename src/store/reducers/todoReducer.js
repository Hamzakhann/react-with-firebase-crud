import {ADD_TODO, DELETE_TODO , UPDATE_TODO} from '../actions/constrants';
import {CLOSE_SNACK} from '../actions/constrants';
const InitialState = {
  snack : false,
  snackMessage : '',
  todos : []
}


const todoReducer = (state = InitialState , action) =>{

  switch(action.type){
    case UPDATE_TODO:
        return {
          ...state,
          snack : true,
          snackMessage : action.payload
        }
    case DELETE_TODO:
          return{
            ...state,
            snack : true,
            snackMessage : action.payload    
          }
    case ADD_TODO:
        return{
          ...state,
          snack : true,
          snackMessage : action.payload
        }
    case CLOSE_SNACK:
          return{
            ...state,
            snack : false,
            snackMessage : ""
          }
    default:
        return state
  }

}


export default todoReducer;