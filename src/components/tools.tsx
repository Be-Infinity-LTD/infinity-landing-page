import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './styles/toolsStyle'

export default function Tools() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div id="tools" className={classes.mainContent}>
      <Grid className={classes.toolsContent}>
        <Typography className={classes.toolsTextTitle}>{t('TOOLSTITLE')}</Typography>
        <Typography className={classes.toolsTextContent}>{t('TOOLSCONTENT')}</Typography>
        <Grid className={classes.toolsItems}>
          <Grid item xs={4} className={classes.toolsItem}>
            <div className={classes.toolsContentLiveImg}>
              <a href="#">
                <img src={'./img/landing/tools_advisor.jpg'} className={classes.contentLiveImg}></img>
              </a>
            </div>
            <div className={classes.toolsContentLiveTitle}>
              <Typography className={classes.toolsLiveItemTitle}>{t('INFINITYLIVEOPTIONTITLE1')}</Typography>
            </div>
            <div className={classes.toolsContent}>
              <Typography className={classes.toolsLiveItemContent}>{t('INFINITYLIVEOPTIONCONTENT1')}</Typography>
            </div>
          </Grid>
          <Grid item xs={4} className={classes.toolsItem}>
            <div className={classes.toolsContentLiveImg}>
              <a href="#">
                <img src={'./img/landing/tools_trade.jpg'} className={classes.contentLiveImg}></img>
              </a>
            </div>
            <div className={classes.toolsContentLiveTitle}>
              <Typography className={classes.toolsLiveItemTitle}>{t('INFINITYLIVEOPTIONTITLE1')}</Typography>
            </div>
            <div className={classes.toolsContentItem}>
              <Typography className={classes.toolsLiveItemContent}>{t('INFINITYLIVEOPTIONCONTENT1')}</Typography>
            </div>
          </Grid>
          <Grid item xs={4} className={classes.toolsItem}>
            <div className={classes.toolsContentLiveImg}>
              <a href="#">
                <img src={'./img/landing/tools_indicator.jpg'} className={classes.contentLiveImg}></img>
              </a>
            </div>
            <div className={classes.toolsContentLiveTitle}>
              <Typography className={classes.toolsLiveItemTitle}>{t('INFINITYLIVEOPTIONTITLE1')}</Typography>
            </div>
            <div className={classes.toolsContent}>
              <Typography className={classes.toolsLiveItemContent}>{t('INFINITYLIVEOPTIONCONTENT1')}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <svg
          viewBox="0 0 1000 20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={classes.svgMain}
        >
          <path
            className={classes.pathStyle}
            d="M 500, 20
               L 0, 6.1
               V 0 h 1000 v 6.1
               L 500, 20 z"
          />
        </svg>
      </Grid>
    </div>
  )
}
