import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { CssBaseline, AppBar, Toolbar, Typography, Slide, useScrollTrigger } from '@material-ui/core';

// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

const Header = ({ siteTitle, children, window, classes }) => (
  <>
    <CssBaseline />
    {/* <HideOnScroll children={children} window={window}> */}
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="h1"><Link to="/" className={classes.white}>{siteTitle}</Link></Typography>
      </Toolbar>
    </AppBar>
    {/* </HideOnScroll> */}
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  window: PropTypes.string,
  classes: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
