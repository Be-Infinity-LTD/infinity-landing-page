import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/termsstyles'
import { Typography } from '@material-ui/core'

export default function Terms() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.largeTitle}>{t('FOOTERTERMS')}</Typography>
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
        <Typography className={classes.subcontents}>{t('TERMSCONTENT7-2')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT7-3')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE8')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT8-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE9')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT9-1')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE10')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT10')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE11')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT11-1')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT11-2')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT11-3')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT11-4')}</Typography>
        <Typography className={classes.subcontents}>{t('TERMSSUBCONTENT11-4-1')}</Typography>
        <Typography className={classes.subcontents}>{t('TERMSSUBCONTENT11-4-2')}</Typography>
        <Typography className={classes.subcontents}>{t('TERMSSUBCONTENT11-4-3')}</Typography>
        <Typography className={classes.subcontents}>{t('TERMSSUBCONTENT11-4-4')}</Typography>
        <Typography className={classes.subcontents}>{t('TERMSSUBCONTENT11-4-5')}</Typography>
        <Typography className={classes.subcontents}>{t('TERMSSUBCONTENT11-4-6')}</Typography>
        <Typography className={classes.subcontents}>{t('TERMSSUBCONTENT11-4-7')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT11-5')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE12')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT12')}</Typography>

        <Typography className={classes.title}>{t('TERMSTITLE13')}</Typography>
        <Typography className={classes.contents} dangerouslySetInnerHTML={{ __html: t('TERMSCONTENT13-1') }} />

        <Typography className={classes.title}>{t('TERMSTITLE14')}</Typography>
        <Typography className={classes.contents}>{t('TERMSCONTENT14')}</Typography>
      </Grid>
      <Footer />
    </Grid>
  )
}
