import firebase from '../../config/firebase';
import {ADD_TODO , CLOSE_SNACK , DELETE_TODO , UPDATE_TODO} from './constrants';
export const addTodo = (todo) => dispatch =>{

  firebase.database().ref('todos/').push(todo).then(()=>{
    if(todo){
      dispatch({
        type : ADD_TODO,
        payload : 'todo has been added'
      })
    }
  })

}

export const deleteTodo = (id) => dispatch =>{

  firebase.database().ref(`todos/${id}`).remove().then(()=>{
    dispatch({
      type : DELETE_TODO,
      payload : 'todo has been deleted'
    })
  })

}

export const updateTodo = (data) => dispatch =>{

  firebase.database().ref(`todos/${data.id}`).update(data.newTask).then(()=>{
    
      dispatch({
        type : UPDATE_TODO,
        payload : 'todo has been updated'
      })
  })

}


// export const getTodo = ()=> dispatch =>{
//     firebase.database().ref('todos/').on('value' , (snapshot)=>{
//       const todos = []
//       snapshot.forEach((snap)=>{
//         todos.push(snap)
//       })
//       dispatch({
//         type : GET_TODO,
//         payload : todos
//       })
//   })

// }


export const snackClose = () => dispatch =>{
  dispatch({
    type : CLOSE_SNACK
  })
}