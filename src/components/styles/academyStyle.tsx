import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    svgMainDown: {
      backgroundColor: '#151515',
    },
    pathStyleDown: {
      stroke: '#2d3036',
      fill: '#2d3036',
    },
    academyImage: {
      width: '100%',
    },
    main: {
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(200deg, #292a2e 50%, #2D3036 60%)',
      padding: '50px',
    },
    academyTitleGrid: {
      marginBottom: '50px',
    },
    academyTitle: {
      color: '#FFFFFF',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '60px',
      textTransform: 'uppercase',
      textShadow: '-5px 5px 0px rgb(255 255 255 / 5%)',
      textAlign: 'center',
      fontWeight: 600,
    },
    academyTitleDesc: {
      color: '#FFFFFF',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '30px',
      textShadow: '2px 2px 0px rgb(255 255 255 / 5%)',
      fontWeight: 500,
      textAlign: 'center',
    },
    mainContent: {
      display: 'flex',
      justifyContent: 'center',
    },
    academyContentGrid: {
      width: '20%',
      padding: '0px 15px',
      display: 'flex',
      justifyContent: 'center',
    },
    academyContentItem: {
      width: '100%',
      borderStyle: 'solid',
      borderWidth: '10px 5px 10px 5px',
      borderColor: '#292b2f',
      boxShadow: '0px 5px 45px 0px rgb(0 0 0 / 75%)',
      margin: '0px 15px 0px 15px',
      padding: '0px 0px 30px 0px',
      backgroundColor: '#151515',
      borderRadius: '25px 25px 25px 25px',
      '&:hover': {
        boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 75%)',
      },
    },
    contentItemImg: {
      marginBottom: '20px',
    },
    contentImg: {
      borderRadius: '15px 15px 0px 0px',
      width: '-webkit-fill-available',
    },
    academyContentTitle: {
      margin: '15px 0px 15px 0px',
      padding: '0px 15px 0px 15px',
    },
    ContentItemTitle: {
      color: '#FFFFFF',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '22px',
      fontWeight: 600,
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    academyContent: {
      padding: '0px 15px 0px 15px',
    },
    ContentItemContent: {
      margin: '0 0 1em 0',
      textAlign: 'center',
      color: '#AAAAAA',
      fontSize: '17px',
    },
    academyLiveMainDiv: {
      backgroundColor: '#151515',
    },
    academyLiveMain: {
      display: 'flex',
      padding: '60px 0px 60px 0px',
      maxWidth: '1400px',
      width: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    academyLiveText: {
      marginLeft: '40px',
      marginRight: '40px',
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    academyLiveTitle: {
      color: '#FFFFFF',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '48px',
      textTransform: 'uppercase',
      textShadow: '0px 0px 10px rgb(255 221 160 / 50%)',
      fontWeight: 600,
      marginBottom: '20px',
      textAlign: 'center',
    },
    academyLiveContent: {
      textAlign: 'center',
      color: '#A7A7A7',
      fontFamily: "'ZCOOL XiaoWei', Sans-serif",
      fontSize: '20px',
      fontWeight: 400,
    },
    academyLiveItem: {
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(260deg, #FFFFFF 50%, #eef1f6 50%)',
      borderRadius: '10px 10px 10px 10px',
      borderStyle: 'solid',
      borderWidth: '2px 2px 2px 2px',
      borderColor: '#333333',
      boxShadow: '0px 0px 0px 0px rgb(255 221 160 / 0%)',
      margin: '0px 15px 0px 15px',
      padding: '10px 15px 30px 15px',
      '&:hover': {
        boxShadow: '0px 0px 26px 0px rgb(149 174 215 / 73%)',
      },
    },
    academyContentLiveImg: {
      marginBottom: '10px',
    },
    contentLiveImg: {
      display: 'inline-block',
      height: 'auto',
      width: '100%',
    },
    academyContentLiveTitle: {
      margin: '15px 0px',
      textAlign: 'center',
    },
    academyLiveItemTitle: {
      color: '#030303',
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '22px',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    academyLiveItemContent: {
      marginBottom: '1rem',
      fontSize: '16px',
    },
  }),
)
