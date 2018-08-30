import React, { Component } from 'react';
import 
{Input , Button, InputLabel , FormHelperText ,FormControl} 
from '@material-ui/core';
import './form.css'
import {connect} from 'react-redux';
import {addTodo} from '../store/actions/todoActions';
export class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      task : ''
    }
  }

  onChange = (e) => this.setState({task : e.target.value})
  sendTodo = ()=>{
    const todo ={
      task : this.state.task
    }
    this.props.addTodo(todo)
    this.setState({
      task : ''
    })
  }
  render() {
    return (
      <div className = "form"  >
      <div className = "form_input" >
        <FormControl >
          <InputLabel htmlFor="name-simple">Enter your task</InputLabel>
            <Input 
            type = "text"
            name = "task"
            value = {this.state.task}
            onChange = {this.onChange}
            style = {{width : '500px'}}  />
            <br/>
            <Button
            onClick = {this.sendTodo}
            variant="contained" color="primary">
            ADD
            </Button>
        </FormControl>
        </div>
      </div>
    )
  }
}

export default connect(null , {addTodo})(UserInput)
