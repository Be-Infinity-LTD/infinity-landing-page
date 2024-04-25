import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/refundstyle'
import { Typography } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

export default function Refund() {
  const { t, i18n } = useTranslation()
  const classes = useStyles()
  const location = useLocation()
  const query_string_params = new URLSearchParams(location.search)
  const language = query_string_params.get('l')

  if (language === 'de') {
    i18n.changeLanguage('ge')
  }

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.largeTitle}>{t('FOOTERREFUND')}</Typography>
        <Typography className={classes.title}>{t('REFUNDMAINTITLE')}</Typography>
        {/* <Typography className={classes.title}>{t('REFUNDTITLE1')}</Typography> */}
        <Typography className={classes.contents}>{t('REFUNDCONTENT1')}</Typography>
        <Typography className={classes.title}>{t('REFUNDTITLE2')}</Typography>
        <Typography className={classes.contents}>{t('REFUNDCONTENT2')}</Typography>
        <Typography className={classes.title}>{t('REFUNDTITLE3')}</Typography>
        <Typography className={classes.contents}>{t('REFUNDCONTENT3')}</Typography>
        <Typography className={classes.title}>{t('REFUNDTITLE4')}</Typography>
        <Typography className={classes.contents}>{t('REFUNDCONTENT4')}</Typography>
      </Grid>
      <Footer />
    </Grid>
  )
}
