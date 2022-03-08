import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './styles/toolsStyle'

export default function Tools() {
  const { t } = useTranslation()
  const classes = useStyles()
  const toolsImgs = [
    './img/landing/tools_advisor.jpg',
    './img/landing/tools_trade.jpg',
    './img/landing/tools_indicator.jpg',
  ]
  const toolsTitles = ['INFINITYLIVEOPTIONTITLE1', 'INFINITYLIVEOPTIONTITLE2', 'INFINITYLIVEOPTIONTITLE3']
  const toolsContents = ['INFINITYLIVEOPTIONCONTENT1', 'INFINITYLIVEOPTIONCONTENT2', 'INFINITYLIVEOPTIONCONTENT3']

  return (
    <div id="tools" className={classes.mainContent}>
      <Grid className={classes.toolsContent}>
        <Typography className={classes.toolsTextTitle}>{t('TOOLSTITLE')}</Typography>
        <Typography className={classes.toolsTextContent}>{t('TOOLSCONTENT')}</Typography>
        <Grid className={classes.toolsItems}>
          {toolsTitles.map((item, i) => (
            <Grid item xs={4} className={classes.toolsItem} key={i}>
              <div className={classes.toolsContentLiveImg}>
                <a href="#">
                  <img src={toolsImgs[i]} className={classes.contentLiveImg}></img>
                </a>
              </div>
              <div className={classes.toolsContentLiveTitle}>
                <Typography className={classes.toolsLiveItemTitle}>{toolsTitles[i]}</Typography>
              </div>
              <div className={classes.toolsContent}>
                <Typography className={classes.toolsLiveItemContent}>{toolsContents[i]}</Typography>
              </div>
            </Grid>
          ))}
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
