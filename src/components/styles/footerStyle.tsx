import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainBottom: {
      backgroundColor: '#bdbdbd',
      borderTop: '1px solid #d0d0d0',
      padding: '15px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    disclaimer: {
      backgroundImage:
        'linear-gradient( rgba(75, 105, 121, 0.4), rgba(255, 255, 255, 0.4) ), url(img/landing/stock.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      padding: '0% 10% 0% 10%',
      position: 'relative',
      left: '0px',
    },
    disclaimerGrid: {
      boxShadow: '0px 0px 40px 5px rgb(0 0 0 / 20%)',
      marginTop: '0px',
      marginBottom: '0px',
      padding: '30px 50px 30px 50px',
      zIndex: 10,
      position: 'relative',
      top: '-80px',
      borderRadius: '20px',
      display: 'flex',
      backgroundColor: 'white',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    disclaimerTextTitle: {
      textAlign: 'left',
      marginBottom: '20px',
      fontFamily: "'Raleway', arial, sans-serif",
      color: '#030303',
      fontSize: '30px',
      fontWeight: 600,
      letterSpacing: '1px',
    },
    disclaimerTextContent: {
      fontSize: '17px',
      fontWeight: 400,
      color: '#020202',
      fontFamily: "'Montserrat', sans-serif",
      marginBottom: '0px',
      lineHeight: '24px',
      letterSpacing: '0px',
      textAlign: 'justify',
    },
    disclaimerAvatar: {
      padding: '30px 20px 20px 20px',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    avaterImgMain: {
      margin: '20px 0px 20px 0px',
      textAlign: 'center',
    },
    avatarContent1: {
      margin: '20px 0px 10px 0px',
      textAlign: 'center',
      color: '#030303',
      fontFamily: "'Aguafina Script', Sans-serif",
      fontSize: '22px',
      fontWeight: 600,
      textTransform: 'capitalize',
      letterSpacing: '5px',
    },
    avatarContent2: {
      marginBottom: '20px',
      textAlign: 'center',
      color: '#030303',
      fontFamily: "'Montserrat', Sans-serif",
      fontSize: '30px',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    footerSeperator: {
      backgroundImage:
        'linear-gradient( rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94) ), url(img/landing/footer-bg.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    footerDesc: {
      paddingTop: '20px',
      paddingBottom: '20px',
      backgroundColor: 'white',
    },
    footerDescText: {
      textAlign: 'center',
      color: '#030303',
      fontFamily: "'Montserrat', Sans-serif",
      fontSize: '14px',
      fontWeight: 600,
      letterSpacing: '1.8px',
    },
    footerSepContent: {
      padding: '50px 0px',
      marginLeft: '100px',
      marginRight: '100px',
      display: 'flex',
      flexWrap: 'wrap',
    },
    avatarContent: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '14px',
      fontWeight: 500,
      textAlign: 'left',
    },
    footerSepItemTitle: {
      color: '#333',
      margin: '5px 0',
      position: 'relative',
      fontSize: '20px',
      fontWeight: 600,
      fontFamily: "'Montserrat', sans-serif",
      textAlign: 'left',
    },
    footerSepItemContent: {
      color: '#333',
      fontSize: '15px',
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
    },
    footerinstagram: {
      fontSize: '15px',
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
      color: '#333',
    },
    footerItemLink: {
      color: '#333',
      fontSize: '15px',
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
      marginBottom: '5px',
    },
    footerLogo: {
      textAlign: 'left',
    },
    footerImg: {
      width: '-webkit-fill-available',
      maxWidth: '300px',
    },
    [theme.breakpoints.down('sm')]: {
      disclaimerDesc: {
        maxWidth: '100%',
        flexBasis: '100%',
      },
      disclaimerAvatar: {
        maxWidth: '100%',
        flexBasis: '100%',
      },
      disclaimerGrid: {
        display: 'block',
        padding: '20px',
      },
      disclaimerTextTitle: {
        fontSize: '25px',
        textAlign: 'center',
      },
      disclaimerTextContent: {
        fontSize: '15px',
      },
      footerInfo: {
        maxWidth: '50%',
        flexBasis: '50%',
        marginBottom: '20px',
      },
      footerSepContent: {
        marginLeft: '50px',
        marginRight: '50px',
      },
    },
    [theme.breakpoints.down(600)]: {
      footerSepContent: {
        display: 'block',
        margin: '0px 30px',
        padding: '40px 0px 30px',
      },
      footerInfo: {
        maxWidth: '100%',
        flexBasis: '100%',
      },
      footerLogo: {
        textAlign: 'center',
      },
      avatarContent: {
        textAlign: 'center',
      },
      footerSepItemTitle: {
        margin: '20px 10%',
      },
      footerSepItemContent: {
        margin: '0px 10%',
      },
      footerinstagram: {
        margin: '0px 10%',
      },
      footerItemLink: {
        margin: '0px 10%',
      },
    },
  }),
)
