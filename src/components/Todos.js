import React, { Component } from 'react';
import './todo.css';
import {connect} from 'react-redux';
import firebase from '../config/firebase';
import {Snackbar ,Button , Dialog, TextField, DialogActions} from '@material-ui/core';
import {snackClose , deleteTodo , updateTodo } from '../store/actions/todoActions';

import TodoItem from './TodoItem';
class Todos extends Component{
  constructor(props){
    super(props)
    this.state = {
      dialogOpen : false,
      dialogField : "",
      open: false,
      vertical: 'bottom',
      horizontal: 'right',
      items : []
    }
  }

  handleClickOpen = (data) => {
    this.setState({ dialogOpen: true , dialogField : data.task , todoId : data.id });
  };

  updateClick = ()=>{
    const data = {id : this.state.todoId , newTask : {task : this.state.dialogField}}
    this.props.updateTodo(data)
    this.setState({dialogOpen  : false , todoId : '' , dialogField : ''})
  }

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };
  componentWillReceiveProps(nextProps){
    if(nextProps.snack){
      this.setState({
        open : true
      })
      setTimeout(()=>{
        this.props.snackClose()
        this.setState({ open: false });
      },2000)
    }
  }

  componentDidMount(){
    firebase.database().ref('todos/').on('value' , (snapshot)=>{
      let items = snapshot.val();
      let newState = []
      for (let item in items){
        newState.push({
          id : item,
          task : items[item].task
        })
      }
      this.setState({
        items : newState
      })

    })
  }

render(){
  const {open , vertical , horizontal} = this.state
  return (
    <div className = 'todo_container' >
   <h1 style= {{textAlign : 'center'}} >Tasks</h1>
    <div className = "layer" ></div>
    {this.state.items.map((item) =>{
      return <TodoItem
      dialogClick  = {this.handleClickOpen}
      todoUid = {item.id} 
      deleteTodo = {this.props.deleteTodo} 
      key = {item.id} task = {item.task} 
      updateTodo = {this.props.updateTodo}
      />
    })}
      <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.snackMessage}</span>}
        />
    <div>
    <Dialog
    
          maxWidth = 'md'
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
    >
    <TextField
              autoFocus
              margin="dense"
              value = {this.state.dialogField}
              id="name"
              label="Enter your updated task"
              onChange = {(e)=> this.setState({dialogField : e.target.value})}
              
      />
       <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateClick} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
    </div>
    </div>
  )

}
  
}
const mapStateToProps = (state) =>({
snack : state.todos.snack,
snackMessage : state.todos.snackMessage,

})

export default connect(mapStateToProps , {updateTodo ,snackClose , deleteTodo })(Todos)
