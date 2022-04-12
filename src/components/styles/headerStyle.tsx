import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    colorBack: {
      height: '100%',
      backgroundColor: '#FFFFFF',
      opacity: '0.94',
    },
    charityContent: {
      background: 'linear-gradient( rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94) ), url(../img/intro-bg.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    leftContent: {
      margin: '0px 50px',
      padding: '10px',
      textAlign: 'center',
      marginBottom: 'auto',
      marginTop: 'auto',
    },
    rightContent: {
      padding: '30px',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    contentText: {
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '50px',
      fontWeight: 600,
      textTransform: 'uppercase',
      color: '#030303',
      marginBottom: '20px',
    },
    contentTitle: {
      fontFamily: "'ZCOOL XiaoWei', Sans-serif",
      fontSize: '30px',
      fontWeight: 600,
      color: '#030303',
    },
    homeImage: {
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#FFFFFF',
      borderRadius: '15px',
      boxShadow: '-10px 8px 40px 0px rgb(0 0 0 / 30%)',
      width: '100%',
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      charityContent: {
        width: '100%',
        display: 'block',
      },
      contentTitle: {
        fontSize: '20px',
      },
      contentText: {
        fontSize: '30px',
      },
    },
  }),
)
