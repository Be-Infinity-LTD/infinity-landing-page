import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { academyImgLists } from '../common/constant'
import { useStyles } from './styles/academyStyle'

export default function Academy() {
  const classes = useStyles()
  const { t } = useTranslation()
  let academyTitles = ['INFINITYMONEY', 'INFINITYFOREX', 'INFINITYTAXES', 'INFINITYSHARES', 'INFINITYPROPERTY']
  let academyContents = [
    'INFINITYMONEYDESC',
    'INFINITYFOREXDESC',
    'INFINITYTAXESDESC',
    'INFINITYSHARESDESC',
    'INFINITYPROPERTYDESC',
  ]

  return (
    <div id="academy">
      <Grid>
        <div>
          <img src="./img/landing/beach.jpg" alt="academy-image" className={classes.academyImage} />
        </div>
        <Grid className={classes.main}>
          <Grid className={classes.academyTitleGrid}>
            <Typography className={classes.academyTitle}>{t('INFINITYTITLE')}</Typography>
            <Typography className={classes.academyTitleDesc}>{t('INFINITYTITLEDESC')}</Typography>
          </Grid>
          <div className={classes.mainContent}>
            {academyTitles.map((item, i) => (
              <Grid className={classes.academyContentGrid} key={i}>
                <div className={classes.academyContentItem}>
                  <div className={classes.contentItemImg}>
                    <a href="#">
                      <img src={academyImgLists[i]} className={classes.contentImg}></img>
                    </a>
                  </div>
                  <div className={classes.academyContentTitle}>
                    <Typography className={classes.ContentItemTitle}>{t(academyTitles[i])}</Typography>
                  </div>
                  <div className={classes.academyContent}>
                    <Typography className={classes.ContentItemContent}>{t(academyContents[i])}</Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid>
        <svg
          viewBox="0 0 1000 20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={classes.svgMainDown}
        >
          <path
            className={classes.pathStyleDown}
            d="M 500, 20
               L 0, 6.1
               V 0 h 1000 v 6.1
               L 500, 20 z"
          />
        </svg>
      </Grid>
      <div className={classes.academyLiveMainDiv}>
        <Grid className={classes.academyLiveMain}>
          <Grid item xs={6} sm={3} className={classes.academyLiveItem}>
            <div className={classes.academyContentLiveImg}>
              <a href="#">
                <img src={'./img/landing/academy/learn_forex.jpg'} className={classes.contentLiveImg}></img>
              </a>
            </div>
            <div className={classes.academyContentLiveTitle}>
              <Typography className={classes.academyLiveItemTitle}>{t('INFINITYLIVEOPTIONTITLE1')}</Typography>
            </div>
            <div className={classes.academyContent}>
              <Typography className={classes.academyLiveItemContent}>{t('INFINITYLIVEOPTIONCONTENT1')}</Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.academyLiveItem}>
            <div className={classes.academyContentLiveImg}>
              <a href="#">
                <img src={'./img/landing/academy/learn_stocks.jpg'} className={classes.contentLiveImg}></img>
              </a>
            </div>
            <div className={classes.academyContentLiveTitle}>
              <Typography className={classes.academyLiveItemTitle}>{t('INFINITYLIVEOPTIONTITLE2')}</Typography>
            </div>
            <div className={classes.academyContent}>
              <Typography className={classes.academyLiveItemContent}>{t('INFINITYLIVEOPTIONCONTENT2')}</Typography>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.academyLiveText}>
            <Typography className={classes.academyLiveTitle}>{t('INFINITYLIVETITLE')}</Typography>
            <Typography className={classes.academyLiveContent}>{t('INFINITYLIVECONTENT')}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
