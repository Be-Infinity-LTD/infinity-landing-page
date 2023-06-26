import { Grid, Typography } from '@material-ui/core'

import { useStyles } from './styles/communityStyle'
import { useTranslation } from 'react-i18next'

export default function Community() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div id="path" className={classes.container}>
      <Grid >
        <Grid className={classes.pathTitleGrid}>
          <Typography className={classes.pathTitle}>{t('COMMUNITYTITLE')}</Typography>
        </Grid>
        <div className={classes.mainContent}>
          <Grid className={classes.pathContentGrid}>
            <Typography className={classes.ContentItemTitle}>{t('COMMUNITYITEMTITLE1')}</Typography>
            <Typography className={classes.ContentItemSubTitle}>{t('COMMUNITYITEMSUBTITLE1')}
            </Typography>
            <img src="img/landing/event.jpg" className={classes.image} alt="child9" />
          </Grid>
          <Grid className={classes.pathContentGrid}>
            <Typography className={classes.ContentItemTitle}>{t('COMMUNITYITEMTITLE2')}</Typography>
            <Typography className={classes.ContentItemSubTitle}>{t('COMMUNITYITEMSUBTITLE2')}
            </Typography>
            <img src="img/landing/incentive.jpg" className={classes.image} alt="child9" />
          </Grid>
        </div>
      </Grid>
    </div>
  )
}
