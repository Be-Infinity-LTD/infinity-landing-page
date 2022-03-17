import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/disclaimerstyle'
import { Typography } from '@material-ui/core'

export default function Disclaimer() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.largeTitle}>
            {t("FOOTERDISCLAIMER")}
        </Typography>
        <Typography className={classes.title}>
          {t("DISCLAIMERTITLE1")}
        </Typography>
        <Typography className={classes.contents}>
          {t("DISCLAIMERCONTENT1")}
        </Typography>
        <Typography className={classes.title}>
          {t("DISCLAIMERTITLE2")}
        </Typography>
        <Typography className={classes.contents}>
          {t("DISCLAIMERCONTENT2")}
        </Typography>
        <Typography className={classes.title}>
          {t("DISCLAIMERTITLE3")}
        </Typography>
        <Typography className={classes.contents}>
          {t("DISCLAIMERCONTENT3")}
        </Typography>
        <Typography className={classes.title}>
          {t("DISCLAIMERTITLE4")}
        </Typography>
        <Typography className={classes.contents}>
          {t("DISCLAIMERCONTENT4")}
        </Typography>
        <Typography className={classes.title}>
          {t("DISCLAIMERTITLE5")}
        </Typography>
        <Typography className={classes.contents}>
          {t("DISCLAIMERCONTENT5")}
        </Typography>
        <Typography className={classes.title}>
          {t("DISCLAIMERTITLE6")}
        </Typography>
        <Typography className={classes.contents}>
          {t("DISCLAIMERCONTENT6")}
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  )
}
