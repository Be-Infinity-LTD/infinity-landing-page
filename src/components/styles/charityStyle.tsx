import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    colorBack: {
      backgroundColor: '#515151',
      opacity: '0.58',
      height: '85%',
    },
    charityContent: {
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage:
        'linear-gradient( rgba(81, 81, 81, 0.3), rgba(255, 255, 255, 0.3) ), url(img/landing/charity.jpg)',
      display: 'flex',
      justifyContent: 'center',
      padding: '100px',
      width: '100%',
      height: '600px',
    },
    leftContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px 20px',
    },
    title: {
      color: '#FFFFFF',
      fontFamily: "'Playfair Display', Sans-serif",
      fontSize: '80px',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '7px',
      textShadow: '0px 0px 10px rgb(255 221 160 / 50%)',
      wordBreak: 'break-all',
      textAlign: 'center',
    },
    rightContent: {
      backgroundColor: '#FFFFFF1F',
      padding: '60px',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    charityContent1: {
      color: '#FFFFFF',
      fontFamily: "'Montserrat', Sans-serif",
      fontSize: '45px',
      fontWeight: 600,
      textAlign: 'center',
      marginBottom: '15px',
    },
    charityContent2: {
      color: '#FFFFFF',
      fontFamily: "'ZCOOL XiaoWei', Sans-serif",
      fontSize: '20px',
      fontWeight: 300,
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      charityContent: {
        display: 'none',
      },
    },
  }),
)
