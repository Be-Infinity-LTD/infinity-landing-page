import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/affiliatestyle'
import { Typography } from '@material-ui/core'

export default function Affiliate() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.title}>{t('AFFILIATETITLE')}</Typography>
        <Typography className={classes.subtitle}>{t('AFFILIATESUBTITLE')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT')}</Typography>
        <Typography className={classes.subcontents1}>{t('AFFILIATECONTENT0')}</Typography>
        <Typography className={classes.subcontents2}>{t('AFFILIATECONTENT1')}</Typography>
        <Typography className={classes.subcontents1}>{t('AFFILIATECONTENT2')}</Typography>
        <Typography className={classes.subcontents2}>{t('AFFILIATECONTENT3')}</Typography>
        <Typography className={classes.subcontents1}>{t('AFFILIATECONTENT4')}</Typography>
        <Typography className={classes.subcontents2}>{t('AFFILIATECONTENT5')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT6')}</Typography>

        <Typography className={classes.subtitle}>{t('AFFILIATESUBTITLE0')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-1')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-1')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-2')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-2')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-3')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-3')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-4')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-4')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-5')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-5')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-5-1')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-5-1')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-5-2')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-5-2')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-5-3')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-5-3')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-6')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-6')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-7')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-7')}</Typography>
        <Typography className={classes.subcontents2}>{t('AFFILIATECONTENT0-7-1')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-7-2')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-8')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-8')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-9')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-9')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-10')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-10')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-11')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-11')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-12')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-12')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-13')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-13')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-14')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-14')}</Typography>
        <Typography className={classes.subcontents2}>{t('AFFILIATECONTENT0-14-1')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-14-2')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-15')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-15')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-16')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-16')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-17')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-17')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-18')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-18')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-19')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-19')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-20')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-20')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-21')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-21')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-22')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-22')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-23')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-23')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-24')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-24')}</Typography>
        <Typography className={classes.subtitletyle1}>{t('AFFILIATESUBTITLE0-25')}</Typography>
        <Typography className={classes.contents}>{t('AFFILIATECONTENT0-25')}</Typography>
      </Grid>
      <Footer />
    </Grid>
  )
}
