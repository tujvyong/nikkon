import React from 'react'
import { makeStyles, Typography, Box, Paper } from '@material-ui/core'

const Footer = () => {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.root} square>
      <Typography variant="body2" color="inherit" align="center">
        {'Copyright © '}
        {new Date().getFullYear() + ' '}
        Nikkon International. all rights reserved.
      </Typography>
    </Paper>
  )
}

export default Footer

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(3),
    color: '#fff',
  }
}))
