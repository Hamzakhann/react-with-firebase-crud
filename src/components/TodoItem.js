import React from 'react'
import 
{Paper , IconButton , 
Icon, Typography
} from 
'@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './todo.css';
const TodoItem = (props) => {
  return (
    <div>
     <Paper className = "todo"  elevation={1}>
     <div  style={{ display: 'inline-flex' }} >
        <Typography style = {{textAlign : 'center' , padding : '10px'}} component="p">
        {props.task}
        </Typography>
        <IconButton 
        onClick = {()=> props.dialogClick({id : props.todoUid , task : props.task})}
        aria-label="Edit">
        <Icon>edit_icon</Icon>
      </IconButton>
      <IconButton onClick = {()=>props.deleteTodo(props.todoUid)}  aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      </div>
      </Paper>
    </div>
  )
}

export default TodoItem
