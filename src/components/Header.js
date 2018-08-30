import React from 'react'
import {AppBar , Toolbar , Typography} from '@material-ui/core';
const Header = () => {
  return (
    <div>
     <AppBar position="static" >
        <Toolbar>
          <Typography variant="title" color="inherit">
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
