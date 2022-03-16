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
        <Typography className={classes.title}>
          {t("AFFILIATETITLE")}
        </Typography>
        <Typography className={classes.subtitle}>
          {t("AFFILIATESUBTITLE")}
        </Typography>
        <Typography className={classes.contents}>
          {t("AFFILIATECONTENT")}
        </Typography>

        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE0")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT0-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT0-2")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            3.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT0-3")}
          </Typography>
        </Grid>

        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE1")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT1-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT1-2")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            3.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT1-3")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            4.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT1-4")}
          </Typography>
        </Grid>
        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE2")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT2-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT2-2")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            3.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT2-3")}
          </Typography>
        </Grid>
        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE3")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT3-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT3-2")}
          </Typography>
        </Grid>
        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE4")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT4-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT4-2")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            3.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT4-3")}
          </Typography>
        </Grid>
        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE5")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT5-1")}
            <Grid className={classes.subChildItem}>
              <Typography className={classes.subItemNumber}>
                b)
              </Typography>
              <Typography className={classes.subItemContent}>
                {t("AFFILIATECONTENT5-1-1")}
              </Typography>
            </Grid>
            <Grid className={classes.subChildItem}>
              <Typography className={classes.subItemNumber}>
                c)
              </Typography>
              <Typography className={classes.subItemContent}>
                {t("AFFILIATECONTENT5-1-2")}
              </Typography>
            </Grid>
            <Grid className={classes.subChildItem}>
              <Typography className={classes.subItemNumber}>
                d)
              </Typography>
              <Typography className={classes.subItemContent}>
                {t("AFFILIATECONTENT5-1-3")}
              </Typography>
            </Grid>
            <Grid className={classes.subChildItem}>
              <Typography className={classes.subItemNumber}>
                e)
              </Typography>
              <Typography className={classes.subItemContent}>
                {t("AFFILIATECONTENT5-1-4")}
              </Typography>
            </Grid>
            {t("AFFILIATECONTENT5-1-5") ? (
               <Grid className={classes.subChildItem}>
                  <Typography className={classes.subItemNumber}>
                    f)
                  </Typography>
                  <Typography className={classes.subItemContent}>
                    {t("AFFILIATECONTENT5-1-5")}
                  </Typography>
                </Grid>
            )
             : <></>
             }
            {t("AFFILIATECONTENT5-1-6") ? (
                <Grid className={classes.subChildItem}>
                <Typography className={classes.subItemNumber}>
                  g)
                </Typography>
                <Typography className={classes.subItemContent}>
                  {t("AFFILIATECONTENT5-1-6")}
                </Typography>
              </Grid>
            ) : <></>
            }
            <Grid className={classes.subChildItem}>
              <Typography className={classes.subItemNumber}>
                h)
              </Typography>
              <Typography className={classes.subItemContent}>
                {t("AFFILIATECONTENT5-1-7")}
              </Typography>
            </Grid>
            <Grid className={classes.subChildItem}>
              <Typography className={classes.subItemNumber}>
                i)
              </Typography>
              <Typography className={classes.subItemContent}>
                {t("AFFILIATECONTENT5-1-8")}
              </Typography>
            </Grid>
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT5-2")}
          </Typography>
        </Grid>

        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE6")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT6-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT6-2")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            3.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT6-3")}
          </Typography>
        </Grid>

        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE7")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT7-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT7-2")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            3.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT7-3")}
          </Typography>
        </Grid>

        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE8")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT8-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT8-2")}
          </Typography>
        </Grid>

        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE9")}
        </Typography>
        <Typography className={classes.contents}>
          {t("AFFILIATECONTENT9")}
        </Typography>

        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE10")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT10-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT10-2")}
          </Typography>
        </Grid>

        <Typography className={classes.subtitleCenter}>
          {t("AFFILIATESUBTITLE11")}
        </Typography>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            1.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT11-1")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            2.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT11-2")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            3.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT11-3")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            4.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT11-4")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            5.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT11-5")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            6.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT11-6")}
          </Typography>
        </Grid>
        <Grid className={classes.subitem}>
          <Typography className={classes.subItemNumber}>
            7.
          </Typography>
          <Typography className={classes.subItemContent}>
            {t("AFFILIATECONTENT11-7")}
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  )
}
