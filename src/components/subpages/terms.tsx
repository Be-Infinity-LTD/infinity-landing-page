import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/termsstyles'
import { Typography } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

export default function Terms() {
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
        <Typography className={classes.largeTitle}>{t('FOOTERTERMS')}</Typography>
        <Typography className={classes.contents}>{t('FOOTERTERMS-CONTENTS')}</Typography>
        <Typography className={classes.title}>{t('TERMSTITLE0')}</Typography>
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{ __html: t('TERMSCONTENT0-1') }}
        ></Typography>
        <Typography className={classes.title}>{t('TERMSTITLE1')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT1-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE2')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT2-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE3')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT3-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE4')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT4-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE5')}</Typography>
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{ __html: t('TERMSCONTENT5-1') }}
        ></Typography>

        <Typography className={classes.title}>{t('TERMSTITLE6')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT6-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE7')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT7-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE8')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT8-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE9')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT9-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE10')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT10')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE11')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT11-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE12')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT12')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE13')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT13')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE14')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT14-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE15')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT15')}</Typography>

        <Typography className={classes.title}>{t('PRIVACYTITLE1')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT1')}</Typography>

        <Typography className={classes.title}>{t('PRIVACYTITLE2')}</Typography>
        <Typography className={classes.contents}>{t('PRIVACYCONTENT2')}</Typography>
      </Grid>
      <Footer />
    </Grid>
  )
}
