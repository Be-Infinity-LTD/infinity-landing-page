import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pathTitleGrid: {
      marginBottom: '50px',
    },
    pathTitle: {
      marginTop: '20px',
      color: 'black',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '60px',
      textTransform: 'uppercase',
      textShadow: '5px 5px 0px rgb(0 0 0 / 5%)',
      textAlign: 'center',
      fontWeight: 600,
    },
    mainContent: {
      display: 'flex',
      justifyContent: 'center',
    },
    pathContentGrid: {
      width: '30%',
      padding: '0px 15px',
      display: 'flex',
      justifyContent: 'center',
      margin: '0px 30px',
    },
    pathContentItem: {
      width: '100%',
      borderStyle: 'solid',
      borderWidth: '10px 5px 10px 5px',
      borderColor: '#292b2f',
      boxShadow: '0px 5px 45px 0px rgb(0 0 0 / 75%)',
      margin: '15px',
      padding: '0px 0px 30px 0px',
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(260deg, #FFFFFF 50%, #eef1f6 50%)',
      borderRadius: '25px 25px 25px 25px',
      transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
      '&:hover': {
        boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 75%)',
      },
    },
    contentItemImg: {
      margin: '30px 0px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '150px',
    },
    contentImg: {
      fontSize: '150px',
    },
    pathContentTitle: {
      margin: '15px 0px 15px 0px',
    },
    ContentItemTitle: {
      color: '#000000',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '22px',
      fontWeight: 600,
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    pathContent: {
      padding: '0px 15px 0px 15px',
    },
    ContentItemContent: {
      margin: '0 0 1em 0',
      textAlign: 'center',
      color: '#AAAAAA',
      fontSize: '17px',
    },
    [theme.breakpoints.down('sm')]: {
      pathTitle: {
        fontSize: '40px',
      },
      pathContentGrid: {
        width: '100%',
        margin: '0px',
      },
      mainContent: {
        margin: '0px 80px',
      },
      pathContentItem: {
        margin: '0px',
      },
    },
    [theme.breakpoints.down(700)]: {
      mainContent: {
        display: 'block',
      },
      pathContentGrid: {
        marginBottom: '50px',
      },
    },
    [theme.breakpoints.down(600)]: {
      pathContentGrid: {
        padding: '0px',
      },
    },
    [theme.breakpoints.down(450)]: {
      mainContent: {
        margin: '0px 60px',
      },
    },
  }),
)
