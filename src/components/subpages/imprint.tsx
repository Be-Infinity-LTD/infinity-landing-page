import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/imprintstyle'
import { Typography } from '@material-ui/core'

export default function Imprint() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.largeTitle}>
            {t("FOOTERIMPRINT")}
        </Typography>
        <Typography className={classes.title}>
            {t("IMPRINTTITLE")}
        </Typography>
        <Typography className={classes.contents}>
            {t("IMPRINTCONTENT")}
        </Typography>
        <Grid className={classes.inline}>
          <Typography className={classes.title}>
              {t("IMPRINTTITLE1")}
          </Typography>
          <Typography className={classes.inlineContents}>
              &nbsp;&nbsp;{t("IMPRINTCONTENT1")}
          </Typography>
        </Grid>
        <Grid className={classes.inline}>
          <Typography className={classes.title}>
              {t("IMPRINTTITLE2")}
          </Typography>
          <Typography className={classes.inlineContents}>
              &nbsp;&nbsp;{t("IMPRINTCONTENT2")}
          </Typography>
        </Grid>
        <Grid className={classes.inline}>
          <Typography className={classes.title}>
              {t("IMPRINTTITLE3")}
          </Typography>
          <Typography className={classes.inlineContents}>
            &nbsp;&nbsp;{t("IMPRINTCONTENT3")}
          </Typography>
        </Grid>

        <Typography className={classes.contents}>
              {t("IMPRINTCOPYRIGHT")}
          </Typography>
      </Grid>
      <Footer />
    </Grid>
  )
}
