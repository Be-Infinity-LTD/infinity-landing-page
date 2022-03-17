import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/pricingstyle'
import { Typography } from '@material-ui/core'

export default function Pricing() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.largeTitle}>
            {t("FOOTERPRICING")}
        </Typography>
        <Typography className={classes.title}>
            {t("PRICINGTITLE1")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE1-1")}
        </Typography>

        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            1)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-1-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            2)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-1-2")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            3)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-1-3")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            4)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-1-4")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            5)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-1-5")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            6)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-1-6")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            7)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-1-7")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            8)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-1-8")}
          </Typography>
        </Grid>

        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE1-2")}
        </Typography>

        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            1)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-2-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            2)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-2-2")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            3)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-2-3")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            4)
          </Typography>
          <Typography className={classes.itemContent}>
            {t("PRICINGCONTENT1-2-4")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("PRICINGTITLE2")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT2")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE2-1")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT2-1")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE2-2")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT2-2")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE2-3")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT2-3")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE2-4")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT2-4")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE2-5")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT2-5")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE2-6")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT2-6")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE2-7")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT2-7")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE2-8")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT2-8")}
        </Typography>

        <Typography className={classes.title}>
            {t("PRICINGTITLE3")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT3")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE3-1")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT3-1")}
        </Typography>
        <Typography className={classes.title}>
            {t("PRICINGTITLE4")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT4")}
        </Typography>

        <Typography className={classes.title}>
            {t("PRICINGTITLE5")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT5")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE5-1")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT5-1")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE5-2")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT5-2")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE5-3")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT5-3")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE5-4")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT5-4")}
        </Typography>
        <Typography className={classes.subtitle}>
            {t("PRICINGTITLE5-5")}
        </Typography>
        <Typography className={classes.contents}>
            {t("PRICINGCONTENT5-5")}
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  )
}
