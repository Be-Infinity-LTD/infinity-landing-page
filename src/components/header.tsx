import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { Typography } from '@material-ui/core'
import { useStyles } from './styles/headerStyle'

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
