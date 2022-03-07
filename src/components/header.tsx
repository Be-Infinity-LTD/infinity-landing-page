import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      background: 'linear-gradient( rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94) ), url(../img/intro-bg.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
      position: 'relative',
      padding: '30px',
    },
    colorBack: {
      height: '100%',
      backgroundColor: '#FFFFFF',
      opacity: '0.94',
      transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
    },
    charityContent: {
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
    },
    contentContent: {
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
      width: '-webkit-fill-available',
      height: 'fit-content',
    },
  }),
)

export default function Header() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div id="header" className={classes.mainContainer}>
      {/* <div>
        <Grid className={classes.colorBack}></Grid>
      </div> */}
      <Grid className={classes.charityContent}>
        <Grid item xs={6} className={classes.leftContent}>
          <Typography className={classes.contentTitle}>{t('HOMECONTENT')}</Typography>
          <Typography className={classes.contentContent}>{t('HOMETITLE')}</Typography>
        </Grid>
        <Grid item xs={6} className={classes.rightContent}>
          <img className={classes.homeImage} src="/img/landing/banner.jpg" />
        </Grid>
      </Grid>
    </div>
  )
}
