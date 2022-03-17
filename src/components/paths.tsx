import { Grid, Typography } from '@material-ui/core'

import { useStyles } from './styles/pathStyle'
import { useTranslation } from 'react-i18next'

export default function Paths() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div id="path">
      <Grid>
        <Grid className={classes.pathTitleGrid}>
          <Typography className={classes.pathTitle}>{t('PATHTITLE')}</Typography>
        </Grid>
        <div className={classes.mainContent}>
          <Grid className={classes.pathContentGrid}>
            <div className={classes.pathContentItem}>
              <div className={classes.contentItemImg}>
                <i aria-hidden="true" className="fas fa-user-graduate pathAvatar"></i>
              </div>
              <div className={classes.pathContentTitle}>
                <Typography className={classes.ContentItemTitle}>{t('PATHITEMTITLE1')}</Typography>
              </div>
              <div className={classes.pathContent}>
                <Typography className={classes.ContentItemContent}>{t('PATHITEMCONTENT1')}</Typography>
              </div>
            </div>
          </Grid>
          <Grid className={classes.pathContentGrid}>
            <div className={classes.pathContentItem}>
              <div className={classes.contentItemImg}>
                <i aria-hidden="true" className="fas fa-users pathAvatar"></i>
              </div>
              <div className={classes.pathContentTitle}>
                <Typography className={classes.ContentItemTitle}>{t('PATHITEMTITLE2')}</Typography>
              </div>
              <div className={classes.pathContent}>
                <Typography className={classes.ContentItemContent}>{t('PATHITEMCONTENT2')}</Typography>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  )
}
