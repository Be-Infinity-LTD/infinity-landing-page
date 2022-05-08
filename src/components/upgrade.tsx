import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      padding: '40px',
      paddingBottom: '100px',
      paddingTop: '200px',
    },
    texttitle: {
      marginBottom: '30px',
      color: 'black',
      fontSize: '35px',
      textAlign: 'center',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 600,
      textShadow: '0px 0px 10px rgb(0 0 0 / 50%)',
      textTransform: 'uppercase',
      letterSpacing: '10px',
    },
    textcontent: {
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '20px',
      fontWeight: 600,
      textAlign: 'center',
    },
    imgdiv: {
      display: 'flex',
      justifyContent: 'center',
    },
    imgupgrade: {
      height: '500px',
    },

    [theme.breakpoints.down(500)]: {
      root: {
        padding: '18px',
        paddingTop: '200px',
      },
      texttitle: {
        fontSize: '30px',
      },
      textcontent: {
        fontSize: '18px',
      },
    },
  }),
)

export default function Upgrade() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <span className={classes.texttitle}>Planned Maintenance.</span>
      <span className={classes.textcontent}>
        We are currently moving during planned Maintenance, please check in later.
      </span>
      <div className={classes.imgdiv}>
        <img src="/img/upgrade.jpg" className={classes.imgupgrade} alt="image" />
      </div>
    </div>
  )
}
