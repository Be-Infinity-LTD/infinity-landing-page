import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/privacystyle'
import { Typography } from '@material-ui/core'

export default function Privacy() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.largeTitle}>{t('FOOTERPRIVACY')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE1')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT1')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE2')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT2')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE3')}</Typography>
        <Typography className={classes.contents} dangerouslySetInnerHTML={{ __html: t('PRIVACYCONTENT3') }} />
        <Typography className={classes.title}>{t('PRIVACYTITLE4')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT4')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE5')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT5')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE6')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT6')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE7')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT7')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE8')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT8')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE9')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT9')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE10')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT10')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE11')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT11')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE12')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT12')}</Typography>
        <Typography className={classes.subtitle}>{t('PRIVACYSUBTITLE12-1')}</Typography>
        <Typography className={classes.contents} dangerouslySetInnerHTML={{ __html: t('PRIVACYSUBCONTENT12-1') }} />
        <Typography className={classes.subtitle}>{t('PRIVACYSUBTITLE12-2')}</Typography>
        <Typography className={classes.contents} dangerouslySetInnerHTML={{ __html: t('PRIVACYSUBCONTENT12-2') }} />
        <Typography className={classes.subtitle}>{t('PRIVACYSUBTITLE12-3')}</Typography>
        <Typography className={classes.contents} dangerouslySetInnerHTML={{ __html: t('PRIVACYSUBCONTENT12-3') }} />
        <Typography className={classes.title}>{t('PRIVACYTITLE13')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT13')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE14')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT14')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE15')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT15')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE16')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT16')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE17')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT17')}</Typography>
        <Typography className={classes.title}>{t('PRIVACYTITLE18')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT18')}</Typography>
      </Grid>
      <Footer />
    </Grid>
  )
}
