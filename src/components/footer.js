import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const Footer = () => {
  const classes = useStyles()

  return (
    <Typography variant="body2" color="inherit" align="center">
      {'Copyright © '}
      {new Date().getFullYear() + ' '}
      Nikkon International. all rights reserved.
    </Typography>
  )
}

export default Footer

const useStyles = makeStyles(theme => ({

}))
