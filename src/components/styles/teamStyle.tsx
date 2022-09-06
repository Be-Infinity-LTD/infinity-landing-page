import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    host: {
      backgroundImage: 'url(./img/landing/teams/back.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
    },
    hostDesc: {
      display: 'flex',
      justifyContent: 'left',
      padding: '5% 0px 8% 5%',
    },
    hostTitle: {
      color: '#6604d3',
      fontSize: '27px',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 700,
      paddingRight: '50px',
    },
    hostPos: {
      color: '#79c3f4',
      fontSize: '15px',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 500,
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    hostName: {
      padding: '5% 0px 2% 6%',
      color: 'rgb(139, 200, 247)',
      fontSize: '20px',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    hostContent: {
      color: '#608dfd',
      fontSize: '18px',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 700,
      padding: '0% 0px 5% 6%',
      width: '50%',
    },
    hostSpec: {
      paddingLeft: '6%',
      paddingBottom: '10%',
      display: 'flex',
      position: 'relative',
    },
    hostLead: {
      width: '120px',
      height: '120px',
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginRight: '5%',
      boxShadow: '0px 0px 10px rgb(0 0 0 / 30%)',
    },
    hostCircle: {
      width: '100%! important',
      height: '100%! important',
    },
    hostLeadText: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#79c3f4',
      fontSize: '15px',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 700,
      textAlign: 'center',
      wordBreak: 'break-all',
      padding: '0px 6%',
    },
    avatarImg: {
      position: 'absolute',
      bottom: '0',
      right: '20px',
      width: '40%',
    },
    teamMateTitle: {
      color: 'black',
      fontSize: '25px',
      textAlign: 'center',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 700,
      marginTop: '3%',
      textTransform: 'uppercase',
    },
    mainTeamMate: {
      display: 'flex',
    },
    teamMate: {
      backgroundColor: 'rgb(139, 200, 247)',
      marginTop: '9%',
      position: 'relative',
    },
    avatarTeamMainDiv: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatarTeamMain: {
      width: '80%',
      marginTop: '-15%',
    },
    avatarTeamContent: {
      background: '#f8f8f8',
      position: 'absolute',
      top: '50%',
      width: '100%',
      height: '50%',
    },
    mainTeamName: {
      color: 'black',
      fontSize: '18px',
      textAlign: 'center',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 700,
      paddingTop: '10%',
      paddingBottom: '3%',
      textTransform: 'uppercase',
    },
    mainTeamPos: {
      color: 'black',
      fontSize: '12px',
      textAlign: 'center',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 600,
      paddingBottom: '3%',
    },
    teamUnderLine: {
      margin: '0px auto 3% auto',
      borderBottom: '3px solid #f8f1a8',
      width: '20%',
    },
    teamContactInfo: {
      borderRadius: '50%',
      background: 'white',
      boxShadow: '0px 0px 10px rgb(0 0 0 / 30%)',
      width: '10%',
      height: '20%',
      margin: '0px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    teamInstagram: {
      width: '70%',
      height: '70',
    },
    subMainTeam1: {
      display: 'flex',
    },
    subMainTeam2: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    teamMate21: {
      width: '50%',
      paddingLeft: '12%',
      backgroundColor: 'rgb(139, 200, 247)',
      marginTop: '9%',
      position: 'relative',
    },
    teamMate22: {
      width: '50%',
      paddingRight: '12%',
      backgroundColor: 'rgb(139, 200, 247)',
      marginTop: '9%',
      position: 'relative',
    },
    avatarTeamContent2: {
      width: '77%',
      background: '#f8f8f8',
      position: 'absolute',
      top: '50%',
      height: '50%',
    },

    [theme.breakpoints.up(1200)]: {
      avatarImg: {
        position: 'absolute',
        width: '35%!important',
        right: '5%',
      },
    },
    [theme.breakpoints.down(900)]: {
      hostLead: {
        width: '90px',
        height: '90px',
      },
    },
    [theme.breakpoints.down(800)]: {
      mainTeamName: {
        fontSize: '15px',
      },
    },
    [theme.breakpoints.down(700)]: {
      mainTeamName: {
        fontSize: '18px',
      },
      hostLead: {
        width: '70px',
        height: '70px',
      },
      mainTeamMate: {
        display: 'block',
      },
      teamMate: {
        marginTop: '25%',
      },
      subMainTeam1: {
        display: 'block',
        marginTop: '40%',
      },
      subMainTeam2: {
        display: 'block',
        marginTop: '40%',
      },
      teamMate21: {
        width: '100%',
        marginTop: '25%',
        paddingLeft: '0%',
      },
      teamMate22: {
        width: '100%',
        marginTop: '25%',
        paddingRight: '0%',
      },
      avatarTeamContent2: {
        width: '100%',
      },
    },
    [theme.breakpoints.down(500)]: {
      hostTitle: {
        fontSize: '14px',
        paddingRight: '11px',
      },
      hostPos: {
        fontSize: '11px',
      },
      hostName: {
        fontSize: '13px',
      },
      hostContent: {
        fontSize: '13px',
      },
      hostLead: {
        width: '60px',
        height: '60px',
        marginRight: '3%',
      },
      hostLeadText: {
        fontSize: '12px',
      },
    },
  }),
)
