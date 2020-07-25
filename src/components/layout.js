/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, makeStyles } from "@material-ui/core"

import Header from "./header"
import Footer from "./footer"
import Logo from "../images/NIKKON.png"
import "./layout.css"

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      {/* <Header siteTitle={data.site.siteMetadata.title} classes={classes} /> */}
      <div className={classes.logoWrapper}></div>
      <Container maxWidth="lg" className={classes.container}>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f5f5f5',
  },
  logoWrapper: {
    position: 'fixed',
    top: '35.5vh',
    width: '100%',
    height: '13.4375vw',
    '&::before': {
      content: '""',
      backgroundImage: `url(${Logo})`,
      backgroundRepeat: 'repeat-x',
      backgroundSize: 'contain',
      display: 'block',
      width: '100%',
      height: '100%',
      zIndex: 0,
    }
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  white: {
    color: '#fff',
  },
}))
