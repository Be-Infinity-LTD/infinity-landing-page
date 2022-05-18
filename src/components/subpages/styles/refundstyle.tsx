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
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#020202',
    },
    contents: {
      margin: '15px 0',
      fontSize: '16px',
      color: '#4A4848',
      letterSpacing: '1px',
      lineHeight: '2',
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
      contents: {
        fontSize: '14px',
      },
    },
  }),
)
