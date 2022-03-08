import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      position: 'relative',
    },
    colorBack: {
      backgroundColor: '#515151',
      opacity: '0.58',
      height: '85%',
    },
    charityContent: {
      display: 'flex',
      justifyContent: 'center',
      padding: '60px',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    leftContent: {
      minHeight: '400px',
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
      minHeight: '400px',
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
  }),
)
