import React from "react"
import { Link } from "gatsby"
import clsx from 'clsx'
import { makeStyles, Container, Typography, Grid, Box, Paper } from "@material-ui/core"

import Hero from "../images/hero.jpg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SignIn from "../components/form"

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />

      <Grid container className={classes.fullContainer}>
        <Grid container item md={6} justify="center" alignItems="center">
          <Box>
            <Typography component="h1" variant="h4" className={classes.titleText}>キャッチコピー<br />ここにあり</Typography>
            <Typography component="h2" variant="h4" color="secondary" className={classes.titleText}>いい感じの<br />言葉を紡いでいく</Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <div className={classes.hero}>
            <img src={Hero} alt="Hero" />
          </div>
        </Grid>
      </Grid>

      <Paper className={classes.contentWithTop}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <div className={classes.cardShape}>
              <Typography variant="body2" component="span" color="primary" display="block">Concept</Typography>
              <Typography variant="h5" component="h2" color="secondary" paragraph className={classes.titleText}>コンセプト</Typography>
              <Typography variant="body1">もし嘉納さんを承諾道そう所有へするなけれ絵その自分あなたか所有へというご増減んべくたうので、その直接は私か飯道に好かから、大森さんのので教師の私をよくお出入りとするから誰心にお内約が云いようにおそらくお発達をしないないから、いやしくも一々談判でしなばいですのに間違ったです。</Typography>
            </div>
          </Grid>
          <Grid item md={6}>
            <Image filename="n_front.jpg" alt="front" />
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.contentLeft}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Image filename="n_front.jpg" alt="front" />
          </Grid>
          <Grid item md={6}>
            <div className={classes.cardShape}>
              <Typography variant="body2" component="span" color="primary" display="block">Concept</Typography>
              <Typography variant="h5" component="h2" color="secondary" paragraph className={classes.titleText}>コンセプト</Typography>
              <Typography variant="body1">もし嘉納さんを承諾道そう所有へするなけれ絵その自分あなたか所有へというご増減んべくたうので、その直接は私か飯道に好かから、大森さんのので教師の私をよくお出入りとするから誰心にお内約が云いようにおそらくお発達をしないないから、いやしくも一々談判でしなばいですのに間違ったです。</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.contentRight}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <div className={classes.cardShape}>
              <Typography variant="body2" component="span" color="primary" display="block">Concept</Typography>
              <Typography variant="h5" component="h2" color="secondary" paragraph className={classes.titleText}>コンセプト</Typography>
              <Typography variant="body1">もし嘉納さんを承諾道そう所有へするなけれ絵その自分あなたか所有へというご増減んべくたうので、その直接は私か飯道に好かから、大森さんのので教師の私をよくお出入りとするから誰心にお内約が云いようにおそらくお発達をしないないから、いやしくも一々談判でしなばいですのに間違ったです。</Typography>
            </div>
          </Grid>
          <Grid item md={6}>
            <Image filename="n_front.jpg" alt="front" />
          </Grid>
        </Grid>
      </Paper>

      <SignIn />
      {/* <div
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        className={classes.diagonal}
      ></div> */}
      {/* <div style={{ position: 'relative' }}>
        <div
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          className={classes.diagonal}>
        </div>
      </div> */}

    </Layout >
  )
}


export default IndexPage

const useStyles = makeStyles(theme => ({
  fullContainer: {
    width: '100vw !important',
    margin: '0 calc(50% - 50vw)',
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }
  },
  titleText: {
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.6,
    letterSpacing: '6px',
  },
  diagonal: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '300px',
    transform: 'skewY(-5deg)',
    backgroundColor: theme.palette.secondary.main,
    zIndex: -1,
  },
  white: {
    color: '#fff',
  },
  cardShape: {
    padding: theme.spacing(3),
  },
  contentWithTop: {
    width: '100%',
    padding: '290px calc((50vw - 50%) * 2) 180px calc(50vw - 50%)',
    margin: '-100px calc(50vw - 50%) 80px',
  },
  contentLeft: {
    width: '100%',
    padding: '180px calc(50vw - 50%) 180px calc((50vw - 50%) * 2)',
    margin: '0 calc(50% - 50vw) 80px',
  },
  contentRight: {
    width: '100%',
    padding: '180px calc((50vw - 50%) * 2) 180px calc(50vw - 50%)',
    margin: '0 calc(50vw - 50%) 80px',
  }
}))
