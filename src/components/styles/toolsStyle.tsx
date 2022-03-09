import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContent: {
      backgroundColor: '#151515',
      paddingTop: '80px',
    },
    toolsContent: {
      padding: '10px 10px 30px 10px',
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
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(260deg, #FFFFFF 50%, #eef1f6 50%)',
      borderRadius: '10px',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#333333',
      boxShadow: '0px 0px 0px 0px rgb(255 221 160 / 0%)',
      margin: '0px 15px 0px 15px',
      padding: '10px 15px 30px 15px',
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
    },
    toolsContentItem: {
      padding: '0px 15px 0px 15px',
    },
    toolsLiveItemContent: {
      marginBottom: '1rem',
      fontSize: '16px',
      textAlign: 'justify',
    },
    toolsContentLiveTitle: {
      margin: '15px 0px',
      textAlign: 'center',
    },
    toolsLiveItemTitle: {
      color: '#030303',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '22px',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    svgMain: {
      backgroundColor: '#f6f6f6',
    },
    pathStyle: {
      stroke: '#151515',
      fill: '#151515',
    },
  }),
)
