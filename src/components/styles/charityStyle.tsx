import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { hover } from '@testing-library/user-event/dist/hover'
import { title } from 'process'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    colorBack: {
      backgroundColor: '#515151',
      opacity: '0.58',
      height: '85%',
    },
    charityContent: {
      position: 'relative',

      // backgroundPosition: 'center center',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      // backgroundImage:'linear-gradient( rgba(81, 81, 81, 0.3), rgba(255, 255, 255, 0.3) ), url(img/landing/charity.jpg)',
      background: '#2D3036',
      // display: 'flex',
      // justifyContent: 'center',
      padding: '100px',
      paddingTop: '0',
      width: '100%',
      // height: '100%',
    },
    charityContentGrid: {
      display: 'flex',
      // flewWrap: 'wrap',
      // justifyContent: 'center',
      // alignItems: 'center',
      gap: '20px',
      // width: '100%',
      height: '350px',
      // flexWrap: 'wrap',
      // overflow: 'hidden',
      overflowX: 'scroll',
      // padding: '1rem -100px'
      borderRadius: '20px',
      cursor: 'grab',

    },
    arrow: {
      position: 'absolute',
      top: '50%',
      // transform: 'translateY(-50%)',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      zIndex: 2,
      opacity: '0.75',
      cursor: 'pointer',
      '&:hover': {
        opacity: '1',
      },
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
      padding: '20px',
    },
    rightContent: {
      backgroundColor: '#FFFFFF1F',
      borderRadius: '20px',
      textAlign: 'center',
    },
    fountainDesc: {
      color: '#FFFFFF',
      fontFamily: "'Montserrat', Sans-serif",
      fontSize: '18px',
      fontWeight: 600,
      textAlign: 'center',
      margin: '10px auto',
      width: '80%',
    },
    forestDesc: {
      color: '#FFFFFF',
      fontFamily: "'Montserrat', Sans-serif",
      fontSize: '17px',
      fontWeight: 600,
      textAlign: 'center',
      margin: '10px auto',
      width: '50%',
    },
    ChildrenDesc: {
      color: '#FFFFFF',
      fontFamily: "'Montserrat', Sans-serif",
      fontSize: '17px',
      fontWeight: 600,
      textAlign: 'center',
      margin: '10px auto',
    },
    forest: {
      position: 'relative',
      height: 'inherit',
      // animation: '$slide 10s infinite', 
    },
    forestImg: {
      // borderTopRightRadius: '20px',
      // borderTopLeftRadius: '20px',
      borderRadius: '20px',
      width: 'auto',
      height: '100%',
    },
    forestDownload: {
      borderBottomRightRadius: '20px',
      borderBottomLeftRadius: '20px',
      background: 'rgba(89,89, 91, 0.5)',
      bottom: '0',
      width: 'inherit',
      cursor: 'pointer',
      position: 'absolute',
      right: '0px',
      left: '0',
    },
    downloadIcon: {
      color: 'white',
      fontSize: '50px',
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
    '@keyframes slide': {
      '0%': {
        transform: 'translateX(0)',
      },
      '100%': {
        transform: 'translateX(-300%)',
      },
    },
    [theme.breakpoints.down(1300)]: {
      title: {
        fontSize: '65px',
      },
      fountainDesc: {
        fontSize: '16px',
      },
    },
    [theme.breakpoints.down(1100)]: {
      forestDesc: {
        fontSize: '16px',
      },
      downloadIcon: {
        fontSize: '45px',
      },
    },
    [theme.breakpoints.down(960)]: {
      charityContent: {
        display: 'block',
      },
      leftContent: {
        margin: '0px auto',
      },
      rightContent: {
        margin: '0px auto',
        height: '85%',
      },
    },
    [theme.breakpoints.down(750)]: {
      title: {
        fontSize: '40px',
      },
      charityContent: {
        padding: '30px',
        paddingTop: '0',
      },
      downloadIcon: {
        fontSize: '40px',
      },
      charityContentGrid: {
        flexWrap: 'wrap',
        flexDirection: 'column',
      },
      forest: {
        width: '155px',
        height: '155px'
      },
      forestDesc: {
        width: '100%',
        fontSize: '12px',

      },
      ChildrenDesc: {
        fontSize: '12px',
      },
    },
    [theme.breakpoints.down(520)]: {
      // forestImg: {
      //   width: '100%',
      //   height: 'auto',
      // },
    },
    [theme.breakpoints.down(450)]: {
      title: {
        fontSize: '30px',
      },
      fountainDesc: {
        fontSize: '13px',
      },

      downloadIcon: {
        fontSize: '30px',
      },
    },
  }),
)
