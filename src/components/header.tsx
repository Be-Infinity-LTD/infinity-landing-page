import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { Typography } from '@material-ui/core'

import { useStyles } from './styles/headerStyle'
import Philosophy from './philosophy'

export default function Header() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div id="header">
      <Grid className={classes.charityContent}>
        <Grid item sm={12} md={6} className={classes.leftContent}>
          <Typography className={classes.contentTitle}>{t('HOMECONTENT')}</Typography>
          <Typography className={classes.contentText}>{t('HOMETITLE')}</Typography>
        </Grid>
        <Grid item sm={12} md={6} className={classes.rightContent}>
          <img className={classes.homeImage} alt="headerImg" src="/img/landing/banner.jpg" />
        </Grid>
      </Grid>
      <Philosophy />
    </div>
  )
}
