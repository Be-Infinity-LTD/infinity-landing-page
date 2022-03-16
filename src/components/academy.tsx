import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { academyImgLists, academyLiveLists } from '../common/constant'
import { useStyles } from './styles/academyStyle'

export default function Academy() {
  const classes = useStyles()
  const { t } = useTranslation()
  let academyTitles = ['INFINITYMONEY', 'INFINITYFOREX', 'INFINITYTAXES', 'INFINITYSHARES', 'INFINITYCRYPTO']
  let academySepcTitles = ['INFINITYLIVEOPTIONTITLE1', 'INFINITYLIVEOPTIONTITLE2', 'INFINITYLIVEOPTIONTITLE3']
  let academyContents = [
    'INFINITYMONEYDESC',
    'INFINITYFOREXDESC',
    'INFINITYTAXESDESC',
    'INFINITYSHARESDESC',
    'INFINITYCRYPTODESC',
  ]
  let academySpecContents = ['INFINITYLIVEOPTIONCONTENT1', 'INFINITYLIVEOPTIONCONTENT2', 'INFINITYLIVEOPTIONCONTENT3']

  return (
    <div id="academy">
      <Grid>
        <div>
          <img src="./img/landing/beach.jpg" alt="academyImage" className={classes.academyImage} />
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
                    <a href="/">
                      <img src={academyImgLists[i]} alt="academyContentIMg" className={classes.contentImg}></img>
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
      <div className={classes.academyLiveMainDiv}>
        <Grid className={classes.academyLiveMain}>
          <Grid item xs={8} className={classes.academyLiveItems}>
            {academySepcTitles.map((item, i) => (
              <Grid item xs={4} className={classes.academyLiveItem} key={i}>
                <div className={classes.academyContentLiveImg}>
                  <a href="/">
                    <img src={academyLiveLists[i]} alt="imgLive" className={classes.contentLiveImg}></img>
                  </a>
                </div>
                <div className={classes.academyContentLiveTitle}>
                  <Typography className={classes.academyLiveItemTitle}>{t(academySepcTitles[i])}</Typography>
                </div>
                <div className={classes.academyContent}>
                  <Typography className={classes.academyLiveItemContent}>{t(academySpecContents[i])}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={4} className={classes.academyLiveText}>
            <Typography className={classes.academyLiveTitle}>{t('INFINITYLIVETITLE')}</Typography>
            <Typography className={classes.academyLiveContent}>{t('INFINITYLIVECONTENT')}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
