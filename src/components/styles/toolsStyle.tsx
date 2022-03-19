import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContent: {
      backgroundColor: '#151515',
      paddingTop: '80px',
      paddingBottom: '30px',
      whiteSpace: 'pre-line',
    },
    toolsContent: {
      padding: '0px 10px 30px 10px',
    },
    toolsTextTitle: {
      marginBottom: '10px',
      textAlign: 'center',
      color: '#FFFFFF',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '48px',
      textTransform: 'uppercase',
      textShadow: '0px 0px 10px rgb(255 221 160 / 50%)',
      fontWeight: 600,
    },
    toolsTextContent: {
      textAlign: 'center',
      color: '#A7A7A7',
      fontFamily: "'ZCOOL XiaoWei', Sans-serif",
      fontSize: '20px',
      fontWeight: 400,
      marginBottom: '40px',
    },
    toolsItems: {
      maxWidth: '1200px',
      width: 'auto',
      display: 'flex',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    toolsItem: {
      width: 'calc(25% - 120px/4)',
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(260deg, #FFFFFF 50%, #eef1f6 50%)',
      borderRadius: '10px',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#333333',
      boxShadow: '0px 0px 0px 0px rgb(255 221 160 / 0%)',
      margin: '0px 15px 0px 15px',
      padding: '10px 15px 0px 15px',
      transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
      '&:hover': {
        boxShadow: '0px 0px 26px 0px rgb(149 174 215 / 73%)',
      },
    },
    toolsContentLiveImg: {
      marginBottom: '10px',
    },
    contentLiveImg: {
      display: 'inline-block',
      height: 'auto',
      width: '100%',
      borderRadius: '25px',
    },
    toolsContentItem: {
      padding: '0px 15px 0px 15px',
    },
    toolsLiveItemContent: {
      marginBottom: '1rem',
      fontSize: '16px',
      textAlign: 'center',
    },
    toolsContentLiveTitle: {
      height: '65px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    toolsLiveItemTitle: {
      color: '#030303',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '22px',
      fontWeight: 600,
      textTransform: 'uppercase',
      wordBreak: 'break-all',
    },
    [theme.breakpoints.down('sm')]: {
      toolsItems: {
        display: 'block',
      },
      toolsItem: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10%',
        maxWidth: '60%',
        width: '100%',
      },
      toolsTextTitle: {
        fontSize: '35px',
      },
    },
    [theme.breakpoints.down(500)]: {
      toolsItem: {
        maxWidth: '70%',
      },
    },
  }),
)
