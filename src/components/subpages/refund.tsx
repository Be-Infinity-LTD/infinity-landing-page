import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/refundstyle'
import { Typography } from '@material-ui/core'

export default function Refund() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.largeTitle}>{t('FOOTERREFUND')}</Typography>
        <Typography className={classes.title}>{t('REFUNDMAINTITLE')}</Typography>
        <Typography className={classes.title}>{t('REFUNDTITLE1')}</Typography>
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
