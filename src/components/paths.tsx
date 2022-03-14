import { Grid, Typography } from '@material-ui/core'

import { useStyles } from './styles/pathStyle'
import { useTranslation } from 'react-i18next'
import { pathImgs } from '../common/constant'

export default function Paths() {
  const classes = useStyles()
  const { t } = useTranslation()
  let pathTitles = ['PATHITEMTITLE1', 'PATHITEMTITLE2']
  let pathContents = ['PATHITEMCONTENT1', 'PATHITEMCONTENT2']

  return (
    <div id="path">
      <Grid>
        <Grid className={classes.pathTitleGrid}>
          <Typography className={classes.pathTitle}>{t('PATHTITLE')}</Typography>
        </Grid>
        <div className={classes.mainContent}>
          {pathTitles.map((item, i) => (
            <Grid className={classes.pathContentGrid} key={i}>
              <div className={classes.pathContentItem}>
                <div className={classes.contentItemImg}>
                  <img src={pathImgs[i]} alt="pathImg" className={classes.contentImg}></img>
                </div>
                <div className={classes.pathContentTitle}>
                  <Typography className={classes.ContentItemTitle}>{t(pathTitles[i])}</Typography>
                </div>
                <div className={classes.pathContent}>
                  <Typography className={classes.ContentItemContent}>{t(pathContents[i])}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </div>
      </Grid>
    </div>
  )
}
