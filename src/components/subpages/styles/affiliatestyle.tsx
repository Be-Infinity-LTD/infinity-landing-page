import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainGrid: {
      whiteSpace: 'pre-line',
      margin: '100px auto 200px',
      maxWidth: '1000px',
      padding: '0px 20px',
      wordBreak: 'break-word',
    },
    largeTitle: {
      fontSize: '50px',
      color: '#020202',
      margin: '0 0 15px',
      textAlign: 'center',
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#020202',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#020202',
      marginTop: '30px',
    },
    subtitletyle1: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#020202',
      marginTop: '10px',
    },
    subtitleCenter: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#020202',
      marginTop: '30px',
      textAlign: 'center',
    },
    subcontents1: {
      fontSize: '20px',
      margin: '10px 0',
      color: '#4A4848',
      letterSpacing: '1px',
      lineHeight: '2',
      fontWeight: 700,
    },
    subcontents2: {
      fontSize: '16px',
      margin: '10px 0 10px 20px',
      color: '#4A4848',
      letterSpacing: '1px',
      lineHeight: '2',
    },
    contents: {
      fontSize: '16px',
      margin: '10px 0',
      color: '#4A4848',
      letterSpacing: '1px',
      lineHeight: '2',
    },
    subitem: {
      display: 'flex',
      margin: '30px 0',
    },
    subChildItem: {
      display: 'flex',
      margin: '10px 0',
    },
    subItemNumber: {
      fontSize: '16px',
      width: '30px',
      flexShrink: 0,
      color: '#4A4848',
    },
    subItemContent: {
      fontSize: '16px',
      letterSpacing: '1px',
      color: '#4A4848',
    },
    [theme.breakpoints.down(600)]: {
      mainGrid: {
        margin: '30px 15px 130px',
        width: 'auto',
      },
      largeTitle: {
        fontSize: '40px',
      },
      title: {
        fontSize: '25px',
      },
      subtitle: {
        fontSize: '20px',
      },
      subtitleCenter: {
        fontSize: '20px',
      },
      subcontents1: {
        fontSize: '17px',
      },
      contents: {
        fontSize: '14px',
        margin: '30px 0',
      },
    },
  }),
)
