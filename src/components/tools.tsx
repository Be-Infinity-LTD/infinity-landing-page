import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './styles/toolsStyle'
import { toolsImgs } from '../common/constant'

export default function Tools() {
  const { t } = useTranslation()
  const classes = useStyles()
  const toolsTitles = ['TOOLSEXPERTTITLE', 'TOOLSTRADETITLE', 'TOOLSINDICATORTITLE', 'TOOLSCOINTITLE']
  const toolsContents = ['TOOLSEXPERTCONTENT', 'TOOLSTRADECONTENT', 'TOOLSINDICATORCONTENT', 'TOOLSCOINCONTENT']

  return (
    <div id="tools" className={classes.mainContent}>
      <Grid className={classes.toolsContent}>
        <Typography className={classes.toolsTextTitle}>{t('TOOLSTITLE')}</Typography>
        <Typography className={classes.toolsTextContent}>{t('TOOLSCONTENT')}</Typography>
        <Grid className={classes.toolsItems}>
          {toolsTitles.map((item, i) => (
            <Grid item xs={3} className={classes.toolsItem} key={i}>
              <div className={classes.toolsContentLiveImg}>
                <a href="/">
                  <img src={toolsImgs[i]} alt="imgtools" className={classes.contentLiveImg}></img>
                </a>
              </div>
              <div className={classes.toolsContentLiveTitle}>
                <Typography className={classes.toolsLiveItemTitle}>{t(toolsTitles[i])}</Typography>
              </div>
              <div className={classes.toolsContent}>
                <Typography className={classes.toolsLiveItemContent}>{t(toolsContents[i])}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}
